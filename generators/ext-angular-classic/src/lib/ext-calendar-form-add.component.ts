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
export class calendar_form_addMetaData {
  public static XTYPE: string = 'calendar-form-add';
  public static PROPERTIESOBJECT: any = {
    "actions": "Object",
    "activeChildTabIndex": "Number",
    "activeCounter": "Number",
    "activeItem": "String/Number",
    "alignOnScroll": "Boolean",
    "alignTarget": "String",
    "allDayField": "Object",
    "allowFocusingDisabledChildren": "Boolean",
    "alwaysOnTop": "Boolean/Number",
    "anchor": "String",
    "anchorSize": "Number/Object",
    "animateShadow": "Boolean",
    "animateTarget": "String/Ext.dom.Element/Ext.Component/Boolean",
    "animCollapse": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "autoDestroy": "Boolean",
    "autoEl": "String/Object",
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
    "buttonAlign": "String",
    "buttons": "Object[]",
    "calendarField": "Object",
    "cancelButton": "Object",
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
    "columnWidth": "Number",
    "componentCls": "String",
    "componentLayout": "String/Object",
    "constrain": "Boolean",
    "constrainHeader": "Boolean",
    "constraintInsets": "Object/String",
    "constrainTo": "Ext.util.Region/Ext.dom.Element",
    "contentEl": "String",
    "controller": "String/Object/Ext.app.ViewController",
    "data": "Object",
    "defaultAlign": "String",
    "defaultButton": "String",
    "defaultButtonTarget": "String",
    "defaultDockWeights": "Object",
    "defaultEndTime": "Number[]",
    "defaultFocus": "String/Number/Ext.Component",
    "defaultListenerScope": "Boolean",
    "defaults": "Object/Function",
    "defaultStartTime": "Number[]",
    "defaultType": "String",
    "descriptionField": "Object",
    "detachOnRemove": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "dockedItems": "Object/Object[]",
    "draggable": "Boolean",
    "dropButton": "Object",
    "endDateField": "Object",
    "endTimeField": "Object",
    "event": "Ext.calendar.model.EventBase",
    "expandOnShow": "Boolean",
    "expandToolText": "String",
    "fbar": "Object/Object[]",
    "fixed": "Boolean",
    "flex": "Number",
    "floatable": "Boolean",
    "floating": "Boolean",
    "focusableContainer": "Boolean",
    "focusCls": "String",
    "focusOnToFront": "Boolean",
    "formBind": "Boolean",
    "frame": "Boolean",
    "frameHeader": "Boolean",
    "fromContainer": "Object",
    "ghost": "Boolean/Function",
    "glyph": "Number/String",
    "header": "Boolean/Object",
    "headerOverCls": "String",
    "headerPosition": "'top'/'bottom'/'left'/'right'",
    "height": "Number|String",
    "hidden": "Boolean",
    "hideCollapseTool": "Boolean",
    "hideMode": "String",
    "hideShadowOnDeactivate": "Boolean",
    "html": "String/Object",
    "icon": "String",
    "iconAlign": "'top'/'right'/'bottom'/'left'",
    "iconCls": "String",
    "id": "String",
    "inactiveChildTabIndex": "Number",
    "itemId": "String",
    "items": "Object/Object[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "layout": "Ext.enums.Layout/Object",
    "lbar": "Object/Object[]",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "maintainTitlePosition": "Boolean",
    "manageHeight": "Boolean",
    "margin": "Number/String",
    "maskClickAction": "String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maximizable": "Boolean",
    "maximized": "Boolean",
    "maxWidth": "Number",
    "minButtonWidth": "Number",
    "minHeight": "Number",
    "minimizable": "Boolean",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "monitorResize": "Boolean",
    "nameable": "Boolean",
    "nameHolder": "Boolean",
    "onEsc": "Function",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "overlapHeader": "Boolean",
    "padding": "Number/String",
    "placeholder": "Ext.Component/Object",
    "placeholderCollapseHideMode": "Number",
    "plain": "Boolean",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "preventHeader": "Boolean",
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
    "resetFocusPosition": "Boolean",
    "resizable": "Boolean/Object",
    "resizeHandles": "String",
    "saveButton": "Object",
    "saveDelay": "Number",
    "scrollable": "Boolean/String/Object",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "shrinkWrapDock": "Boolean/Number",
    "simpleDrag": "any",
    "startDateField": "Object",
    "startTimeField": "Object",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "style": "String/Object",
    "suspendLayout": "Boolean",
    "tabGuard": "Boolean",
    "tabIndex": "Number",
    "tbar": "Object/Object[]",
    "title": "String",
    "titleAlign": "'left'/'center'/'right'",
    "titleCollapse": "Boolean",
    "titleField": "Object",
    "titlePosition": "Number",
    "titleRotation": "'default'/0/1/2",
    "toContainer": "Object",
    "toFrontOnShow": "Boolean",
    "tools": "Object[]/Ext.panel.Tool[]",
    "touchAction": "Object",
    "tpl": "Ext.XTemplate/Ext.Template/String/String[]",
    "tplWriteMode": "String",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String",
    "uiCls": "String[]",
    "userCls": "String/String[]",
    "view": "Ext.calendar.view.Base",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "weight": "Number",
    "width": "Number|String",
    "x": "Number",
    "xtype": "Ext.enums.Widget",
    "y": "Number",
    "platformConfig": "Object",
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
    'allDayField',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'anchor',
    'anchorSize',
    'animateShadow',
    'animateTarget',
    'animCollapse',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoEl',
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
    'buttonAlign',
    'buttons',
    'calendarField',
    'cancelButton',
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
    'columnWidth',
    'componentCls',
    'componentLayout',
    'constrain',
    'constrainHeader',
    'constraintInsets',
    'constrainTo',
    'contentEl',
    'controller',
    'data',
    'defaultAlign',
    'defaultButton',
    'defaultButtonTarget',
    'defaultDockWeights',
    'defaultEndTime',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultStartTime',
    'defaultType',
    'descriptionField',
    'detachOnRemove',
    'disabled',
    'disabledCls',
    'dock',
    'dockedItems',
    'draggable',
    'dropButton',
    'endDateField',
    'endTimeField',
    'event',
    'expandOnShow',
    'expandToolText',
    'fbar',
    'fixed',
    'flex',
    'floatable',
    'floating',
    'focusableContainer',
    'focusCls',
    'focusOnToFront',
    'formBind',
    'frame',
    'frameHeader',
    'fromContainer',
    'ghost',
    'glyph',
    'header',
    'headerOverCls',
    'headerPosition',
    'height',
    'hidden',
    'hideCollapseTool',
    'hideMode',
    'hideShadowOnDeactivate',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'inactiveChildTabIndex',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'lbar',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'maintainTitlePosition',
    'manageHeight',
    'margin',
    'maskClickAction',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maximizable',
    'maximized',
    'maxWidth',
    'minButtonWidth',
    'minHeight',
    'minimizable',
    'minWidth',
    'modal',
    'modelValidation',
    'monitorResize',
    'nameable',
    'nameHolder',
    'onEsc',
    'overCls',
    'overflowX',
    'overflowY',
    'overlapHeader',
    'padding',
    'placeholder',
    'placeholderCollapseHideMode',
    'plain',
    'plugins',
    'preventHeader',
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
    'resetFocusPosition',
    'resizable',
    'resizeHandles',
    'saveButton',
    'saveDelay',
    'scrollable',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'shrinkWrapDock',
    'simpleDrag',
    'startDateField',
    'startTimeField',
    'stateEvents',
    'stateful',
    'stateId',
    'style',
    'suspendLayout',
    'tabGuard',
    'tabIndex',
    'tbar',
    'title',
    'titleAlign',
    'titleCollapse',
    'titleField',
    'titlePosition',
    'titleRotation',
    'toContainer',
    'toFrontOnShow',
    'tools',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'twoWayBindable',
    'ui',
    'uiCls',
    'userCls',
    'view',
    'viewModel',
    'weight',
    'width',
    'x',
    'xtype',
    'y',
    'platformConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'activate',parameters:'calendar-form-add'},
		{name:'add',parameters:'calendar-form-add,component,index'},
		{name:'added',parameters:'calendar-form-add,container,pos'},
		{name:'afterlayout',parameters:'calendar-form-add,layout'},
		{name:'afterlayoutanimation',parameters:'calendar-form-add'},
		{name:'afterrender',parameters:'calendar-form-add'},
		{name:'beforeactivate',parameters:'calendar-form-add'},
		{name:'beforeadd',parameters:'calendar-form-add,component,index'},
		{name:'beforeclose',parameters:'panel'},
		{name:'beforecollapse',parameters:'p,direction,animate'},
		{name:'beforedeactivate',parameters:'calendar-form-add'},
		{name:'beforedestroy',parameters:'calendar-form-add'},
		{name:'beforeexpand',parameters:'p,animate'},
		{name:'beforehide',parameters:'calendar-form-add'},
		{name:'beforeremove',parameters:'calendar-form-add,component'},
		{name:'beforerender',parameters:'calendar-form-add'},
		{name:'beforeshow',parameters:'calendar-form-add'},
		{name:'beforestaterestore',parameters:'calendar-form-add,state'},
		{name:'beforestatesave',parameters:'calendar-form-add,state'},
		{name:'blur',parameters:'calendar-form-add,event'},
		{name:'boxready',parameters:'calendar-form-add,width,height'},
		{name:'cancel',parameters:'calendar-form-add'},
		{name:'childmove',parameters:'calendar-form-add,component,prevIndex,newIndex'},
		{name:'close',parameters:'panel'},
		{name:'collapse',parameters:'p'},
		{name:'deactivate',parameters:'calendar-form-add'},
		{name:'destroy',parameters:'calendar-form-add'},
		{name:'disable',parameters:'calendar-form-add'},
		{name:'dockedadd',parameters:'calendar-form-add,component,index'},
		{name:'dockedremove',parameters:'calendar-form-add,component'},
		{name:'drop',parameters:'calendar-form-add'},
		{name:'enable',parameters:'calendar-form-add'},
		{name:'expand',parameters:'p'},
		{name:'float',parameters:''},
		{name:'focus',parameters:'calendar-form-add,event'},
		{name:'focusenter',parameters:'calendar-form-add,event'},
		{name:'focusleave',parameters:'calendar-form-add,event'},
		{name:'glyphchange',parameters:'calendar-form-add,newGlyph,oldGlyph'},
		{name:'hide',parameters:'calendar-form-add'},
		{name:'iconalignchange',parameters:'calendar-form-add,newIconAlign,oldIconAlign'},
		{name:'iconchange',parameters:'calendar-form-add,newIcon,oldIcon'},
		{name:'iconclschange',parameters:'calendar-form-add,newIconCls,oldIconCls'},
		{name:'maskclick',parameters:'calendar-form-add'},
		{name:'maximize',parameters:'calendar-form-add'},
		{name:'minimize',parameters:'calendar-form-add'},
		{name:'move',parameters:'calendar-form-add,x,y'},
		{name:'remove',parameters:'calendar-form-add,component'},
		{name:'removed',parameters:'calendar-form-add,ownerCt'},
		{name:'render',parameters:'calendar-form-add'},
		{name:'resize',parameters:'calendar-form-add,width,height'},
		{name:'restore',parameters:'calendar-form-add'},
		{name:'save',parameters:'calendar-form-add,context'},
		{name:'show',parameters:'calendar-form-add'},
		{name:'staterestore',parameters:'calendar-form-add,state'},
		{name:'statesave',parameters:'calendar-form-add,state'},
		{name:'titlealignchange',parameters:'calendar-form-add,newTitleAlign,oldTitleAlign'},
		{name:'titlechange',parameters:'calendar-form-add,newTitle,oldTitle'},
		{name:'titlepositionchange',parameters:'calendar-form-add,newTitlePosition,oldTitlePosition'},
		{name:'titlerotationchange',parameters:'calendar-form-add,newTitleRotation,oldTitleRotation'},
		{name:'unfloat',parameters:''},
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
		'beforeclose',
		'beforecollapse',
		'beforedeactivate',
		'beforedestroy',
		'beforeexpand',
		'beforehide',
		'beforeremove',
		'beforerender',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
		'cancel',
		'childmove',
		'close',
		'collapse',
		'deactivate',
		'destroy',
		'disable',
		'dockedadd',
		'dockedremove',
		'drop',
		'enable',
		'expand',
		'float',
		'focus',
		'focusenter',
		'focusleave',
		'glyphchange',
		'hide',
		'iconalignchange',
		'iconchange',
		'iconclschange',
		'maskclick',
		'maximize',
		'minimize',
		'move',
		'remove',
		'removed',
		'render',
		'resize',
		'restore',
		'save',
		'show',
		'staterestore',
		'statesave',
		'titlealignchange',
		'titlechange',
		'titlepositionchange',
		'titlerotationchange',
		'unfloat',
		'ready'
];
}
@Component({
  selector: 'calendar-form-add', 
  inputs: calendar_form_addMetaData.PROPERTIES,
  outputs: calendar_form_addMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtCalendar_form_addComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtCalendar_form_addComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,calendar_form_addMetaData)}
  public ngOnInit() {this.baseOnInit(calendar_form_addMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}