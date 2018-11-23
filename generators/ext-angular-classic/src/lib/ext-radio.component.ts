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
export class radioMetaData {
  public static XTYPE: string = 'radio';
  public static PROPERTIESOBJECT: any = {
    "activeCounter": "Number",
    "activeError": "String",
    "activeErrorsTpl": "String/String[]/Ext.XTemplate",
    "afterBodyEl": "String/Array/Ext.XTemplate",
    "afterBoxLabelTextTpl": "String/Array/Ext.XTemplate",
    "afterBoxLabelTpl": "String/Array/Ext.XTemplate",
    "afterLabelTextTpl": "String/Array/Ext.XTemplate",
    "afterLabelTpl": "String/Array/Ext.XTemplate",
    "afterSubTpl": "String/Array/Ext.XTemplate",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
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
    "beforeBoxLabelTextTpl": "String/Array/Ext.XTemplate",
    "beforeBoxLabelTpl": "String/Array/Ext.XTemplate",
    "beforeLabelTextTpl": "String/Array/Ext.XTemplate",
    "beforeLabelTpl": "String/Array/Ext.XTemplate",
    "beforeSubTpl": "String/Array/Ext.XTemplate",
    "bind": "Object/String",
    "border": "Number/String/Boolean",
    "boxLabel": "String",
    "boxLabelAlign": "String",
    "boxLabelAttrTpl": "String/Array/Ext.XTemplate",
    "boxLabelCls": "String",
    "checkChangeBuffer": "Number",
    "checkChangeEvents": "String[]",
    "checked": "Boolean",
    "checkedCls": "String",
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
    "handler": "Function/String",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideEmptyLabel": "Boolean",
    "hideLabel": "Boolean",
    "hideMode": "String",
    "html": "String/Object",
    "id": "String",
    "inputAttrTpl": "String/Array/Ext.XTemplate",
    "inputId": "String",
    "inputType": "String",
    "inputValue": "String/Boolean",
    "invalidCls": "String",
    "invalidText": "String",
    "isTextInput": "Boolean",
    "itemId": "String",
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
    "maxWidth": "Number",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "modelValue": "Boolean/String/Number",
    "modelValueUnchecked": "Boolean/String/Number",
    "msgTarget": "String",
    "name": "String",
    "nameable": "Boolean",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "padding": "Number/String",
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
    "scope": "Object",
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
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "uncheckedValue": "String",
    "userCls": "String/String[]",
    "validateOnBlur": "Boolean",
    "validateOnChange": "Boolean",
    "validateOnFocusLeave": "Boolean",
    "validation": "Boolean/String",
    "validationField": "Ext.data.Field",
    "value": "Object",
    "valuePublishEvent": "String[]/String",
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
    'activeError',
    'activeErrorsTpl',
    'afterBodyEl',
    'afterBoxLabelTextTpl',
    'afterBoxLabelTpl',
    'afterLabelTextTpl',
    'afterLabelTpl',
    'afterSubTpl',
    'alignOnScroll',
    'alignTarget',
    'alwaysOnTop',
    'anchor',
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
    'beforeBoxLabelTextTpl',
    'beforeBoxLabelTpl',
    'beforeLabelTextTpl',
    'beforeLabelTpl',
    'beforeSubTpl',
    'bind',
    'border',
    'boxLabel',
    'boxLabelAlign',
    'boxLabelAttrTpl',
    'boxLabelCls',
    'checkChangeBuffer',
    'checkChangeEvents',
    'checked',
    'checkedCls',
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
    'handler',
    'height',
    'hidden',
    'hideEmptyLabel',
    'hideLabel',
    'hideMode',
    'html',
    'id',
    'inputAttrTpl',
    'inputId',
    'inputType',
    'inputValue',
    'invalidCls',
    'invalidText',
    'isTextInput',
    'itemId',
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
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'modelValue',
    'modelValueUnchecked',
    'msgTarget',
    'name',
    'nameable',
    'overCls',
    'overflowX',
    'overflowY',
    'padding',
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
    'scope',
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
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'uncheckedValue',
    'userCls',
    'validateOnBlur',
    'validateOnChange',
    'validateOnFocusLeave',
    'validation',
    'validationField',
    'value',
    'valuePublishEvent',
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
		{name:'activate',parameters:'radiofield'},
		{name:'added',parameters:'radiofield,container,pos'},
		{name:'afterlayoutanimation',parameters:'radiofield'},
		{name:'afterrender',parameters:'radiofield'},
		{name:'beforeactivate',parameters:'radiofield'},
		{name:'beforedeactivate',parameters:'radiofield'},
		{name:'beforedestroy',parameters:'radiofield'},
		{name:'beforehide',parameters:'radiofield'},
		{name:'beforerender',parameters:'radiofield'},
		{name:'beforeshow',parameters:'radiofield'},
		{name:'beforestaterestore',parameters:'radiofield,state'},
		{name:'beforestatesave',parameters:'radiofield,state'},
		{name:'blur',parameters:'radiofield,event'},
		{name:'boxready',parameters:'radiofield,width,height'},
		{name:'change',parameters:'radiofield,newValue,oldValue'},
		{name:'deactivate',parameters:'radiofield'},
		{name:'destroy',parameters:'radiofield'},
		{name:'dirtychange',parameters:'radiofield,isDirty'},
		{name:'disable',parameters:'radiofield'},
		{name:'enable',parameters:'radiofield'},
		{name:'errorchange',parameters:'radiofield,error'},
		{name:'focus',parameters:'radiofield,event'},
		{name:'focusenter',parameters:'radiofield,event'},
		{name:'focusleave',parameters:'radiofield,event'},
		{name:'hide',parameters:'radiofield'},
		{name:'move',parameters:'radiofield,x,y'},
		{name:'removed',parameters:'radiofield,ownerCt'},
		{name:'render',parameters:'radiofield'},
		{name:'resize',parameters:'radiofield,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'radiofield'},
		{name:'specialkey',parameters:'radiofield,e'},
		{name:'staterestore',parameters:'radiofield,state'},
		{name:'statesave',parameters:'radiofield,state'},
		{name:'validitychange',parameters:'radiofield,isValid'},
		{name:'writeablechange',parameters:'radiofield,Read'},
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
		'change',
		'deactivate',
		'destroy',
		'dirtychange',
		'disable',
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
  selector: 'radio', 
  inputs: radioMetaData.PROPERTIES,
  outputs: radioMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtRadioComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtRadioComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,radioMetaData)}
  public ngOnInit() {this.baseOnInit(radioMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}