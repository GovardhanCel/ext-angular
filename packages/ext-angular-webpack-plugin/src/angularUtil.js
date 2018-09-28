"use strict"

export function getDefaultOptions() {
  return {
    port: 1962,
    profile: '', 
    environment: 'development', 
    verbose: 'no',
    toolkit: 'modern',
    packages: null
  }
}

export function getDefaultVars() {
  return {
    firstTime : true,
    firstCompile: true,
    browserCount : 0,
    manifest: null,
    extPath: 'ext-angular',
    pluginErrors: [],
    deps: [],
    rebuild: true
  }
}




function toXtype(str) {
  return str.toLowerCase().replace(/_/g, '-')
}

export function extractFromSource(js) {
  var generate = require("@babel/generator").default
  var parse = require("babylon").parse
  var traverse = require("ast-traverse")
  const statements = []
  return statements  //temporary until angular parse is written
  
  const ast = parse(js, {
    plugins: [
      'jsx',
      'flow',
      'doExpressions',
      'objectRestSpread',
      'classProperties',
      'exportExtensions',
      'asyncGenerators',
      'functionBind',
      'functionSent',
      'dynamicImport'
    ],
    sourceType: 'module'
  })

  function addType(argNode) {
    var type
    if (argNode.type === 'StringLiteral') {
      var xtype = toXtype(argNode.value)
      if (xtype != 'extreact') {
        type = { xtype: toXtype(argNode.value) }
      }
    } else {
      type = { xclass: js.slice(argNode.start, argNode.end) }
    }
    if (type != undefined) {
      let config = JSON.stringify(type)
      statements.push(`Ext.create(${config})`)
    }
  }

  traverse(ast, {
    pre: function(node) {
      if (node.type === 'CallExpression'
          && node.callee
          && node.callee.object
          && node.callee.object.name === 'Ext'
      ) {
        statements.push(generate(node).code)
      }
      if (node.type == 'VariableDeclarator' 
          && node.init 
          && node.init.type === 'CallExpression' 
          && node.init.callee 
      ) {
        if (node.init.callee.name == 'reactify') {
          for (let i = 0; i < node.init.arguments.length; i++) {
            const valueNode = node.init.arguments[i];
            if (!valueNode) continue;
            addType(valueNode)
          }
         }
      }

      // // Convert React.createElement(...) calls to the equivalent Ext.create(...) calls to put in the manifest.
      // if (node.type === 'CallExpressionx' 
      //     && node.callee.object 
      //     && node.callee.object.name === 'React' 
      //     && node.callee.property.name === 'createElement') {
      //   const [props] = node.arguments
      //   let config
      //   if (Array.isArray(props.properties)) {
      //     config = generate(props).code
      //     for (let key in type) {
      //       config = `{\n  ${key}: '${type[key]}',${config.slice(1)}`
      //     }
      //   } else {
      //     config = JSON.stringify(type)
      //   }
      // }
    }
  })
  return statements
}
