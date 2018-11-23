declare var Ext: any
import { Component, OnInit } from '@angular/core'
import { navTreeRoot } from '../../../examples/index'
import { Router, NavigationEnd } from '@angular/router'
import { VERSION } from '@angular/core'
import { Subject } from "rxjs"

const generateBreadcrumb = (node) => {
  const path = []
  do {
    path.unshift({
      isLeaf: !node.childNodes.length,
      text: node.get("text"),
      path: node.get("id"),
      divider: '&nbsp;>&nbsp;'
    })
  } while (node = node.parentNode)
  path[path.length-1].divider = ''
  return path
}

@Component({
  selector: 'app-root',
  templateUrl: 'landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  menuhidden: any
  routerhidden: any
  ANGULAR_VERSION: any = VERSION.full
  node: any
  node$: any = new Subject()
  breadcrumb: Array<any>
  filterRegex: any
  filterVal: any
  showTreeFlag: any = true
  blockstyle: any = {'background':'top','display':'block','text-align':'center'}

  treeStore: any = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: navTreeRoot
  })

  theDataview: any
  tpl: any = `
  <div class="app-thumbnail">
    <div class="app-thumbnail-icon-wrap">
      <div class="app-thumbnail-icon {navIcon}"></div>
    </div>
    <div className="app-thumbnail-text" >{text}</div>
  </div>`
  dataviewReady = (event) => {
    this.theDataview = event.ext
  }
  doClick = (event) => {
    //if( window.console ) console.log('dataView.click(%o,%o,%o,%o)',view,index,node,event);
    var id = event.location.record.data.id
    this.navigate(id)
  }

  theDataviewToolbar: any
  tplToolbar: any = `
  <div class="app-toolbar">
    {text} <span>{divider}</span>
  </div>`
  dataviewToolbarReady = (event) => {
    this.theDataviewToolbar = event.ext
  }
  doClickToolbar = (event) => {
    console.log('click')
    console.log(event.location.record.data)
    var id = event.location.record.data.path
    this.navigate(id)
  }

  constructor(private router: Router) {
    console.log('constructor')

    this.node$.subscribe(({
      next: (v) => {
        console.log('node subscribe')
        this.node = v
        this.breadcrumb = generateBreadcrumb(v)
        if (this.theDataviewToolbar != undefined) {
          this.theDataviewToolbar.setData(this.breadcrumb)
        }
      }
    }))

    router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        console.log('router subscribe: ' + val.url)
        var node = this.treeStore.getNodeById(val.url);
        if(node.childNodes.length == 0) {
          this.menuhidden = true
          this.routerhidden = false
        }
        else {
          this.menuhidden = false
          this.routerhidden = true
          this.theDataview.setData(node.childNodes)
        }
        this.breadcrumb = generateBreadcrumb(node)
        if (this.theDataviewToolbar != undefined) {
          this.theDataviewToolbar.setData(this.breadcrumb)
        }
      }
    })
  }

  ngOnInit() {
    console.log('ngOnInit')
    this.node$.next(this.treeStore.getNodeById(location.pathname));
  }

  navigate(location) {
    console.log('navigate')
    this.router.navigateByUrl(location);
  }

  selectionChanged(event) {
    console.log('selectionChanged')
    var record = event.record;
    if(record && record.data && record.data.id) {
      var componentSelectedId = record.data.id;
      console.log("selectionChanged ID: " + componentSelectedId);
      this.router.navigate([componentSelectedId]);
    }
  }

  toggleTree = function(){
    this.showTreeFlag = !this.showTreeFlag;
  }

  filterNav = function(event) {
    var oldValue = event.oldValue;
    var newValue = event.newValue;
    this.filterVal = newValue;
    console.log("In filterNav.oldValue : " + oldValue + " newValue: " + newValue);
    const store = this.treeStore;
    var escapeRegex = Ext.String.escapeRegex(newValue);
    console.log(escapeRegex);
    this.filterRegex = new RegExp(escapeRegex, 'i');
    store.filterBy(record => this.containsMatches(record));
  }

  containsMatches(node) {
    const found = node.data.name.match(this.filterRegex) || node.childNodes.some(child => this.containsMatches(child));
    if (found) node.expand();
    node.data.text = node.data.name.replace(this.filterRegex, '<span style="color:#2196F3;font-weight:bold">' + this.filterVal + '</span>')
    return found;
  }
}

@Component({
  selector: 'dummy-component',
  template: ``,
  styles: [``]
})
export class DummyComponent implements OnInit {
  ngOnInit() {
  }
}