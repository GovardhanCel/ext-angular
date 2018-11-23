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
export class boundlistMetaData {
  public static XTYPE: string = 'boundlist';
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
    "blockRefresh": "Boolean",
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
    "deferEmptyText": "Boolean",
    "deferInitialRefresh": "Boolean",
    "disabled": "Boolean",
    "disabledCls": "String",
    "disableSelection": "Boolean",
    "displayField": "String",
    "dock": "'top'/'bottom'/'left'/'right'",
    "draggable": "Boolean/Object",
    "emptyText": "String",
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
    "itemCls": "String",
    "itemId": "String",
    "itemSelector": "String",
    "itemTpl": "String/String[]/Ext.XTemplate",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "liquidLayout": "Boolean",
    "listeners": "Object",
    "liveDrag": "Boolean",
    "loader": "Ext.ComponentLoader/Object",
    "loadingCls": "String",
    "loadingHeight": "Number",
    "loadingText": "String",
    "loadingUseMsg": "Boolean",
    "loadMask": "Boolean/Object",
    "margin": "Number/String",
    "maskDefaults": "Object",
    "maskElement": "String",
    "maxHeight": "Number",
    "maxWidth": "Number",
    "minHeight": "Number",
    "minWidth": "Number",
    "modal": "Boolean",
    "modelValidation": "Boolean",
    "multiSelect": "Boolean",
    "nameable": "Boolean",
    "navigationModel": "any",
    "overCls": "String",
    "overflowX": "String",
    "overflowY": "String",
    "overItemCls": "String",
    "padding": "Number/String",
    "pageSize": "Number",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "preserveScrollOnRefresh": "Boolean",
    "preserveScrollOnReload": "Boolean",
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
    "selectedItemCls": "String",
    "selection": "Ext.data.Model",
    "selectionModel": "Object/Ext.selection.DataViewModel",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "String/Boolean",
    "shadowOffset": "Number",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "shrinkWrap": "Boolean/Number",
    "simpleSelect": "Boolean",
    "singleSelect": "Boolean",
    "stateEvents": "String[]",
    "stateful": "Boolean/Object",
    "stateId": "String",
    "store": "Ext.data.Store",
    "style": "String/Object",
    "tabIndex": "Number",
    "throttledUpdate": "Boolean",
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "tpl": "String/Ext.XTemplate",
    "tplWriteMode": "String",
    "trackOver": "Boolean",
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
    'blockRefresh',
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
    'deferEmptyText',
    'deferInitialRefresh',
    'disabled',
    'disabledCls',
    'disableSelection',
    'displayField',
    'dock',
    'draggable',
    'emptyText',
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
    'itemCls',
    'itemId',
    'itemSelector',
    'itemTpl',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'liquidLayout',
    'listeners',
    'liveDrag',
    'loader',
    'loadingCls',
    'loadingHeight',
    'loadingText',
    'loadingUseMsg',
    'loadMask',
    'margin',
    'maskDefaults',
    'maskElement',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'multiSelect',
    'nameable',
    'navigationModel',
    'overCls',
    'overflowX',
    'overflowY',
    'overItemCls',
    'padding',
    'pageSize',
    'plugins',
    'preserveScrollOnRefresh',
    'preserveScrollOnReload',
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
    'selectedItemCls',
    'selection',
    'selectionModel',
    'session',
    'shadow',
    'shadowOffset',
    'shareableName',
    'shim',
    'shrinkWrap',
    'simpleSelect',
    'singleSelect',
    'stateEvents',
    'stateful',
    'stateId',
    'store',
    'style',
    'tabIndex',
    'throttledUpdate',
    'toFrontOnShow',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'trackOver',
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
		{name:'activate',parameters:'boundlist'},
		{name:'added',parameters:'boundlist,container,pos'},
		{name:'afterlayoutanimation',parameters:'boundlist'},
		{name:'afterrender',parameters:'boundlist'},
		{name:'beforeactivate',parameters:'boundlist'},
		{name:'beforecontainerclick',parameters:'boundlist,e'},
		{name:'beforecontainercontextmenu',parameters:'boundlist,e'},
		{name:'beforecontainerdblclick',parameters:'boundlist,e'},
		{name:'beforecontainerkeydown',parameters:'boundlist,e'},
		{name:'beforecontainerkeypress',parameters:'boundlist,e'},
		{name:'beforecontainerkeyup',parameters:'boundlist,e'},
		{name:'beforecontainermousedown',parameters:'boundlist,e'},
		{name:'beforecontainermouseout',parameters:'boundlist,e'},
		{name:'beforecontainermouseover',parameters:'boundlist,e'},
		{name:'beforecontainermouseup',parameters:'boundlist,e'},
		{name:'beforedeactivate',parameters:'boundlist'},
		{name:'beforedeselect',parameters:'boundlist,record,index'},
		{name:'beforedestroy',parameters:'boundlist'},
		{name:'beforehide',parameters:'boundlist'},
		{name:'beforeitemclick',parameters:'boundlist,record,item,index,e'},
		{name:'beforeitemcontextmenu',parameters:'boundlist,record,item,index,e'},
		{name:'beforeitemdblclick',parameters:'boundlist,record,item,index,e'},
		{name:'beforeitemkeydown',parameters:'boundlist,record,item,index,e'},
		{name:'beforeitemkeypress',parameters:'boundlist,record,item,index,e'},
		{name:'beforeitemkeyup',parameters:'boundlist,record,item,index,e'},
		{name:'beforeitemlongpress',parameters:'boundlist,record,item,index,e'},
		{name:'beforeitemmousedown',parameters:'boundlist,record,item,index,e'},
		{name:'beforeitemmouseenter',parameters:'boundlist,record,item,index,e'},
		{name:'beforeitemmouseleave',parameters:'boundlist,record,item,index,e'},
		{name:'beforeitemmouseup',parameters:'boundlist,record,item,index,e'},
		{name:'beforerefresh',parameters:'boundlist'},
		{name:'beforerender',parameters:'boundlist'},
		{name:'beforeselect',parameters:'boundlist,record,index'},
		{name:'beforeshow',parameters:'boundlist'},
		{name:'beforestaterestore',parameters:'boundlist,state'},
		{name:'beforestatesave',parameters:'boundlist,state'},
		{name:'blur',parameters:'boundlist,event'},
		{name:'boxready',parameters:'boundlist,width,height'},
		{name:'containerclick',parameters:'boundlist,e'},
		{name:'containercontextmenu',parameters:'boundlist,e'},
		{name:'containerdblclick',parameters:'boundlist,e'},
		{name:'containerkeydown',parameters:'boundlist,e'},
		{name:'containerkeypress',parameters:'boundlist,e'},
		{name:'containerkeyup',parameters:'boundlist,e'},
		{name:'containermousedown',parameters:'boundlist,e'},
		{name:'containermouseout',parameters:'boundlist,e'},
		{name:'containermouseover',parameters:'boundlist,e'},
		{name:'containermouseup',parameters:'boundlist,e'},
		{name:'deactivate',parameters:'boundlist'},
		{name:'deselect',parameters:'boundlist,record'},
		{name:'destroy',parameters:'boundlist'},
		{name:'disable',parameters:'boundlist'},
		{name:'enable',parameters:'boundlist'},
		{name:'focus',parameters:'boundlist,event'},
		{name:'focuschange',parameters:'boundlist,oldFocused,newFocused'},
		{name:'focusenter',parameters:'boundlist,event'},
		{name:'focusleave',parameters:'boundlist,event'},
		{name:'hide',parameters:'boundlist'},
		{name:'highlightitem',parameters:'view,node'},
		{name:'itemadd',parameters:'records,index,node,view'},
		{name:'itemclick',parameters:'boundlist,record,item,index,e'},
		{name:'itemcontextmenu',parameters:'boundlist,record,item,index,e'},
		{name:'itemdblclick',parameters:'boundlist,record,item,index,e'},
		{name:'itemkeydown',parameters:'boundlist,record,item,index,e'},
		{name:'itemkeypress',parameters:'boundlist,record,item,index,e'},
		{name:'itemkeyup',parameters:'boundlist,record,item,index,e'},
		{name:'itemlongpress',parameters:'boundlist,record,item,index,e'},
		{name:'itemmousedown',parameters:'boundlist,record,item,index,e'},
		{name:'itemmouseenter',parameters:'boundlist,record,item,index,e'},
		{name:'itemmouseleave',parameters:'boundlist,record,item,index,e'},
		{name:'itemmouseup',parameters:'boundlist,record,item,index,e'},
		{name:'itemremove',parameters:'records,index,item,view'},
		{name:'itemupdate',parameters:'record,index,node,view'},
		{name:'move',parameters:'boundlist,x,y'},
		{name:'refresh',parameters:'boundlist'},
		{name:'removed',parameters:'boundlist,ownerCt'},
		{name:'render',parameters:'boundlist'},
		{name:'resize',parameters:'boundlist,width,height,oldWidth,oldHeight'},
		{name:'select',parameters:'boundlist,record,index'},
		{name:'selectionchange',parameters:'boundlist,selected'},
		{name:'show',parameters:'boundlist'},
		{name:'staterestore',parameters:'boundlist,state'},
		{name:'statesave',parameters:'boundlist,state'},
		{name:'unhighlightitem',parameters:'view,node'},
		{name:'viewready',parameters:'boundlist'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'activate',
		'added',
		'afterlayoutanimation',
		'afterrender',
		'beforeactivate',
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
		'beforerefresh',
		'beforerender',
		'beforeselect',
		'beforeshow',
		'beforestaterestore',
		'beforestatesave',
		'blur',
		'boxready',
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
		'enable',
		'focus',
		'focuschange',
		'focusenter',
		'focusleave',
		'hide',
		'highlightitem',
		'itemadd',
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
		'itemremove',
		'itemupdate',
		'move',
		'refresh',
		'removed',
		'render',
		'resize',
		'select',
		'selectionchange',
		'show',
		'staterestore',
		'statesave',
		'unhighlightitem',
		'viewready',
		'ready'
];
}
@Component({
  selector: 'boundlist', 
  inputs: boundlistMetaData.PROPERTIES,
  outputs: boundlistMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtBoundlistComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtBoundlistComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,boundlistMetaData)}
  public ngOnInit() {this.baseOnInit(boundlistMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}