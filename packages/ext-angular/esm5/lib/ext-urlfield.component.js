import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var urlfieldMetaData = /** @class */ (function () {
    function urlfieldMetaData() {
    }
    urlfieldMetaData.XTYPE = 'urlfield';
    urlfieldMetaData.PROPERTIES = [
        'alignSelf',
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
        'defaultListenerScope',
        'dirty',
        'disabled',
        'displayed',
        'docked',
        'draggable',
        'editable',
        'error',
        'errorMessage',
        'errorTarget',
        'errorTip',
        'errorTpl',
        'flex',
        'floated',
        'focusCls',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideMode',
        'hideOnMaskTap',
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
        'maxHeight',
        'maxLength',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'name',
        'nameable',
        'padding',
        'parseValidator',
        'pattern',
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
    urlfieldMetaData.EVENTS = [
        { name: 'action', parameters: 'urlfield,e' },
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
        { name: 'beforetofront', parameters: 'urlfield' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'urlfield,e' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'change', parameters: 'urlfield,newValue,oldValue' },
        { name: 'clearicontap', parameters: 'urlfield,input,e' },
        { name: 'click', parameters: 'e' },
        { name: 'destroy', parameters: '' },
        { name: 'dirtychange', parameters: 'urlfield,dirty' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'errorchange', parameters: 'urlfield,error' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'urlfield,e' },
        { name: 'focusenter', parameters: 'urlfield,event' },
        { name: 'focusleave', parameters: 'urlfield,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'keydown', parameters: 'urlfield,e' },
        { name: 'keyup', parameters: 'urlfield,e' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'mousedown', parameters: 'urlfield,e' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'paste', parameters: 'urlfield,e' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'show', parameters: 'sender' },
        { name: 'tofront', parameters: 'urlfield' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    urlfieldMetaData.EVENTNAMES = [
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
        'destroy',
        'dirtychange',
        'disabledchange',
        'dockedchange',
        'erased',
        'errorchange',
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
    return urlfieldMetaData;
}());
export { urlfieldMetaData };
var ExtUrlfieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtUrlfieldComponent, _super);
    function ExtUrlfieldComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, urlfieldMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtUrlfieldComponent_1 = ExtUrlfieldComponent;
    ExtUrlfieldComponent.prototype.ngOnInit = function () {
        this.baseOnInit(urlfieldMetaData);
    };
    ExtUrlfieldComponent.prototype.ngAfterContentInit = function () {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    };
    var ExtUrlfieldComponent_1;
    ExtUrlfieldComponent = ExtUrlfieldComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'urlfield',
            inputs: urlfieldMetaData.PROPERTIES,
            outputs: urlfieldMetaData.EVENTNAMES,
            providers: [{ provide: base, useExisting: forwardRef(function () { return ExtUrlfieldComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, base])
    ], ExtUrlfieldComponent);
    return ExtUrlfieldComponent;
}(base));
export { ExtUrlfieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXVybGZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LXVybGZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQXFSQSxDQUFDO0lBcFJlLHNCQUFLLEdBQVcsVUFBVSxDQUFDO0lBQzNCLDJCQUFVLEdBQWE7UUFDbkMsV0FBVztRQUNYLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixjQUFjO1FBQ2QsYUFBYTtRQUNiLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsVUFBVTtRQUNWLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sV0FBVztRQUNYLFFBQVE7UUFDUixRQUFRO1FBQ1IsYUFBYTtRQUNiLFVBQVU7UUFDVixXQUFXO1FBQ1gsS0FBSztRQUNMLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsWUFBWTtRQUNaLE1BQU07UUFDTixVQUFVO1FBQ1Ysc0JBQXNCO1FBQ3RCLE9BQU87UUFDUCxVQUFVO1FBQ1YsV0FBVztRQUNYLFFBQVE7UUFDUixXQUFXO1FBQ1gsVUFBVTtRQUNWLE9BQU87UUFDUCxjQUFjO1FBQ2QsYUFBYTtRQUNiLFVBQVU7UUFDVixVQUFVO1FBQ1YsTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsWUFBWTtRQUNaLFFBQVE7UUFDUixRQUFRO1FBQ1IsZUFBZTtRQUNmLFVBQVU7UUFDVixlQUFlO1FBQ2YsTUFBTTtRQUNOLElBQUk7UUFDSixRQUFRO1FBQ1IsV0FB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LGdCQUFnQixDQUFDLENBQUE7SUFDbkMsQ0FBQztJQUNNLGlEQUFrQixHQUF6QjtRQUNFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFBO1FBQzNCLDBCQUEwQjtJQUM1QixDQUFDOztJQVhVLG9CQUFvQjtRQVBoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixNQUFNLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtZQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsc0JBQW9CLEVBQXBCLENBQW9CLENBQUMsRUFBQyxDQUFDO1lBQ2pGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUdvQixtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBQTNDLFVBQVUsRUFBeUQsSUFBSTtPQUZuRSxvQkFBb0IsQ0FjaEM7SUFBRCwyQkFBQztDQUFBLEFBZEQsQ0FBMEMsSUFBSSxHQWM3QztTQWRZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgdXJsZmllbGRNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICd1cmxmaWVsZCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2FsaWduU2VsZicsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYW5pbWF0ZVVuZGVybGluZScsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdhdXRvQ2FwaXRhbGl6ZScsXG4gICAgJ2F1dG9Db21wbGV0ZScsXG4gICAgJ2F1dG9Db3JyZWN0JyxcbiAgICAnYXV0b0ZpdEVycm9ycycsXG4gICAgJ2F1dG9IaWRlSW5wdXRNYXNrJyxcbiAgICAnYXhpc0xvY2snLFxuICAgICdiYWRGb3JtYXRNZXNzYWdlJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvZHlBbGlnbicsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvdHRvbScsXG4gICAgJ2J1YmJsZURpcnR5JyxcbiAgICAnY2VudGVyZWQnLFxuICAgICdjbGVhcmFibGUnLFxuICAgICdjbHMnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGF0YVR5cGUnLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RpcnR5JyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNwbGF5ZWQnLFxuICAgICdkb2NrZWQnLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdlZGl0YWJsZScsXG4gICAgJ2Vycm9yJyxcbiAgICAnZXJyb3JNZXNzYWdlJyxcbiAgICAnZXJyb3JUYXJnZXQnLFxuICAgICdlcnJvclRpcCcsXG4gICAgJ2Vycm9yVHBsJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlQW5pbWF0aW9uJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdoaWRlT25NYXNrVGFwJyxcbiAgICAnaHRtbCcsXG4gICAgJ2lkJyxcbiAgICAnaW5saW5lJyxcbiAgICAnaW5wdXRNYXNrJyxcbiAgICAnaW5wdXRUeXBlJyxcbiAgICAnaW5wdXRWYWx1ZScsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xhYmVsJyxcbiAgICAnbGFiZWxBbGlnbicsXG4gICAgJ2xhYmVsQ2xzJyxcbiAgICAnbGFiZWxJblBsYWNlaG9sZGVyJyxcbiAgICAnbGFiZWxNaW5XaWR0aCcsXG4gICAgJ2xhYmVsVGV4dEFsaWduJyxcbiAgICAnbGFiZWxXaWR0aCcsXG4gICAgJ2xhYmVsV3JhcCcsXG4gICAgJ2xlZnQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhMZW5ndGgnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGFyc2VWYWxpZGF0b3InLFxuICAgICdwYXR0ZXJuJyxcbiAgICAncGxhY2Vob2xkZXInLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVhZE9ubHknLFxuICAgICdyZWNvcmQnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWxhdGl2ZScsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmVxdWlyZWQnLFxuICAgICdyZXF1aXJlZE1lc3NhZ2UnLFxuICAgICdyaWdodCcsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Njcm9sbGFibGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaG93QW5pbWF0aW9uJyxcbiAgICAnc2lkZUVycm9yJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZWZ1bERlZmF1bHRzJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0cmlwQ2hhcnNSZScsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0ZXh0QWxpZ24nLFxuICAgICd0aXBFcnJvcicsXG4gICAgJ3RpdGxlRXJyb3InLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHJpZ2dlcnMnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndW5kZXJFcnJvcicsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd1c2VyU2VsZWN0YWJsZScsXG4gICAgJ3ZhbGlkYXRlRGlzYWJsZWQnLFxuICAgICd2YWxpZGF0aW9uTWVzc2FnZScsXG4gICAgJ3ZhbGlkYXRvcnMnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3h0eXBlJyxcbiAgICAneScsXG4gICAgJ3pJbmRleCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG57bmFtZTonYWN0aW9uJyxwYXJhbWV0ZXJzOid1cmxmaWVsZCxlJ30sXG57bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcbntuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3JlbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG57bmFtZTonYmVmb3JlcmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczondXJsZmllbGQnfSxcbntuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J3VybGZpZWxkLGUnfSxcbntuYW1lOidib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2NlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidjaGFuZ2UnLHBhcmFtZXRlcnM6J3VybGZpZWxkLG5ld1ZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonY2xlYXJpY29udGFwJyxwYXJhbWV0ZXJzOid1cmxmaWVsZCxpbnB1dCxlJ30sXG57bmFtZTonY2xpY2snLHBhcmFtZXRlcnM6J2UnfSxcbntuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidkaXJ0eWNoYW5nZScscGFyYW1ldGVyczondXJsZmllbGQsZGlydHknfSxcbntuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidlcmFzZWQnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2Vycm9yY2hhbmdlJyxwYXJhbWV0ZXJzOid1cmxmaWVsZCxlcnJvcid9LFxue25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxue25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOid1cmxmaWVsZCxlJ30sXG57bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczondXJsZmllbGQsZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOid1cmxmaWVsZCxldmVudCd9LFxue25hbWU6J2Z1bGxzY3JlZW4nLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidrZXlkb3duJyxwYXJhbWV0ZXJzOid1cmxmaWVsZCxlJ30sXG57bmFtZTona2V5dXAnLHBhcmFtZXRlcnM6J3VybGZpZWxkLGUnfSxcbntuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtb3VzZWRvd24nLHBhcmFtZXRlcnM6J3VybGZpZWxkLGUnfSxcbntuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxue25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxue25hbWU6J3Bhc3RlJyxwYXJhbWV0ZXJzOid1cmxmaWVsZCxlJ30sXG57bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcbntuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG57bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcbntuYW1lOidyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTondG9mcm9udCcscGFyYW1ldGVyczondXJsZmllbGQnfSxcbntuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG57bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcbidhY3Rpb24nLFxuJ2FkZGVkJyxcbidiZWZvcmVib3R0b21jaGFuZ2UnLFxuJ2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxcbidiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG4nYmVmb3JlZG9ja2VkY2hhbmdlJyxcbidiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuJ2JlZm9yZWhpZGRlbmNoYW5nZScsXG4nYmVmb3JlaGlkZScsXG4nYmVmb3JlbGVmdGNoYW5nZScsXG4nYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxcbidiZWZvcmVtYXhXaWR0aGNoYW5nZScsXG4nYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxcbidiZWZvcmVtaW5XaWR0aGNoYW5nZScsXG4nYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLFxuJ2JlZm9yZXJpZ2h0Y2hhbmdlJyxcbidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxcbidiZWZvcmVzaG93JyxcbidiZWZvcmV0b2Zyb250JyxcbidiZWZvcmV0b3BjaGFuZ2UnLFxuJ2JlZm9yZXdpZHRoY2hhbmdlJyxcbidibHVyJyxcbidib3R0b21jaGFuZ2UnLFxuJ2NlbnRlcmVkY2hhbmdlJyxcbidjaGFuZ2UnLFxuJ2NsZWFyaWNvbnRhcCcsXG4nY2xpY2snLFxuJ2Rlc3Ryb3knLFxuJ2RpcnR5Y2hhbmdlJyxcbidkaXNhYmxlZGNoYW5nZScsXG4nZG9ja2VkY2hhbmdlJyxcbidlcmFzZWQnLFxuJ2Vycm9yY2hhbmdlJyxcbidmbG9hdGluZ2NoYW5nZScsXG4nZm9jdXMnLFxuJ2ZvY3VzZW50ZXInLFxuJ2ZvY3VzbGVhdmUnLFxuJ2Z1bGxzY3JlZW4nLFxuJ2hlaWdodGNoYW5nZScsXG4naGlkZGVuY2hhbmdlJyxcbidoaWRlJyxcbidpbml0aWFsaXplJyxcbidrZXlkb3duJyxcbidrZXl1cCcsXG4nbGVmdGNoYW5nZScsXG4nbWF4SGVpZ2h0Y2hhbmdlJyxcbidtYXhXaWR0aGNoYW5nZScsXG4nbWluSGVpZ2h0Y2hhbmdlJyxcbidtaW5XaWR0aGNoYW5nZScsXG4nbW91c2Vkb3duJyxcbidtb3ZlZCcsXG4nb3JpZW50YXRpb25jaGFuZ2UnLFxuJ3BhaW50ZWQnLFxuJ3Bhc3RlJyxcbidwb3NpdGlvbmVkY2hhbmdlJyxcbidyZW1vdmVkJyxcbidyZXNpemUnLFxuJ3JpZ2h0Y2hhbmdlJyxcbidzY3JvbGxhYmxlY2hhbmdlJyxcbidzaG93Jyxcbid0b2Zyb250Jyxcbid0b3BjaGFuZ2UnLFxuJ3VwZGF0ZWRhdGEnLFxuJ3dpZHRoY2hhbmdlJyxcbidyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd1cmxmaWVsZCcsIFxuICBpbnB1dHM6IHVybGZpZWxkTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogdXJsZmllbGRNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0VXJsZmllbGRDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRVcmxmaWVsZENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsdXJsZmllbGRNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cbiAgcHVibGljIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYmFzZU9uSW5pdCh1cmxmaWVsZE1ldGFEYXRhKVxuICB9XG4gIHB1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gICAgLy90aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuXG59Il19