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
export class tbtextMetaData {
  public static XTYPE: string = 'tbtext';
  public static PROPERTIESOBJECT: any = {
    "activeCounter": "Number",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "animateShadow": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoEl": "String/Object",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseCls": "String",
    "bind": "Object/String",
    "border": "Number/String/Boolean",
    "childEls": "Object/String[]/Object[]",
    "cls": "String/String[]",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultAlign": "String",
    "defaultListenerScope": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "fixed": "Boolean",
    "flex": "Number",
    "floating": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideMode": "String",
    "html": "String/Object",
    "id": "String",
    "itemId": "String",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maxWidth": "Number",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "nameable": "Boolean",
    "overCls": "String",
    "overflowText": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scrollable": "Boolean/String/Object",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "style": "String/Object",
    "tabIndex": "Number",
    "text": "String",
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number|String",
    "xtype": "Ext.enums.Widget",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'activeCounter',
    'alignOnScroll',
    'alignTarget',
    'alwaysOnTop',
    'anchor',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoEl',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseCls',
    'bind',
    'border',
    'childEls',
    'cls',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultListenerScope',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'height',
    'hidden',
    'hideMode',
    'html',
    'id',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'nameable',
    'overCls',
    'overflowText',
    'overflowX',
    'overflowY',
    'padding',
    'plugins',
    'publishes',
    'reference',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'tabIndex',
    'text',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'viewModel',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'tbtext'},
		{name:'added',parameters:'tbtext,container,pos'},
		{name:'afterlayoutanimation',parameters:'tbtext'},
		{name:'afterrender',parameters:'tbtext'},
		{name:'beforeactivate',parameters:'tbtext'},
		{name:'beforedeactivate',parameters:'tbtext'},
		{name:'beforedestroy',parameters:'tbtext'},
		{name:'beforehide',parameters:'tbtext'},
		{name:'beforerender',parameters:'tbtext'},
		{name:'beforeshow',parameters:'tbtext'},
		{name:'beforestaterestore',parameters:'tbtext,state'},
		{name:'beforestatesave',parameters:'tbtext,state'},
		{name:'blur',parameters:'tbtext,event'},
		{name:'boxready',parameters:'tbtext,width,height'},
		{name:'deactivate',parameters:'tbtext'},
		{name:'destroy',parameters:'tbtext'},
		{name:'disable',parameters:'tbtext'},
		{name:'enable',parameters:'tbtext'},
		{name:'focus',parameters:'tbtext,event'},
		{name:'focusenter',parameters:'tbtext,event'},
		{name:'focusleave',parameters:'tbtext,event'},
		{name:'hide',parameters:'tbtext'},
		{name:'move',parameters:'tbtext,x,y'},
		{name:'removed',parameters:'tbtext,ownerCt'},
		{name:'render',parameters:'tbtext'},
		{name:'resize',parameters:'tbtext,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'tbtext'},
		{name:'staterestore',parameters:'tbtext,state'},
		{name:'statesave',parameters:'tbtext,state'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'deactivate',
		'destroy',
		'disable',
		'enable',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'move',
		'removed',
		'render',
		'resize',
		'show',
		'staterestore',
		'statesave',
		'ready'
];
}
@Component({
  selector: 'tbtext', 
  inputs: tbtextMetaData.PROPERTIES,
  outputs: tbtextMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtTbtextComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtTbtextComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,tbtextMetaData)}
  public ngOnInit() {this.baseOnInit(tbtextMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}