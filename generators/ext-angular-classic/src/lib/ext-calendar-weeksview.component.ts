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
export class calendar_weeksviewMetaData {
  public static XTYPE: string = 'calendar-weeksview';
  public static PROPERTIESOBJECT: any = {
    "addForm": "Object",
    "addOnSelect": "Boolean",
    "allowSelection": "Boolean",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "bind": "Object/String",
    "border": "Boolean",
    "cls": "String/String[]",
    "compact": "Boolean",
    "compactOptions": "Object",
    "controller": "String/Object/Ext.app.ViewController",
    "controlStoreRange": "Boolean",
    "dayFormat": "String",
    "defaultListenerScope": "Boolean",
    "disabled": "Boolean",
    "draggable": "Boolean",
    "droppable": "Boolean",
    "editForm": "Object",
    "eventDefaults": "Object",
    "eventHandlers": "Object",
    "firstDayOfWeek": "Number",
    "focusCls": "String",
    "gestureNavigation": "Boolean",
    "header": "Ext.calendar.header.Base",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "instanceCls": "String/String[]",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "listeners": "Object",
    "name": "String",
    "nameable": "Boolean",
    "overflowText": "String",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "renderTo": "Ext.Element",
    "ripple": "Boolean/Object/String",
    "session": "Boolean/Object/Ext.data.Session",
    "shareableName": "Boolean",
    "showOverflow": "String",
    "store": "Object/Ext.calendar.store.Calendars",
    "style": "String/Object",
    "timezoneOffset": "Number",
    "touchAction": "Object",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "value": "Date",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "visibleDays": "Number",
    "visibleWeeks": "Number",
    "weekendDays": "Number[]",
    "width": "Number/String",
    "platformConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",
};
  public static PROPERTIES: string[] = [
    'addForm',
    'addOnSelect',
    'allowSelection',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'border',
    'cls',
    'compact',
    'compactOptions',
    'controller',
    'controlStoreRange',
    'dayFormat',
    'defaultListenerScope',
    'disabled',
    'draggable',
    'droppable',
    'editForm',
    'eventDefaults',
    'eventHandlers',
    'firstDayOfWeek',
    'focusCls',
    'gestureNavigation',
    'header',
    'height',
    'hidden',
    'hideMode',
    'instanceCls',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'name',
    'nameable',
    'overflowText',
    'plugins',
    'publishes',
    'reference',
    'renderTo',
    'ripple',
    'session',
    'shareableName',
    'showOverflow',
    'store',
    'style',
    'timezoneOffset',
    'touchAction',
    'twoWayBindable',
    'ui',
    'userCls',
    'value',
    'viewModel',
    'visibleDays',
    'visibleWeeks',
    'weekendDays',
    'width',
    'platformConfig',
    'fitToParent',
    'config'
];
  public static EVENTS: any[] = [
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeeventadd',parameters:'calendar-weeksview,context'},
		{name:'beforeeventdragstart',parameters:'calendar-weeksview,context'},
		{name:'beforeeventedit',parameters:'calendar-weeksview,context'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'calendar-weeksview,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'eventadd',parameters:'calendar-weeksview,context'},
		{name:'eventdrop',parameters:'calendar-weeksview,context'},
		{name:'eventedit',parameters:'calendar-weeksview,context'},
		{name:'eventtap',parameters:'calendar-weeksview,context'},
		{name:'focus',parameters:'calendar-weeksview,event'},
		{name:'focusenter',parameters:'calendar-weeksview,event'},
		{name:'focusleave',parameters:'calendar-weeksview,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'select',parameters:'calendar-weeksview,context'},
		{name:'selectrange',parameters:'calendar-weeksview,context'},
		{name:'validateeventadd',parameters:'calendar-weeksview,context'},
		{name:'validateeventdrop',parameters:'calendar-weeksview,context'},
		{name:'validateeventedit',parameters:'calendar-weeksview,context'},
		{name:'valuechange',parameters:'calendar-weeksview,context'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}
];
  public static EVENTNAMES: string[] = [
		'beforedisabledchange',
		'beforeeventadd',
		'beforeeventdragstart',
		'beforeeventedit',
		'beforeheightchange',
		'beforehiddenchange',
		'beforewidthchange',
		'blur',
		'disabledchange',
		'eventadd',
		'eventdrop',
		'eventedit',
		'eventtap',
		'focus',
		'focusenter',
		'focusleave',
		'heightchange',
		'hiddenchange',
		'select',
		'selectrange',
		'validateeventadd',
		'validateeventdrop',
		'validateeventedit',
		'valuechange',
		'widthchange',
		'ready'
];
}
@Component({
  selector: 'calendar-weeksview', 
  inputs: calendar_weeksviewMetaData.PROPERTIES,
  outputs: calendar_weeksviewMetaData.EVENTNAMES,
  providers: [{provide: base, useExisting: forwardRef(() => ExtCalendar_weeksviewComponent)}],
  template: '<ng-template #dynamic></ng-template>'
})
export class ExtCalendar_weeksviewComponent extends base implements OnInit,AfterContentInit,OnChanges {
  constructor(eRef:ElementRef) {super(eRef,calendar_weeksviewMetaData)}
  public ngOnInit() {this.baseOnInit(calendar_weeksviewMetaData)}
  //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
  public ngAfterContentInit() {
    this.baseAfterContentInit()
    this['ready'].emit(this)
    }
}