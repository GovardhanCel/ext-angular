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
export class filefieldMetaData {
  public static XTYPE: string = 'filefield';
  public static PROPERTIESOBJECT: any = {
    "accept": "String",
    "activeCounter": "Number",
    "activeError": "String",
    "activeErrorsTpl": "String/String[]/Ext.XTemplate",
    "afterBodyEl": "String/Array/Ext.XTemplate",
    "afterLabelTextTpl": "String/Array/Ext.XTemplate",
    "afterLabelTpl": "String/Array/Ext.XTemplate",
    "afterSubTpl": "String/Array/Ext.XTemplate",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allowBlank": "Boolean",
    "allowOnlyWhitespace": "Boolean",
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
    "autoHideInputMask": "Boolean",
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
    "blankText": "String",
    "border": "Number/String/Boolean",
    "buttonConfig": "Object",
    "buttonMargin": "Number",
    "buttonOnly": "Boolean",
    "buttonText": "String",
    "checkChangeBuffer": "Number",
    "checkChangeEvents": "String[]",
    "childEls": "Object/String[]/Object[]",
    "clearOnSubmit": "Boolean",
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
    "disableKeyFilter": "Boolean",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "editable": "Boolean",
    "emptyCls": "String",
    "emptyText": "String",
    "enableKeyEvents": "Boolean",
    "enforceMaxLength": "Boolean",
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
    "grow": "Boolean",
    "growMax": "Number",
    "growMin": "Number",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideEmptyLabel": "Boolean",
    "hideLabel": "Boolean",
    "hideMode": "String",
    "hideTrigger": "Boolean",
    "html": "String/Object",
    "id": "String",
    "inputAttrTpl": "String/Array/Ext.XTemplate",
    "inputId": "String",
    "inputMask": "String/Ext.field.InputMask",
    "inputType": "String",
    "inputWrapCls": "String",
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
    "maskRe": "RegExp",
    "maxHeight": "Number",
    "maxLength": "Number",
    "maxLengthText": "String",
    "maxWidth": "Number",
    "minHeight": "Number",
    "minLength": "Number",
    "minLengthText": "String",
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
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "preventMark": "Boolean",
    "publishes": "String/String[]/Object",
    "readOnly": "Boolean",
    "readOnlyCls": "String",
    "reference": "String",
    "regex": "RegExp",
    "regexText": "String",
    "region": "'north'/'south'/'east'/'west'/'center'",
    "renderConfig": "Object",
    "renderData": "Object",
    "renderSelectors": "Object",
    "renderTo": "String/HTMLElement/Ext.dom.Element",
    "renderTpl": "Ext.XTemplate/String/String[]",
    "repeatTriggerClick": "Boolean",
    "requiredCls": "String",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "saveDelay": "Number",
    "scrollable": "Boolean/String/Object",
    "selectOnFocus": "Boolean",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "size": "Number",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "stripCharsRe": "RegExp",
    "style": "String/Object",
    "submitValue": "Boolean",
    "tabIndex": "Number",
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "triggers": "Object",
    "triggerWrapCls": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "validateBlank": "Boolean",
    "validateOnBlur": "Boolean",
    "validateOnChange": "Boolean",
    "validateOnFocusLeave": "Boolean",
    "validation": "Boolean/String",
    "validationField": "Ext.data.Field",
    "validator": "Function",
    "value": "Object",
    "valuePublishEvent": "String[]/String",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "vtype": "String",
    "vtypeText": "String",
    "weight": "Number",
    "width": "Number|String",
    "xtype": "Ext.enums.Widget",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'accept',
    'activeCounter',
    'activeError',
    'activeErrorsTpl',
    'afterBodyEl',
    'afterLabelTextTpl',
    'afterLabelTpl',
    'afterSubTpl',
    'alignOnScroll',
    'alignTarget',
    'allowBlank',
    'allowOnlyWhitespace',
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
    'autoHideInputMask',
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
    'blankText',
    'border',
    'buttonConfig',
    'buttonMargin',
    'buttonOnly',
    'buttonText',
    'checkChangeBuffer',
    'checkChangeEvents',
    'childEls',
    'clearOnSubmit',
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
    'disableKeyFilter',
    'dock',
    'draggable',
    'editable',
    'emptyCls',
    'emptyText',
    'enableKeyEvents',
    'enforceMaxLength',
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
    'grow',
    'growMax',
    'growMin',
    'height',
    'hidden',
    'hideEmptyLabel',
    'hideLabel',
    'hideMode',
    'hideTrigger',
    'html',
    'id',
    'inputAttrTpl',
    'inputId',
    'inputMask',
    'inputType',
    'inputWrapCls',
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
    'maskRe',
    'maxHeight',
    'maxLength',
    'maxLengthText',
    'maxWidth',
    'minHeight',
    'minLength',
    'minLengthText',
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
    'plugins',
    'preventMark',
    'publishes',
    'readOnly',
    'readOnlyCls',
    'reference',
    'regex',
    'regexText',
    'region',
    'renderConfig',
    'renderData',
    'renderSelectors',
    'renderTo',
    'renderTpl',
    'repeatTriggerClick',
    'requiredCls',
    'resizable',
    'resizeHandles',
    'saveDelay',
    'scrollable',
    'selectOnFocus',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'size',
    'stateEvents',
    'stateful',
    'stateId',
    'stripCharsRe',
    'style',
    'submitValue',
    'tabIndex',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'triggers',
    'triggerWrapCls',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'validateBlank',
    'validateOnBlur',
    'validateOnChange',
    'validateOnFocusLeave',
    'validation',
    'validationField',
    'validator',
    'value',
    'valuePublishEvent',
    'viewModel',
    'vtype',
    'vtypeText',
    'weight',
    'width',
    'xtype',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'filefield'},
		{name:'added',parameters:'filefield,container,pos'},
		{name:'afterlayoutanimation',parameters:'filefield'},
		{name:'afterrender',parameters:'filefield'},
		{name:'autosize',parameters:'filefield,width'},
		{name:'beforeactivate',parameters:'filefield'},
		{name:'beforedeactivate',parameters:'filefield'},
		{name:'beforedestroy',parameters:'filefield'},
		{name:'beforehide',parameters:'filefield'},
		{name:'beforerender',parameters:'filefield'},
		{name:'beforeshow',parameters:'filefield'},
		{name:'beforestaterestore',parameters:'filefield,state'},
		{name:'beforestatesave',parameters:'filefield,state'},
		{name:'blur',parameters:'filefield,event'},
		{name:'boxready',parameters:'filefield,width,height'},
		{name:'change',parameters:'filefield,value'},
		{name:'deactivate',parameters:'filefield'},
		{name:'destroy',parameters:'filefield'},
		{name:'dirtychange',parameters:'filefield,isDirty'},
		{name:'disable',parameters:'filefield'},
		{name:'enable',parameters:'filefield'},
		{name:'errorchange',parameters:'filefield,error'},
		{name:'focus',parameters:'filefield,event'},
		{name:'focusenter',parameters:'filefield,event'},
		{name:'focusleave',parameters:'filefield,event'},
		{name:'hide',parameters:'filefield'},
		{name:'keydown',parameters:'filefield,e'},
		{name:'keypress',parameters:'filefield,e'},
		{name:'keyup',parameters:'filefield,e'},
		{name:'move',parameters:'filefield,x,y'},
		{name:'paste',parameters:'filefield,e'},
		{name:'removed',parameters:'filefield,ownerCt'},
		{name:'render',parameters:'filefield'},
		{name:'resize',parameters:'filefield,width,height,oldWidth,oldHeight'},
		{name:'show',parameters:'filefield'},
		{name:'specialkey',parameters:'filefield,e'},
		{name:'staterestore',parameters:'filefield,state'},
		{name:'statesave',parameters:'filefield,state'},
		{name:'validitychange',parameters:'filefield,isValid'},
		{name:'writeablechange',parameters:'filefield,Read'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'autosize',
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
		'keydown',
		'keypress',
		'keyup',
		'move',
		'paste',
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
  selector: 'filefield', 
  inputs: filefieldMetaData.PROPERTIES,
  outputs: filefieldMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtFilefieldComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtFilefieldComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,filefieldMetaData)}
  public ngOnInit() {this.baseOnInit(filefieldMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}