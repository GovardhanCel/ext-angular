import {
  Output,
  OnInit,
  AfterContentInit,
  OnChanges,
  Component,
  ElementRef,
  forwardRef
} from '@angular/core';
import { base } from './base';
export class propertygridMetaData {
  public static XTYPE: string = 'propertygrid';
  public static PROPERTIESOBJECT: any = {
    "actions": "Object",
    "activeChildTabIndex": "Number",
    "activeCounter": "Number",
    "activeItem": "String/Number",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allowDeselect": "Boolean",
    "allowFocusingDisabledChildren": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "anchorSize": "Number/Object",
    "animateShadow": "Boolean",
    "animCollapse": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoDestroy": "Boolean",
    "autoEl": "String/Object",
    "autoLoad": "Boolean",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseCls": "String",
    "bbar": "Object/Object[]",
    "bind": "Object/String",
    "bodyBorder": "Boolean",
    "bodyCls": "String/String[]",
    "bodyPadding": "Number/String",
    "bodyStyle": "String/Object/Function",
    "border": "Boolean",
    "bubbleEvents": "String[]",
    "bufferedRenderer": "Boolean",
    "buttonAlign": "String",
    "buttons": "Object[]",
    "childEls": "Object/String[]/Object[]",
    "closable": "Boolean",
    "closeAction": "String",
    "closeToolText": "String",
    "cls": "String/String[]",
    "collapsed": "Boolean",
    "collapsedCls": "String",
    "collapseDirection": "String",
    "collapseFirst": "Boolean",
    "collapseMode": "String",
    "collapseToolText": "String",
    "collapsible": "Boolean",
    "columnLines": "Boolean",
    "columns": "Object",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constrainHeader": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "customEditors": "Object",
    "customRenderers": "Object",
    "data": "Object",
    "defaultAlign": "String",
    "defaultButton": "String",
    "defaultButtonTarget": "String",
    "defaultDockWeights": "Object",
    "defaultFocus": "String",
    "defaultListenerScope": "Boolean",
    "defaults": "Object/Function",
    "defaultType": "String",
    "deferRowRender": "Boolean",
    "detachOnRemove": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "disableSelection": "Boolean",
    "dock": "'top'/'bottom'/'left'/'right'",
    "dockedItems": "Object/Object[]",
    "draggable": "Boolean/Object",
    "emptyText": "String",
    "enableColumnHide": "Boolean",
    "enableColumnMove": "Boolean",
    "enableColumnResize": "Boolean",
    "enableLocking": "Boolean",
    "expandToolText": "String",
    "fbar": "Object/Object[]",
    "features": "Ext.grid.feature.Feature[]/Object[]/Ext.enums.Feature[]",
    "fixed": "Boolean",
    "flex": "Number",
    "floatable": "Boolean",
    "floating": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "focused": "Ext.grid.CellContext/Ext.data.Model/Number",
    "focusOnToFront": "Boolean",
    "forceFit": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "frameHeader": "Boolean",
    "glyph": "Number/String",
    "header": "Boolean/Object",
    "headerBorders": "Boolean",
    "headerOverCls": "String",
    "headerPosition": "'top'/'bottom'/'left'/'right'",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideCollapseTool": "Boolean",
    "hideHeaders": "Boolean",
    "hideMode": "String",
    "html": "String/Object",
    "icon": "String",
    "iconAlign": "'top'/'right'/'bottom'/'left'",
    "iconCls": "String",
    "id": "String",
    "inactiveChildTabIndex": "Number",
    "inferTypes": "Boolean",
    "itemId": "String",
    "items": "Object/Object[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Ext.enums.Layout/Object",
    "lbar": "Object/Object[]",
    "leadingBufferZone": "Number",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "lockedGridConfig": "Object",
    "lockedViewConfig": "Object",
    "lockText": "String",
    "maintainTitlePosition": "Boolean",
    "manageHeight": "Boolean",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maxWidth": "Number",
    "minButtonWidth": "Number",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "multiColumnSort": "Boolean",
    "multiSelect": "Boolean",
    "nameable": "Boolean",
    "nameColumnWidth": "Number/String",
    "nameField": "String",
    "nameHolder": "Boolean",
    "normalGridConfig": "Object",
    "normalViewConfig": "Object",
    "numFromEdge": "Number",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "overlapHeader": "Boolean",
    "padding": "Number/String",
    "placeholder": "Ext.Component/Object",
    "placeholderCollapseHideMode": "Number",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "preciseHeight": "Boolean",
    "preventHeader": "Boolean",
    "propertyNames": "Object",
    "publishes": "String/String[]/Object",
    "rbar": "Object/Object[]",
    "reference": "String",
    "referenceHolder": "Boolean",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "reserveScrollbar": "Boolean",
    "resetFocusPosition": "Boolean",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "rowLines": "Boolean",
    "rowViewModel": "String/Object",
    "saveDelay": "Number",
    "scroll": "String/Boolean",
    "scrollable": "Boolean/String/Object",
    "sealedColumns": "Boolean",
    "selection": "Ext.data.Model",
    "selModel": "Ext.selection.Model/Object/String",
    "selType": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "shrinkWrapDock": "Boolean/Number",
    "simpleDrag": "Boolean",
    "simpleSelect": "Boolean",
    "sortableColumns": "Boolean",
    "source": "Object",
    "sourceConfig": "Object",
    "split": "Boolean/Object",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "store": "Object",
    "style": "String/Object",
    "subGridXType": "String",
    "suspendLayout": "Boolean",
    "syncRowHeight": "Boolean",
    "tabGuard": "Boolean",
    "tabIndex": "Number",
    "tbar": "Object/Object[]",
    "title": "String/Ext.panel.Title",
    "titleAlign": "'left'/'center'/'right'",
    "titleCollapse": "Boolean",
    "titlePosition": "Number",
    "titleRotation": "'default'/0/1/2",
    "toFrontOnShow": "Boolean",
    "tools": "Object[]/Ext.panel.Tool[]",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "trailingBufferZone": "Number",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "unlockText": "String",
    "userCls": "String/String[]",
    "valueField": "String",
    "variableRowHeight": "Boolean",
    "view": "Ext.view.Table",
    "viewConfig": "Object",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "viewType": "String",
    "weight": "Number",
    "width": "Number|String",
    "xtype": "Ext.enums.Widget",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'actions',
    'activeChildTabIndex',
    'activeCounter',
    'activeItem',
    'alignOnScroll',
    'alignTarget',
    'allowDeselect',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animateShadow',
    'animCollapse',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoEl',
    'autoLoad',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseCls',
    'bbar',
    'bind',
    'bodyBorder',
    'bodyCls',
    'bodyPadding',
    'bodyStyle',
    'border',
    'bubbleEvents',
    'bufferedRenderer',
    'buttonAlign',
    'buttons',
    'childEls',
    'closable',
    'closeAction',
    'closeToolText',
    'cls',
    'collapsed',
    'collapsedCls',
    'collapseDirection',
    'collapseFirst',
    'collapseMode',
    'collapseToolText',
    'collapsible',
    'columnLines',
    'columns',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constrainHeader',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'customEditors',
    'customRenderers',
    'data',
    'defaultAlign',
    'defaultButton',
    'defaultButtonTarget',
    'defaultDockWeights',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'deferRowRender',
    'detachOnRemove',
    'disabled',
    'disabledCls',
    'disableSelection',
    'dock',
    'dockedItems',
    'draggable',
    'emptyText',
    'enableColumnHide',
    'enableColumnMove',
    'enableColumnResize',
    'enableLocking',
    'expandToolText',
    'fbar',
    'features',
    'fixed',
    'flex',
    'floatable',
    'floating',
    'focusableContainer',
    'focusCls',
    'focused',
    'focusOnToFront',
    'forceFit',
    'formBind',
    'frame',
    'frameHeader',
    'glyph',
    'header',
    'headerBorders',
    'headerOverCls',
    'headerPosition',
    'height',
    'hidden',
    'hideCollapseTool',
    'hideHeaders',
    'hideMode',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'inactiveChildTabIndex',
    'inferTypes',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'lbar',
    'leadingBufferZone',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'lockedGridConfig',
    'lockedViewConfig',
    'lockText',
    'maintainTitlePosition',
    'manageHeight',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'minButtonWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'multiColumnSort',
    'multiSelect',
    'nameable',
    'nameColumnWidth',
    'nameField',
    'nameHolder',
    'normalGridConfig',
    'normalViewConfig',
    'numFromEdge',
    'overCls',
    'overflowX',
    'overflowY',
    'overlapHeader',
    'padding',
    'placeholder',
    'placeholderCollapseHideMode',
    'plugins',
    'preciseHeight',
    'preventHeader',
    'propertyNames',
    'publishes',
    'rbar',
    'reference',
    'referenceHolder',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'reserveScrollbar',
    'resetFocusPosition',
    'resizable',
    'resizeHandles',
    'rowLines',
    'rowViewModel',
    'saveDelay',
    'scroll',
    'scrollable',
    'sealedColumns',
    'selection',
    'selModel',
    'selType',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'shrinkWrapDock',
    'simpleDrag',
    'simpleSelect',
    'sortableColumns',
    'source',
    'sourceConfig',
    'split',
    'stateEvents',
    'stateful',
    'stateId',
    'store',
    'style',
    'subGridXType',
    'suspendLayout',
    'syncRowHeight',
    'tabGuard',
    'tabIndex',
    'tbar',
    'title',
    'titleAlign',
    'titleCollapse',
    'titlePosition',
    'titleRotation',
    'toFrontOnShow',
    'tools',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'trailingBufferZone',
    'twoWayBindable',
    'ui',
    'uiCls',
    'unlockText',
    'userCls',
    'valueField',
    'variableRowHeight',
    'view',
    'viewConfig',
    'viewModel',
    'viewType',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'propertygrid'},
		{name:'add',parameters:'propertygrid,component,index'},
		{name:'added',parameters:'propertygrid,container,pos'},
		{name:'afterlayout',parameters:'propertygrid,layout'},
		{name:'afterlayoutanimation',parameters:'propertygrid'},
		{name:'afterrender',parameters:'propertygrid'},
		{name:'beforeactivate',parameters:'propertygrid'},
		{name:'beforeadd',parameters:'propertygrid,component,index'},
		{name:'beforecellclick',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecellcontextmenu',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecelldblclick',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecellkeydown',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecellmousedown',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforecellmouseup',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforecontainerclick',parameters:'propertygrid,e'},
		{name:'beforecontainercontextmenu',parameters:'propertygrid,e'},
		{name:'beforecontainerdblclick',parameters:'propertygrid,e'},
		{name:'beforecontainerkeydown',parameters:'propertygrid,e'},
		{name:'beforecontainerkeypress',parameters:'propertygrid,e'},
		{name:'beforecontainerkeyup',parameters:'propertygrid,e'},
		{name:'beforecontainermousedown',parameters:'propertygrid,e'},
		{name:'beforecontainermouseout',parameters:'propertygrid,e'},
		{name:'beforecontainermouseover',parameters:'propertygrid,e'},
		{name:'beforecontainermouseup',parameters:'propertygrid,e'},
		{name:'beforedeactivate',parameters:'propertygrid'},
		{name:'beforedeselect',parameters:'propertygrid,record,index'},
		{name:'beforedestroy',parameters:'propertygrid'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'propertygrid'},
		{name:'beforeitemclick',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemcontextmenu',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemdblclick',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemkeydown',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemkeypress',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemkeyup',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemlongpress',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemmousedown',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemmouseenter',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemmouseleave',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeitemmouseup',parameters:'propertygrid,record,item,index,e'},
		{name:'beforeload',parameters:'store,operation'},
		{name:'beforepropertychange',parameters:'source,recordId,value,oldValue'},
		{name:'beforereconfigure',parameters:'propertygrid,store,columns,oldStore,oldColumns'},
		{name:'beforeremove',parameters:'propertygrid,component'},
		{name:'beforerender',parameters:'propertygrid'},
		{name:'beforerowbodyclick',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodycontextmenu',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodydblclick',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodykeydown',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodykeypress',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodykeyup',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodylongpress',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodymousedown',parameters:'view,rowBodyEl,e'},
		{name:'beforerowbodymouseup',parameters:'view,rowBodyEl,e'},
		{name:'beforerowexit',parameters:'propertygrid,keyEvent,prevRow,nextRow,forward'},
		{name:'beforeselect',parameters:'propertygrid,record,index'},
		{name:'beforeselectionextend',parameters:'grid,An,extension'},
		{name:'beforeshow',parameters:'propertygrid'},
		{name:'beforestaterestore',parameters:'propertygrid,state'},
		{name:'beforestatesave',parameters:'propertygrid,state'},
		{name:'blur',parameters:'propertygrid,event'},
		{name:'boxready',parameters:'propertygrid,width,height'},
		{name:'cellclick',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'cellcontextmenu',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'celldblclick',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'cellkeydown',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'cellmousedown',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'cellmouseup',parameters:'propertygrid,td,cellIndex,record,tr,rowIndex,e'},
		{name:'childmove',parameters:'propertygrid,component,prevIndex,newIndex'},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'columnhide',parameters:'ct,column'},
		{name:'columnmove',parameters:'ct,column,fromIdx,toIdx'},
		{name:'columnresize',parameters:'ct,column,width'},
		{name:'columnschanged',parameters:'ct'},
		{name:'columnshow',parameters:'ct,column'},
		{name:'containerclick',parameters:'propertygrid,e'},
		{name:'containercontextmenu',parameters:'propertygrid,e'},
		{name:'containerdblclick',parameters:'propertygrid,e'},
		{name:'containerkeydown',parameters:'propertygrid,e'},
		{name:'containerkeypress',parameters:'propertygrid,e'},
		{name:'containerkeyup',parameters:'propertygrid,e'},
		{name:'containermousedown',parameters:'propertygrid,e'},
		{name:'containermouseout',parameters:'propertygrid,e'},
		{name:'containermouseover',parameters:'propertygrid,e'},
		{name:'containermouseup',parameters:'propertygrid,e'},
		{name:'deactivate',parameters:'propertygrid'},
		{name:'deselect',parameters:'propertygrid,record,index'},
		{name:'destroy',parameters:'propertygrid'},
		{name:'disable',parameters:'propertygrid'},
		{name:'dockedadd',parameters:'propertygrid,component,index'},
		{name:'dockedremove',parameters:'propertygrid,component'},
		{name:'enable',parameters:'propertygrid'},
		{name:'expand',parameters:'p'},
		{name:'filteractivate',parameters:'propertygrid,column'},
		{name:'filterchange',parameters:'store,filters'},
		{name:'filterdeactivate',parameters:'propertygrid,column'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'propertygrid,event'},
		{name:'focusenter',parameters:'propertygrid,event'},
		{name:'focusleave',parameters:'propertygrid,event'},
		{name:'glyphchange',parameters:'propertygrid,newGlyph,oldGlyph'},
		{name:'groupchange',parameters:'store,grouper'},
		{name:'headerclick',parameters:'ct,column,e,t'},
		{name:'headercontextmenu',parameters:'ct,column,e,t'},
		{name:'headermenucreate',parameters:'grid,menu,headerCt'},
		{name:'headertriggerclick',parameters:'ct,column,e,t'},
		{name:'hide',parameters:'propertygrid'},
		{name:'iconalignchange',parameters:'propertygrid,newIconAlign,oldIconAlign'},
		{name:'iconchange',parameters:'propertygrid,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'propertygrid,newIconCls,oldIconCls'},
		{name:'itemclick',parameters:'propertygrid,record,item,index,e'},
		{name:'itemcontextmenu',parameters:'propertygrid,record,item,index,e'},
		{name:'itemdblclick',parameters:'propertygrid,record,item,index,e'},
		{name:'itemkeydown',parameters:'propertygrid,record,item,index,e'},
		{name:'itemkeypress',parameters:'propertygrid,record,item,index,e'},
		{name:'itemkeyup',parameters:'propertygrid,record,item,index,e'},
		{name:'itemlongpress',parameters:'propertygrid,record,item,index,e'},
		{name:'itemmousedown',parameters:'propertygrid,record,item,index,e'},
		{name:'itemmouseenter',parameters:'propertygrid,record,item,index,e'},
		{name:'itemmouseleave',parameters:'propertygrid,record,item,index,e'},
		{name:'itemmouseup',parameters:'propertygrid,record,item,index,e'},
		{name:'load',parameters:'propertygrid,records,successful,operation'},
		{name:'lockcolumn',parameters:'propertygrid,column'},
		{name:'move',parameters:'propertygrid,x,y'},
		{name:'processcolumns',parameters:'lockedColumns,normalColumns'},
		{name:'propertychange',parameters:'source,recordId,value,oldValue'},
		{name:'reconfigure',parameters:'propertygrid,store,columns,oldStore,oldColumns'},
		{name:'remove',parameters:'propertygrid,component'},
		{name:'removed',parameters:'propertygrid,ownerCt'},
		{name:'render',parameters:'propertygrid'},
		{name:'resize',parameters:'propertygrid,width,height,oldWidth,oldHeight'},
		{name:'rowbodyclick',parameters:'view,rowBodyEl,e'},
		{name:'rowbodycontextmenu',parameters:'view,rowBodyEl,e'},
		{name:'rowbodydblclick',parameters:'view,rowBodyEl,e'},
		{name:'rowbodykeydown',parameters:'view,rowBodyEl,e'},
		{name:'rowbodykeypress',parameters:'view,rowBodyEl,e'},
		{name:'rowbodykeyup',parameters:'view,rowBodyEl,e'},
		{name:'rowbodylongpress',parameters:'view,rowBodyEl,e'},
		{name:'rowbodymousedown',parameters:'view,rowBodyEl,e'},
		{name:'rowbodymouseup',parameters:'view,rowBodyEl,e'},
		{name:'rowclick',parameters:'propertygrid,record,element,rowIndex,e'},
		{name:'rowcontextmenu',parameters:'propertygrid,record,tr,rowIndex,e'},
		{name:'rowdblclick',parameters:'propertygrid,record,element,rowIndex,e'},
		{name:'rowkeydown',parameters:'propertygrid,record,element,rowIndex,e'},
		{name:'rowmousedown',parameters:'propertygrid,record,tr,rowIndex,e'},
		{name:'rowmouseup',parameters:'propertygrid,record,element,rowIndex,e'},
		{name:'select',parameters:'propertygrid,record,index'},
		{name:'selectionchange',parameters:'propertygrid,selected'},
		{name:'selectionextenderdrag',parameters:'grid,An,extension'},
		{name:'show',parameters:'propertygrid'},
		{name:'sortchange',parameters:'ct,column,direction'},
		{name:'staterestore',parameters:'propertygrid,state'},
		{name:'statesave',parameters:'propertygrid,state'},
		{name:'titlealignchange',parameters:'propertygrid,newTitleAlign,oldTitleAlign'},
		{name:'titlechange',parameters:'propertygrid,newTitle,oldTitle'},
		{name:'titlepositionchange',parameters:'propertygrid,newTitlePosition,oldTitlePosition'},
		{name:'titlerotationchange',parameters:'propertygrid,newTitleRotation,oldTitleRotation'},
		{name:'unfloat',parameters:''},
		{name:'unlockcolumn',parameters:'propertygrid,column'},
		{name:'viewready',parameters:'propertygrid'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'add',
		'added',
		'afterlayout',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforeadd',
		'beforecellclick',
		'beforecellcontextmenu',
		'beforecelldblclick',
		'beforecellkeydown',
		'beforecellmousedown',
		'beforecellmouseup',
		'beforeclose',
		'beforecollapse',
		'beforecontainerclick',
		'beforecontainercontextmenu',
		'beforecontainerdblclick',
		'beforecontainerkeydown',
		'beforecontainerkeypress',
		'beforecontainerkeyup',
		'beforecontainermousedown',
		'beforecontainermouseout',
		'beforecontainermouseover',
		'beforecontainermouseup',
		'beforedeactivate',
		'beforedeselect',
		'beforedestroy',
		'beforeexpand',
		'beforehide',
		'beforeitemclick',
		'beforeitemcontextmenu',
		'beforeitemdblclick',
		'beforeitemkeydown',
		'beforeitemkeypress',
		'beforeitemkeyup',
		'beforeitemlongpress',
		'beforeitemmousedown',
		'beforeitemmouseenter',
		'beforeitemmouseleave',
		'beforeitemmouseup',
		'beforeload',
		'beforepropertychange',
		'beforereconfigure',
		'beforeremove',
		'beforerender',
		'beforerowbodyclick',
		'beforerowbodycontextmenu',
		'beforerowbodydblclick',
		'beforerowbodykeydown',
		'beforerowbodykeypress',
		'beforerowbodykeyup',
		'beforerowbodylongpress',
		'beforerowbodymousedown',
		'beforerowbodymouseup',
		'beforerowexit',
		'beforeselect',
		'beforeselectionextend',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'cellclick',
		'cellcontextmenu',
		'celldblclick',
		'cellkeydown',
		'cellmousedown',
		'cellmouseup',
		'childmove',
		'close',
		'collapse',
		'columnhide',
		'columnmove',
		'columnresize',
		'columnschanged',
		'columnshow',
		'containerclick',
		'containercontextmenu',
		'containerdblclick',
		'containerkeydown',
		'containerkeypress',
		'containerkeyup',
		'containermousedown',
		'containermouseout',
		'containermouseover',
		'containermouseup',
		'deactivate',
		'deselect',
		'destroy',
		'disable',
		'dockedadd',
		'dockedremove',
		'enable',
		'expand',
		'filteractivate',
		'filterchange',
		'filterdeactivate',
		'float',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'groupchange',
		'headerclick',
		'headercontextmenu',
		'headermenucreate',
		'headertriggerclick',
		'hide',
		'iconalignchange',
		'iconchange',
		'iconclschange',
		'itemclick',
		'itemcontextmenu',
		'itemdblclick',
		'itemkeydown',
		'itemkeypress',
		'itemkeyup',
		'itemlongpress',
		'itemmousedown',
		'itemmouseenter',
		'itemmouseleave',
		'itemmouseup',
		'load',
		'lockcolumn',
		'move',
		'processcolumns',
		'propertychange',
		'reconfigure',
		'remove',
		'removed',
		'render',
		'resize',
		'rowbodyclick',
		'rowbodycontextmenu',
		'rowbodydblclick',
		'rowbodykeydown',
		'rowbodykeypress',
		'rowbodykeyup',
		'rowbodylongpress',
		'rowbodymousedown',
		'rowbodymouseup',
		'rowclick',
		'rowcontextmenu',
		'rowdblclick',
		'rowkeydown',
		'rowmousedown',
		'rowmouseup',
		'select',
		'selectionchange',
		'selectionextenderdrag',
		'show',
		'sortchange',
		'staterestore',
		'statesave',
		'titlealignchange',
		'titlechange',
		'titlepositionchange',
		'titlerotationchange',
		'unfloat',
		'unlockcolumn',
		'viewready',
		'ready'
];
}
@Component({
  selector: 'propertygrid', 
  inputs: propertygridMetaData.PROPERTIES,
  outputs: propertygridMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtPropertygridComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtPropertygridComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,propertygridMetaData)}
  public ngOnInit() {this.baseOnInit(propertygridMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}