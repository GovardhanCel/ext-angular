import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var datepickerfieldMetaData = /** @class */ (function () {
    function datepickerfieldMetaData() {
    }
    datepickerfieldMetaData.XTYPE = 'datepickerfield';
    datepickerfieldMetaData.PROPERTIES = [
        'alignSelf',
        'alignTarget',
        'altFormats',
        'alwaysOnTop',
        'animateUnderline',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'autoCapitalize',
        'autoComplete',
        'autoCorrect',
        'autoFitErrors',
        'autoHideInputMask',
        'axisLock',
        'badFormatMessage',
        'bind',
        'bodyAlign',
        'border',
        'bottom',
        'bubbleDirty',
        'centered',
        'clearable',
        'cls',
        'constrainAlign',
        'contentEl',
        'controller',
        'data',
        'dataType',
        'dateFormat',
        'defaultListenerScope',
        'destroyPickerOnHide',
        'dirty',
        'disabled',
        'displayed',
        'docked',
        'draggable',
        'edgePicker',
        'editable',
        'error',
        'errorMessage',
        'errorTarget',
        'errorTip',
        'errorTpl',
        'flex',
        'floated',
        'floatedPicker',
        'floatedPickerAlign',
        'focusCls',
        'focusTrap',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideMode',
        'hideOnMaskTap',
        'hideTrigger',
        'html',
        'id',
        'inline',
        'inputMask',
        'inputType',
        'inputValue',
        'instanceCls',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'label',
        'labelAlign',
        'labelCls',
        'labelInPlaceholder',
        'labelMinWidth',
        'labelTextAlign',
        'labelWidth',
        'labelWrap',
        'left',
        'listeners',
        'margin',
        'matchFieldWidth',
        'maxDate',
        'maxHeight',
        'maxLength',
        'maxWidth',
        'minDate',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'name',
        'nameable',
        'padding',
        'parseValidator',
        'pattern',
        'picker',
        'pickerSlotAlign',
        'placeholder',
        'plugins',
        'publishes',
        'readOnly',
        'record',
        'reference',
        'relative',
        'renderTo',
        'required',
        'requiredMessage',
        'right',
        'ripple',
        'scrollable',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'showAnimation',
        'sideError',
        'stateful',
        'statefulDefaults',
        'stateId',
        'stripCharsRe',
        'style',
        'tabIndex',
        'textAlign',
        'tipError',
        'titleError',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'triggers',
        'twoWayBindable',
        'ui',
        'underError',
        'userCls',
        'userSelectable',
        'validateDisabled',
        'validationMessage',
        'validators',
        'value',
        'viewModel',
        'weight',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'align',
        'fitToParent',
        'config'
    ];
    datepickerfieldMetaData.EVENTS = [
        { name: 'action', parameters: 'datefield,e' },
        { name: 'added', parameters: 'sender,container,index' },
        { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehide', parameters: 'sender' },
        { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeshow', parameters: 'sender' },
        { name: 'beforetofront', parameters: 'datefield' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'datefield,e' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'change', parameters: 'datefield,newDate,oldDate' },
        { name: 'clearicontap', parameters: 'datefield,input,e' },
        { name: 'click', parameters: 'e' },
        { name: 'collapse', parameters: 'field' },
        { name: 'destroy', parameters: '' },
        { name: 'dirtychange', parameters: 'datefield,dirty' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'errorchange', parameters: 'datefield,error' },
        { name: 'expand', parameters: 'field' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'datefield,e' },
        { name: 'focusenter', parameters: 'datefield,event' },
        { name: 'focusleave', parameters: 'datefield,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'keydown', parameters: 'datefield,e' },
        { name: 'keyup', parameters: 'datefield,e' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'mousedown', parameters: 'datefield,e' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'paste', parameters: 'datefield,e' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'show', parameters: 'sender' },
        { name: 'tofront', parameters: 'datefield' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    datepickerfieldMetaData.EVENTNAMES = [
        'action',
        'added',
        'beforebottomchange',
        'beforecenteredchange',
        'beforedisabledchange',
        'beforedockedchange',
        'beforeheightchange',
        'beforehiddenchange',
        'beforehide',
        'beforeleftchange',
        'beforemaxHeightchange',
        'beforemaxWidthchange',
        'beforeminHeightchange',
        'beforeminWidthchange',
        'beforeorientationchange',
        'beforerightchange',
        'beforescrollablechange',
        'beforeshow',
        'beforetofront',
        'beforetopchange',
        'beforewidthchange',
        'blur',
        'bottomchange',
        'centeredchange',
        'change',
        'clearicontap',
        'click',
        'collapse',
        'destroy',
        'dirtychange',
        'disabledchange',
        'dockedchange',
        'erased',
        'errorchange',
        'expand',
        'floatingchange',
        'focus',
        'focusenter',
        'focusleave',
        'fullscreen',
        'heightchange',
        'hiddenchange',
        'hide',
        'initialize',
        'keydown',
        'keyup',
        'leftchange',
        'maxHeightchange',
        'maxWidthchange',
        'minHeightchange',
        'minWidthchange',
        'mousedown',
        'moved',
        'orientationchange',
        'painted',
        'paste',
        'positionedchange',
        'removed',
        'resize',
        'rightchange',
        'scrollablechange',
        'show',
        'tofront',
        'topchange',
        'updatedata',
        'widthchange',
        'ready'
    ];
    return datepickerfieldMetaData;
}());
export { datepickerfieldMetaData };
var ExtDatepickerfieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDatepickerfieldComponent, _super);
    function ExtDatepickerfieldComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, datepickerfieldMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtDatepickerfieldComponent_1 = ExtDatepickerfieldComponent;
    ExtDatepickerfieldComponent.prototype.ngOnInit = function () {
        this.baseOnInit(datepickerfieldMetaData);
    };
    ExtDatepickerfieldComponent.prototype.ngAfterContentInit = function () {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    };
    var ExtDatepickerfieldComponent_1;
    ExtDatepickerfieldComponent = ExtDatepickerfieldComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'datepickerfield',
            inputs: datepickerfieldMetaData.PROPERTIES,
            outputs: datepickerfieldMetaData.EVENTNAMES,
            providers: [{ provide: base, useExisting: forwardRef(function () { return ExtDatepickerfieldComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, base])
    ], ExtDatepickerfieldComponent);
    return ExtDatepickerfieldComponent;
}(base));
export { ExtDatepickerfieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRhdGVwaWNrZXJmaWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1kYXRlcGlja2VyZmllbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLFFBQVEsQ0FBQztBQUM5QjtJQUFBO0lBdVNBLENBQUM7SUF0U2UsNkJBQUssR0FBVyxpQkFBaUIsQ0FBQztJQUNsQyxrQ0FBVSxHQUFhO1FBQ25DLFdBQVc7UUFDWCxhQUFhO1FBQ2IsWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsYUFBYTtRQUNiLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sV0FBVztRQUNYLFFBQVE7UUFDUixRQUFRO1FBQ1IsYUFBYTtRQUNiLFVBQVU7UUFDVixXQUFXO1FBQ1gsS0FBSztRQUNMLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsWUFBWTtRQUNaLE1BQU07UUFDTixVQUFVO1FBQ1YsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixxQkFBcUI7UUFDckIsT0FBTztRQUNQLFVBQVU7UUFDVixXQUFXO1FBQ1gsUUFBUTtRQUNSLFdBQVc7UUFDWCxZQUFZO1FBQ1osVUFBVTtRQUNWLE9BQU87UUFDUCxjQUFjO1FBQ2QsYUFBYTtRQUNiLFVBQVU7UUFDVixVQUFVO1FBQ1YsTUFBTTtRQUNOLFNBQVM7UUFDVCxlQUFlO1FBQ2Ysb0JBQW9CO1FBQ3BCLFVBQVU7UUFDVixXQUFXO1FBQ1gsWUFBWTtRQUNaLFFBQVE7UUFDUixRQUFRO1FBQ1IsZUFBZTtRQUNmLFVBQVU7UUFDVixlQUFlO1FBQ2YsYUFBYTtRQUNiLE1BQU07UUFDTixJQUFJO1FBQ0osUUFBUTtRQUNSLFdBQVc7UUFDWCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGFBQWE7UUFDYixRQUFRO1FBQ1IsUUFBUTtRQUNSLGVBQWU7UUFDZixjQUFjO1FBQ2QsT0FBTztRQUNQLFlBQVk7UUFDWixVQUFVO1FBQ1Ysb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFdBQVc7UUFDWCxNQUFNO1FBQ04sV0FBVztRQUNYLFFBQVE7UUFDUixpQkFBaUI7UUFDakIsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsVUFBVTtRQUNWLFNBQVM7UUFDVCxXQUFXO1FBQ1gsVUFBVTtRQUNWLE9BQU87UUFDUCxpQkFBaUI7UUFDakIsTUFBTTtRQUNOLFVBQVU7UUFDVixTQUFTO1FBQ1QsZ0JBQWdCO1FBQ2hCLFNBQVM7UUFDVCxRQUFRO1FBQ1IsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixTQUFTO1FBQ1QsV0FBVztRQUNYLFVBQVU7UUFDVixRQUFRO1FBQ1IsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLGlCQUFpQjtRQUNqQixPQUFPO1FBQ1AsUUFBUTtRQUNSLFlBQVk7UUFDWixTQUFTO1FBQ1QsUUFBUTtRQUNSLGVBQWU7UUFDZixNQUFNO1FBQ04sZUFBZTtRQUNmLFdBQVc7UUFDWCxVQUFVO1FBQ1Ysa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxjQUFjO1FBQ2QsT0FBTztRQUNQLFVBQVU7UUFDVixXQUFXO1FBQ1gsVUFBVTtRQUNWLFlBQVk7UUFDWixlQUFlO1FBQ2YsU0FBUztRQUNULEtBQUs7UUFDTCxhQUFhO1FBQ2IsS0FBSztRQUNMLGNBQWM7UUFDZCxjQUFjO1FBQ2QsVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixJQUFJO1FBQ0osWUFBWTtRQUNaLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osT0FBTztRQUNQLFdBQVc7UUFDWCxRQUFRO1FBQ1IsT0FBTztRQUNQLEdBQUc7UUFDSCxPQUFPO1FBQ1AsR0FBRztRQUNILFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxhQUFhO1FBQ2IsUUFBUTtLQUNYLENBQUM7SUFDYyw4QkFBTSxHQUFVO1FBQ2hDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDO1FBQ3hDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsd0JBQXdCLEVBQUM7UUFDbEQsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3hFLEVBQUMsSUFBSSxFQUFDLHNCQUFzQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUMxRSxFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDMUUsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3hFLEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN4RSxFQUFDLElBQUksRUFBQyxvQkFBb0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDeEUsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUM7UUFDdkMsRUFBQyxJQUFJLEVBQUMsa0JBQWtCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3RFLEVBQUMsSUFBSSxFQUFDLHVCQUF1QixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUMzRSxFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDMUUsRUFBQyxJQUFJLEVBQUMsdUJBQXVCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQzNFLEVBQUMsSUFBSSxFQUFDLHNCQUFzQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUMxRSxFQUFDLElBQUksRUFBQyx5QkFBeUIsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO1FBQzlDLEVBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN2RSxFQUFDLElBQUksRUFBQyx3QkFBd0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDNUUsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUM7UUFDdkMsRUFBQyxJQUFJLEVBQUMsZUFBZSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUM7UUFDN0MsRUFBQyxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3JFLEVBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN2RSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQztRQUN0QyxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3hELEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUMxRCxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLDJCQUEyQixFQUFDO1FBQ3RELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsbUJBQW1CLEVBQUM7UUFDcEQsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUM7UUFDN0IsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUM7UUFDcEMsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7UUFDOUIsRUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQztRQUNqRCxFQUFDLElBQUksRUFBQyxnQkFBZ0IsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDMUQsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUN4RCxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLFFBQVEsRUFBQztRQUNuQyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDO1FBQ2pELEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDO1FBQ2xDLEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQztRQUN0RCxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLGFBQWEsRUFBQztRQUN2QyxFQUFDLElBQUksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDO1FBQ2hELEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUM7UUFDaEQsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUM7UUFDdkMsRUFBQyxJQUFJLEVBQUMsY0FBYyxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUN4RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3hELEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO1FBQ2pDLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO1FBQ3ZDLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDO1FBQ3pDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDO1FBQ3ZDLEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDdEQsRUFBQyxJQUFJLEVBQUMsaUJBQWlCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQzNELEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUMxRCxFQUFDLElBQUksRUFBQyxpQkFBaUIsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDM0QsRUFBQyxJQUFJLEVBQUMsZ0JBQWdCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQzFELEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDO1FBQzNDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsb0NBQW9DLEVBQUM7UUFDOUQsRUFBQyxJQUFJLEVBQUMsbUJBQW1CLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztRQUN4QyxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLGdCQUFnQixFQUFDO1FBQzVDLEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDO1FBQ3ZDLEVBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLFVBQVUsRUFBQyxtQkFBbUIsRUFBQztRQUN4RCxFQUFDLElBQUksRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLHdCQUF3QixFQUFDO1FBQ3BELEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsY0FBYyxFQUFDO1FBQ3pDLEVBQUMsSUFBSSxFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDdkQsRUFBQyxJQUFJLEVBQUMsa0JBQWtCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQzVELEVBQUMsSUFBSSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDO1FBQ2pDLEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDO1FBQ3ZDLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDckQsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQztRQUMvQyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3ZELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzNCLENBQUM7SUFDYyxrQ0FBVSxHQUFhO1FBQ3ZDLFFBQVE7UUFDUixPQUFPO1FBQ1Asb0JBQW9CO1FBQ3BCLHNCQUFzQjtRQUN0QixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQix1QkFBdUI7UUFDdkIsc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQix3QkFBd0I7UUFDeEIsWUFBWTtRQUNaLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLE1BQU07UUFDTixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLFFBQVE7UUFDUixjQUFjO1FBQ2QsT0FBTztRQUNQLFVBQVU7UUFDVixTQUFTO1FBQ1QsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsUUFBUTtRQUNSLGFBQWE7UUFDYixRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLE9BQU87UUFDUCxZQUFZO1FBQ1osWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztRQUNkLE1BQU07UUFDTixZQUFZO1FBQ1osU0FBUztRQUNULE9BQU87UUFDUCxZQUFZO1FBQ1osaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLFdBQVc7UUFDWCxPQUFPO1FBQ1AsbUJBQW1CO1FBQ25CLFNBQVM7UUFDVCxPQUFPO1FBQ1Asa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxRQUFRO1FBQ1IsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sU0FBUztRQUNULFdBQVc7UUFDWCxZQUFZO1FBQ1osYUFBYTtRQUNiLE9BQU87S0FDTixDQUFDO0lBQ0YsOEJBQUM7Q0FBQSxBQXZTRCxJQXVTQztTQXZTWSx1QkFBdUI7QUErU3BDO0lBQWlELHVEQUFJO0lBQ25ELHFDQUNFLElBQWUsRUFBeUMsYUFBb0I7UUFEOUUsWUFFSSxrQkFBTSxJQUFJLENBQUMsYUFBYSxFQUFDLHVCQUF1QixFQUFDLGFBQWEsQ0FBQyxTQUNoRTtRQUZ1RCxtQkFBYSxHQUFiLGFBQWEsQ0FBTzs7SUFFNUUsQ0FBQztvQ0FKUSwyQkFBMkI7SUFLL0IsOENBQVEsR0FBZjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBQ00sd0RBQWtCLEdBQXpCO1FBQ0UsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUE7UUFDM0IsMEJBQTBCO0lBQzVCLENBQUM7O0lBWFUsMkJBQTJCO1FBUHZDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsTUFBTSxFQUFFLHVCQUF1QixDQUFDLFVBQVU7WUFDMUMsT0FBTyxFQUFFLHVCQUF1QixDQUFDLFVBQVU7WUFDM0MsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDZCQUEyQixFQUEzQixDQUEyQixDQUFDLEVBQUMsQ0FBQztZQUN4RixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFHb0IsbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUEzQyxVQUFVLEVBQXlELElBQUk7T0FGbkUsMkJBQTJCLENBY3ZDO0lBQUQsa0NBQUM7Q0FBQSxBQWRELENBQWlELElBQUksR0FjcEQ7U0FkWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGRhdGVwaWNrZXJmaWVsZE1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2RhdGVwaWNrZXJmaWVsZCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FsaWduU2VsZicsXG4gICAgJ2FsaWduVGFyZ2V0JyxcbiAgICAnYWx0Rm9ybWF0cycsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYW5pbWF0ZVVuZGVybGluZScsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdhdXRvQ2FwaXRhbGl6ZScsXG4gICAgJ2F1dG9Db21wbGV0ZScsXG4gICAgJ2F1dG9Db3JyZWN0JyxcbiAgICAnYXV0b0ZpdEVycm9ycycsXG4gICAgJ2F1dG9IaWRlSW5wdXRNYXNrJyxcbiAgICAnYXhpc0xvY2snLFxuICAgICdiYWRGb3JtYXRNZXNzYWdlJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvZHlBbGlnbicsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvdHRvbScsXG4gICAgJ2J1YmJsZURpcnR5JyxcbiAgICAnY2VudGVyZWQnLFxuICAgICdjbGVhcmFibGUnLFxuICAgICdjbHMnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGF0YVR5cGUnLFxuICAgICdkYXRlRm9ybWF0JyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkZXN0cm95UGlja2VyT25IaWRlJyxcbiAgICAnZGlydHknLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2RvY2tlZCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2VkZ2VQaWNrZXInLFxuICAgICdlZGl0YWJsZScsXG4gICAgJ2Vycm9yJyxcbiAgICAnZXJyb3JNZXNzYWdlJyxcbiAgICAnZXJyb3JUYXJnZXQnLFxuICAgICdlcnJvclRpcCcsXG4gICAgJ2Vycm9yVHBsJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmbG9hdGVkUGlja2VyJyxcbiAgICAnZmxvYXRlZFBpY2tlckFsaWduJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdmb2N1c1RyYXAnLFxuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZUFuaW1hdGlvbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGlkZU9uTWFza1RhcCcsXG4gICAgJ2hpZGVUcmlnZ2VyJyxcbiAgICAnaHRtbCcsXG4gICAgJ2lkJyxcbiAgICAnaW5saW5lJyxcbiAgICAnaW5wdXRNYXNrJyxcbiAgICAnaW5wdXRUeXBlJyxcbiAgICAnaW5wdXRWYWx1ZScsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xhYmVsJyxcbiAgICAnbGFiZWxBbGlnbicsXG4gICAgJ2xhYmVsQ2xzJyxcbiAgICAnbGFiZWxJblBsYWNlaG9sZGVyJyxcbiAgICAnbGFiZWxNaW5XaWR0aCcsXG4gICAgJ2xhYmVsVGV4dEFsaWduJyxcbiAgICAnbGFiZWxXaWR0aCcsXG4gICAgJ2xhYmVsV3JhcCcsXG4gICAgJ2xlZnQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXRjaEZpZWxkV2lkdGgnLFxuICAgICdtYXhEYXRlJyxcbiAgICAnbWF4SGVpZ2h0JyxcbiAgICAnbWF4TGVuZ3RoJyxcbiAgICAnbWF4V2lkdGgnLFxuICAgICdtaW5EYXRlJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwYXJzZVZhbGlkYXRvcicsXG4gICAgJ3BhdHRlcm4nLFxuICAgICdwaWNrZXInLFxuICAgICdwaWNrZXJTbG90QWxpZ24nLFxuICAgICdwbGFjZWhvbGRlcicsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWFkT25seScsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZXF1aXJlZCcsXG4gICAgJ3JlcXVpcmVkTWVzc2FnZScsXG4gICAgJ3JpZ2h0JyxcbiAgICAncmlwcGxlJyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dBbmltYXRpb24nLFxuICAgICdzaWRlRXJyb3InLFxuICAgICdzdGF0ZWZ1bCcsXG4gICAgJ3N0YXRlZnVsRGVmYXVsdHMnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3RyaXBDaGFyc1JlJyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RleHRBbGlnbicsXG4gICAgJ3RpcEVycm9yJyxcbiAgICAndGl0bGVFcnJvcicsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sdGlwJyxcbiAgICAndG9wJyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cGwnLFxuICAgICd0cGxXcml0ZU1vZGUnLFxuICAgICd0cmFuc2xhdGFibGUnLFxuICAgICd0cmlnZ2VycycsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1bmRlckVycm9yJyxcbiAgICAndXNlckNscycsXG4gICAgJ3VzZXJTZWxlY3RhYmxlJyxcbiAgICAndmFsaWRhdGVEaXNhYmxlZCcsXG4gICAgJ3ZhbGlkYXRpb25NZXNzYWdlJyxcbiAgICAndmFsaWRhdG9ycycsXG4gICAgJ3ZhbHVlJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnd2lkdGgnLFxuICAgICd4JyxcbiAgICAneHR5cGUnLFxuICAgICd5JyxcbiAgICAnekluZGV4JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidhY3Rpb24nLHBhcmFtZXRlcnM6J2RhdGVmaWVsZCxlJ30sXG57bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcbntuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3JlbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG57bmFtZTonYmVmb3JlcmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonZGF0ZWZpZWxkJ30sXG57bmFtZTonYmVmb3JldG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidkYXRlZmllbGQsZSd9LFxue25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2NoYW5nZScscGFyYW1ldGVyczonZGF0ZWZpZWxkLG5ld0RhdGUsb2xkRGF0ZSd9LFxue25hbWU6J2NsZWFyaWNvbnRhcCcscGFyYW1ldGVyczonZGF0ZWZpZWxkLGlucHV0LGUnfSxcbntuYW1lOidjbGljaycscGFyYW1ldGVyczonZSd9LFxue25hbWU6J2NvbGxhcHNlJyxwYXJhbWV0ZXJzOidmaWVsZCd9LFxue25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2RpcnR5Y2hhbmdlJyxwYXJhbWV0ZXJzOidkYXRlZmllbGQsZGlydHknfSxcbntuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidlcmFzZWQnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2Vycm9yY2hhbmdlJyxwYXJhbWV0ZXJzOidkYXRlZmllbGQsZXJyb3InfSxcbntuYW1lOidleHBhbmQnLHBhcmFtZXRlcnM6J2ZpZWxkJ30sXG57bmFtZTonZmxvYXRpbmdjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG57bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2RhdGVmaWVsZCxlJ30sXG57bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonZGF0ZWZpZWxkLGV2ZW50J30sXG57bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonZGF0ZWZpZWxkLGV2ZW50J30sXG57bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2luaXRpYWxpemUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2tleWRvd24nLHBhcmFtZXRlcnM6J2RhdGVmaWVsZCxlJ30sXG57bmFtZTona2V5dXAnLHBhcmFtZXRlcnM6J2RhdGVmaWVsZCxlJ30sXG57bmFtZTonbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbW91c2Vkb3duJyxwYXJhbWV0ZXJzOidkYXRlZmllbGQsZSd9LFxue25hbWU6J21vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLHRvSW5kZXgsZnJvbUluZGV4J30sXG57bmFtZTonb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J3BhaW50ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixlbGVtZW50J30sXG57bmFtZToncGFzdGUnLHBhcmFtZXRlcnM6J2RhdGVmaWVsZCxlJ30sXG57bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcbntuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG57bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcbntuYW1lOidyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonZGF0ZWZpZWxkJ30sXG57bmFtZTondG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOid1cGRhdGVkYXRhJyxwYXJhbWV0ZXJzOidzZW5kZXIsbmV3RGF0YSd9LFxue25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG4nYWN0aW9uJyxcbidhZGRlZCcsXG4nYmVmb3JlYm90dG9tY2hhbmdlJyxcbidiZWZvcmVjZW50ZXJlZGNoYW5nZScsXG4nYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuJ2JlZm9yZWRvY2tlZGNoYW5nZScsXG4nYmVmb3JlaGVpZ2h0Y2hhbmdlJyxcbidiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuJ2JlZm9yZWhpZGUnLFxuJ2JlZm9yZWxlZnRjaGFuZ2UnLFxuJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsXG4nYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsXG4nYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuJ2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcbidiZWZvcmVyaWdodGNoYW5nZScsXG4nYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsXG4nYmVmb3Jlc2hvdycsXG4nYmVmb3JldG9mcm9udCcsXG4nYmVmb3JldG9wY2hhbmdlJyxcbidiZWZvcmV3aWR0aGNoYW5nZScsXG4nYmx1cicsXG4nYm90dG9tY2hhbmdlJyxcbidjZW50ZXJlZGNoYW5nZScsXG4nY2hhbmdlJyxcbidjbGVhcmljb250YXAnLFxuJ2NsaWNrJyxcbidjb2xsYXBzZScsXG4nZGVzdHJveScsXG4nZGlydHljaGFuZ2UnLFxuJ2Rpc2FibGVkY2hhbmdlJyxcbidkb2NrZWRjaGFuZ2UnLFxuJ2VyYXNlZCcsXG4nZXJyb3JjaGFuZ2UnLFxuJ2V4cGFuZCcsXG4nZmxvYXRpbmdjaGFuZ2UnLFxuJ2ZvY3VzJyxcbidmb2N1c2VudGVyJyxcbidmb2N1c2xlYXZlJyxcbidmdWxsc2NyZWVuJyxcbidoZWlnaHRjaGFuZ2UnLFxuJ2hpZGRlbmNoYW5nZScsXG4naGlkZScsXG4naW5pdGlhbGl6ZScsXG4na2V5ZG93bicsXG4na2V5dXAnLFxuJ2xlZnRjaGFuZ2UnLFxuJ21heEhlaWdodGNoYW5nZScsXG4nbWF4V2lkdGhjaGFuZ2UnLFxuJ21pbkhlaWdodGNoYW5nZScsXG4nbWluV2lkdGhjaGFuZ2UnLFxuJ21vdXNlZG93bicsXG4nbW92ZWQnLFxuJ29yaWVudGF0aW9uY2hhbmdlJyxcbidwYWludGVkJyxcbidwYXN0ZScsXG4ncG9zaXRpb25lZGNoYW5nZScsXG4ncmVtb3ZlZCcsXG4ncmVzaXplJyxcbidyaWdodGNoYW5nZScsXG4nc2Nyb2xsYWJsZWNoYW5nZScsXG4nc2hvdycsXG4ndG9mcm9udCcsXG4ndG9wY2hhbmdlJyxcbid1cGRhdGVkYXRhJyxcbid3aWR0aGNoYW5nZScsXG4ncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGF0ZXBpY2tlcmZpZWxkJywgXG4gIGlucHV0czogZGF0ZXBpY2tlcmZpZWxkTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogZGF0ZXBpY2tlcmZpZWxkTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dERhdGVwaWNrZXJmaWVsZENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dERhdGVwaWNrZXJmaWVsZENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsZGF0ZXBpY2tlcmZpZWxkTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJhc2VPbkluaXQoZGF0ZXBpY2tlcmZpZWxkTWV0YURhdGEpXG4gIH1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cbn0iXX0=