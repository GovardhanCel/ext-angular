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
export class sparklinelineMetaData {
  public static XTYPE: string = 'sparklineline';
  public static PROPERTIESOBJECT: any = {
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "bind": "Object/String",
    "border": "Boolean",
    "chartRangeMax": "Number",
    "chartRangeMaxX": "Number",
    "chartRangeMin": "Number",
    "chartRangeMinX": "Number",
    "cls": "String/String[]",
    "controller": "String/Object/Ext.app.ViewController",
    "defaultListenerScope": "Boolean",
    "disabled": "Boolean",
    "disableTooltips": "Boolean",
    "drawNormalOnTop": "Boolean",
    "eventHandlers": "Object",
    "fillColor": "String",
    "focusCls": "String",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "highlightColor": "String",
    "highlightLighten": "Number",
    "highlightLineColor": "String",
    "highlightSpotColor": "String",
    "instanceCls": "String/String[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "lineColor": "String",
    "lineWidth": "Number",
    "listeners": "Object",
    "maxSpotColor": "String",
    "minSpotColor": "String",
    "name": "String",
    "nameable": "Boolean",
    "normalRangeColor": "String",
    "normalRangeMax": "Number",
    "normalRangeMin": "Number",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "renderTo": "Ext.Element",
    "ripple": "Boolean/Object/String",
    "session": "Boolean/Object/Ext.data.Session",
    "shareableName": "Boolean",
    "spotColor": "String",
    "spotRadius": "Number",
    "style": "String/Object",
    "tipTpl": "String/Ext.XTemplate",
    "tooltipPrefix": "String",
    "tooltipSkipNull": "Boolean",
    "tooltipSuffix": "String",
    "touchAction": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "values": "Number[]",
    "valueSpots": "Object",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "width": "Number/String",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'chartRangeMax',
    'chartRangeMaxX',
    'chartRangeMin',
    'chartRangeMinX',
    'cls',
    'controller',
    'defaultListenerScope',
    'disabled',
    'disableTooltips',
    'drawNormalOnTop',
    'eventHandlers',
    'fillColor',
    'focusCls',
    'height',
    'hidden',
    'hideMode',
    'highlightColor',
    'highlightLighten',
    'highlightLineColor',
    'highlightSpotColor',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'lineColor',
    'lineWidth',
    'listeners',
    'maxSpotColor',
    'minSpotColor',
    'name',
    'nameable',
    'normalRangeColor',
    'normalRangeMax',
    'normalRangeMin',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'spotColor',
    'spotRadius',
    'style',
    'tipTpl',
    'tooltipPrefix',
    'tooltipSkipNull',
    'tooltipSuffix',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'values',
    'valueSpots',
    'viewModel',
    'width',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'sparklineline,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'sparklineline,event'},
		{name:'focusenter',parameters:'sparklineline,event'},
		{name:'focusleave',parameters:'sparklineline,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'beforedisabledchange',
		'beforeheightchange',
		'beforehiddenchange',
		'beforewidthchange',
		'blur',
		'disabledchange',
		'focus',
		'focusenter',
		'focusleave',
		'heightchange',
		'hiddenchange',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'sparklineline', 
  inputs: sparklinelineMetaData.PROPERTIES,
  outputs: sparklinelineMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtSparklinelineComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtSparklinelineComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,sparklinelineMetaData)}
  public ngOnInit() {this.baseOnInit(sparklinelineMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}