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
export class tbfillMetaData {
  public static XTYPE: string = 'tbfill';
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
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'tbfill'},
		{name:'added',parameters:'tbfill,container,pos'},
		{name:'afterlayoutanimation',parameters:'tbfill'},
		{name:'afterrender',parameters:'tbfill'},
		{name:'beforeactivate',parameters:'tbfill'},
		{name:'beforedeactivate',parameters:'tbfill'},
		{name:'beforedestroy',parameters:'tbfill'},
		{name:'beforehide',parameters:'tbfill'},
		{name:'beforerender',parameters:'tbfill'},
		{name:'beforeshow',parameters:'tbfill'},
		{name:'beforestaterestore',parameters:'tbfill,state'},
		{name:'beforestatesave',parameters:'tbfill,state'},
		{name:'blur',parameters:'tbfill,event'},
		{name:'boxready',parameters:'tbfill,width,height'},
		{name:'deactivate',parameters:'tbfill'},
		{name:'destroy',parameters:'tbfill'},
		{name:'disable',parameters:'tbfill'},
		{name:'enable',parameters:'tbfill'},
		{name:'focus',parameters:'tbfill,event'},
		{name:'focusenter',parameters:'tbfill,event'},
		{name:'focusleave',parameters:'tbfill,event'},
		{name:'hide',parameters:'tbfill'},
		{name:'move',parameters:'tbfill,x,y'},
		{name:'removed',parameters:'tbfill,ownerCt'},
		{name:'render',parameters:'tbfill'},
		{name:'resize',parameters:'tbfill,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'tbfill'},
		{name:'staterestore',parameters:'tbfill,state'},
		{name:'statesave',parameters:'tbfill,state'},
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
  selector: 'tbfill', 
  inputs: tbfillMetaData.PROPERTIES,
  outputs: tbfillMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtTbfillComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtTbfillComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,tbfillMetaData)}
  public ngOnInit() {this.baseOnInit(tbfillMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}