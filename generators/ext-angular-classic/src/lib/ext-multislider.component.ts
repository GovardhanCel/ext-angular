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
export class multisliderMetaData {
  public static XTYPE: string = 'multislider';
  public static PROPERTIESOBJECT: any = {
    "activeCounter": "Number",
    "activeError": "String",
    "activeErrorsTpl": "String/String[]/Ext.XTemplate",
    "afterBodyEl": "String/Array/Ext.XTemplate",
    "afterLabelTextTpl": "String/Array/Ext.XTemplate",
    "afterLabelTpl": "String/Array/Ext.XTemplate",
    "afterSubTpl": "String/Array/Ext.XTemplate",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "animate": "Object/Boolean",
    "animateShadow": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaErrorText": "String",
    "ariaHelp": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoEl": "String/Object",
    "autoFitErrors": "Boolean",
    "autoRender": "Boolean/String/HTMLElement/Ext.dom.Element",
    "autoScroll": "Boolean",
    "autoShow": "Boolean",
    "baseBodyCls": "String",
    "baseCls": "String",
    "beforeBodyEl": "String/Array/Ext.XTemplate",
    "beforeLabelTextTpl": "String/Array/Ext.XTemplate",
    "beforeLabelTpl": "String/Array/Ext.XTemplate",
    "beforeSubTpl": "String/Array/Ext.XTemplate",
    "bind": "Object/String",
    "border": "Number/String/Boolean",
    "checkChangeBuffer": "Number",
    "checkChangeEvents": "String[]",
    "childEls": "Object/String[]/Object[]",
    "clickToChange": "Boolean",
    "cls": "String/String[]",
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constrainThumbs": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "decimalPrecision": "Number/Boolean",
    "defaultAlign": "String",
    "defaultListenerScope": "Boolean",
    "dirtyCls": "String",
    "disabled": "Boolean",
    "disabledCls": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "errorMsgCls": "String",
    "fieldBodyCls": "String",
    "fieldCls": "String",
    "fieldLabel": "String",
    "fieldStyle": "String",
    "fieldSubTpl": "Ext.XTemplate",
    "fixed": "Boolean",
    "flex": "Number",
    "floating": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formatText": "String",
    "formBind": "Boolean",
    "formItemCls": "String",
    "frame": "Boolean",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideEmptyLabel": "Boolean",
    "hideLabel": "Boolean",
    "hideMode": "String",
    "html": "String/Object",
    "id": "String",
    "increment": "Number",
    "inputAttrTpl": "String/Array/Ext.XTemplate",
    "inputId": "String",
    "inputType": "String",
    "invalidCls": "String",
    "invalidText": "String",
    "isTextInput": "Boolean",
    "itemId": "String",
    "keyIncrement": "Number",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "labelableRenderTpl": "String/String[]/Ext.XTemplate",
    "labelAlign": "String",
    "labelAttrTpl": "String/Array/Ext.XTemplate",
    "labelCls": "String",
    "labelClsExtra": "String",
    "labelPad": "Number",
    "labelSeparator": "String",
    "labelStyle": "String",
    "labelWidth": "Number",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maxValue": "Number",
    "maxWidth": "Number",
    "minHeight": "Number",
    "minValue": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "msgTarget": "String",
    "name": "String",
    "nameable": "Boolean",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
    "pageSize": "Number",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "preventMark": "Boolean",
    "publishes": "String/String[]/Object",
    "readOnly": "Boolean",
    "readOnlyCls": "String",
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
    "submitValue": "Boolean",
    "tabIndex": "Number",
    "thumbPerValue": "Boolean",
    "tipText": "Function/String",
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "useTips": "Object/Boolean",
    "validateOnBlur": "Boolean",
    "validateOnChange": "Boolean",
    "validateOnFocusLeave": "Boolean",
    "validation": "Boolean/String",
    "validationField": "Ext.data.Field",
    "value": "Number",
    "valuePublishEvent": "String[]/String",
    "values": "Number[]",
    "vertical": "Boolean",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number|String",
    "xtype": "Ext.enums.Widget",
    "zeroBasedSnapping": "Boolean",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'activeCounter',
    'activeError',
    'activeErrorsTpl',
    'afterBodyEl',
    'afterLabelTextTpl',
    'afterLabelTpl',
    'afterSubTpl',
    'alignOnScroll',
    'alignTarget',
    'alwaysOnTop',
    'anchor',
    'animate',
    'animateShadow',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaErrorText',
    'ariaHelp',
    'ariaLabel',
    'ariaLabelledBy',
    'autoEl',
    'autoFitErrors',
    'autoRender',
    'autoScroll',
    'autoShow',
    'baseBodyCls',
    'baseCls',
    'beforeBodyEl',
    'beforeLabelTextTpl',
    'beforeLabelTpl',
    'beforeSubTpl',
    'bind',
    'border',
    'checkChangeBuffer',
    'checkChangeEvents',
    'childEls',
    'clickToChange',
    'cls',
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constrainThumbs',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'decimalPrecision',
    'defaultAlign',
    'defaultListenerScope',
    'dirtyCls',
    'disabled',
    'disabledCls',
    'dock',
    'draggable',
    'errorMsgCls',
    'fieldBodyCls',
    'fieldCls',
    'fieldLabel',
    'fieldStyle',
    'fieldSubTpl',
    'fixed',
    'flex',
    'floating',
    'focusCls',
    'focusOnToFront',
    'formatText',
    'formBind',
    'formItemCls',
    'frame',
    'height',
    'hidden',
    'hideEmptyLabel',
    'hideLabel',
    'hideMode',
    'html',
    'id',
    'increment',
    'inputAttrTpl',
    'inputId',
    'inputType',
    'invalidCls',
    'invalidText',
    'isTextInput',
    'itemId',
    'keyIncrement',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'labelableRenderTpl',
    'labelAlign',
    'labelAttrTpl',
    'labelCls',
    'labelClsExtra',
    'labelPad',
    'labelSeparator',
    'labelStyle',
    'labelWidth',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxValue',
    'maxWidth',
    'minHeight',
    'minValue',
    'minWidth',
    'modal',
    'modelValidation',
    'msgTarget',
    'name',
    'nameable',
    'overCls',
    'overflowX',
    'overflowY',
    'padding',
    'pageSize',
    'plugins',
    'preventMark',
    'publishes',
    'readOnly',
    'readOnlyCls',
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
    'submitValue',
    'tabIndex',
    'thumbPerValue',
    'tipText',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'useTips',
    'validateOnBlur',
    'validateOnChange',
    'validateOnFocusLeave',
    'validation',
    'validationField',
    'value',
    'valuePublishEvent',
    'values',
    'vertical',
    'viewModel',
    'weight',
    'width',
    'xtype',
    'zeroBasedSnapping',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'multislider'},
		{name:'added',parameters:'multislider,container,pos'},
		{name:'afterlayoutanimation',parameters:'multislider'},
		{name:'afterrender',parameters:'multislider'},
		{name:'beforeactivate',parameters:'multislider'},
		{name:'beforechange',parameters:'slider,newValue,oldValue,thumb,type'},
		{name:'beforedeactivate',parameters:'multislider'},
		{name:'beforedestroy',parameters:'multislider'},
		{name:'beforehide',parameters:'multislider'},
		{name:'beforerender',parameters:'multislider'},
		{name:'beforeshow',parameters:'multislider'},
		{name:'beforestaterestore',parameters:'multislider,state'},
		{name:'beforestatesave',parameters:'multislider,state'},
		{name:'blur',parameters:'multislider,event'},
		{name:'boxready',parameters:'multislider,width,height'},
		{name:'change',parameters:'slider,newValue,thumb,type'},
		{name:'changecomplete',parameters:'slider,newValue,thumb'},
		{name:'deactivate',parameters:'multislider'},
		{name:'destroy',parameters:'multislider'},
		{name:'dirtychange',parameters:'multislider,isDirty'},
		{name:'disable',parameters:'multislider'},
		{name:'drag',parameters:'slider,e'},
		{name:'dragend',parameters:'slider,e'},
		{name:'dragstart',parameters:'slider,e'},
		{name:'enable',parameters:'multislider'},
		{name:'errorchange',parameters:'multislider,error'},
		{name:'focus',parameters:'multislider,event'},
		{name:'focusenter',parameters:'multislider,event'},
		{name:'focusleave',parameters:'multislider,event'},
		{name:'hide',parameters:'multislider'},
		{name:'move',parameters:'multislider,x,y'},
		{name:'removed',parameters:'multislider,ownerCt'},
		{name:'render',parameters:'multislider'},
		{name:'resize',parameters:'multislider,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'multislider'},
		{name:'specialkey',parameters:'multislider,e'},
		{name:'staterestore',parameters:'multislider,state'},
		{name:'statesave',parameters:'multislider,state'},
		{name:'validitychange',parameters:'multislider,isValid'},
		{name:'writeablechange',parameters:'multislider,Read'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
		'beforechange',
		'beforedeactivate',
		'beforedestroy',
		'beforehide',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'change',
		'changecomplete',
		'deactivate',
		'destroy',
		'dirtychange',
		'disable',
		'drag',
		'dragend',
		'dragstart',
		'enable',
		'errorchange',
		'focus',
		'focusenter',
		'focusleave',
		'hide',
		'move',
		'removed',
		'render',
		'resize',
		'show',
		'specialkey',
		'staterestore',
		'statesave',
		'validitychange',
		'writeablechange',
		'ready'
];
}
@Component({
  selector: 'multislider', 
  inputs: multisliderMetaData.PROPERTIES,
  outputs: multisliderMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtMultisliderComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtMultisliderComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,multisliderMetaData)}
  public ngOnInit() {this.baseOnInit(multisliderMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}