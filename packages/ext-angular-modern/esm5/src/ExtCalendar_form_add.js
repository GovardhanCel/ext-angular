import * as tslib_1 from "tslib";
//import EWCCalendar_form_add from '../dist/ext-calendar-form-add.component.js';
//inputs: (new EWCCalendar_form_add()).properties,
import EWCCalendar_form_add from '@sencha/ext-web-components-modern/dist/ext-calendar-form-add.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
var ExtCalendar_form_addComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCalendar_form_addComponent, _super);
    function ExtCalendar_form_addComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'alignSelf', 'allDayField', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorPosition', 'api', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'baseParams', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'bubbleDirty', 'buttonAlign', 'buttons', 'buttonToolbar', 'calendarField', 'cancelButton', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultEndTime', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultStartTime', 'defaultToolWeights', 'defaultType', 'descriptionField', 'dirty', 'disabled', 'displayed', 'docked', 'draggable', 'dropButton', 'enableSubmissionForm', 'enctype', 'endDateField', 'endTimeField', 'undefined', 'event', 'undefined', 'undefined', 'fieldDefaults', 'fieldSeparators', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'header', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'inputBorders', 'instanceCls', 'itemId', 'items', 'jsonSubmit', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'method', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'multipartDetection', 'name', 'nameable', 'nameHolder', 'padding', 'paramOrder', 'paramsAsHash', 'plugins', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'saveButton', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'standardButtons', 'standardSubmit', 'startDateField', 'startTimeField', 'stateful', 'statefulDefaults', 'stateId', 'style', 'submitOnAction', 'tabIndex', 'tbar', 'timeout', 'title', 'titleAlign', 'titleCollapse', 'titleField', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'trackResetOnLoad', 'translatable', 'twoWayBindable', 'ui', 'url', 'userCls', 'userSelectable', 'view', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCCalendar_form_add()).events, ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforecollapse', 'beforedisabledchange', 'beforedockedchange', 'beforeexpand', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforeresizedragstart', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforesubmit', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'cancel', 'centeredchange', 'collapse', 'deactivate', 'destroy', 'dirtychange', 'disabledchange', 'dockedchange', 'drawerhide', 'drawershow', 'drop', 'erased', 'exception', 'expand', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'orientationchange', 'painted', 'positionedchange', 'remove', 'removed', 'renderedchange', 'resize', 'resizedrag', 'resizedragcancel', 'resizedragend', 'resizedragstart', 'rightchange', 'save', 'scrollablechange', 'show', 'submit', 'tofront', 'topchange', 'updatedata', 'widthchange',], vc) || this;
        _this.xtype = 'calendar-form-add';
        return _this;
    }
    ExtCalendar_form_addComponent_1 = ExtCalendar_form_addComponent;
    ExtCalendar_form_addComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCalendar_form_addComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCalendar_form_addComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCalendar_form_addComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCalendar_form_addComponent_1;
    ExtCalendar_form_addComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtCalendar_form_addComponent = ExtCalendar_form_addComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ExtCalendar_form_add',
            inputs: ['header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'activeChildTabIndex', 'activeItem', 'alignSelf', 'allDayField', 'allowFocusingDisabledChildren', 'alwaysOnTop', 'anchor', 'anchorPosition', 'api', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'autoDestroy', 'autoSize', 'axisLock', 'baseParams', 'bbar', 'bind', 'bodyBorder', 'bodyCls', 'bodyPadding', 'bodyStyle', 'border', 'bottom', 'bubbleDirty', 'buttonAlign', 'buttons', 'buttonToolbar', 'calendarField', 'cancelButton', 'cardSwitchAnimation', 'centered', 'closable', 'closeAction', 'closeToolText', 'cls', 'collapsed', 'collapsible', 'constrainAlign', 'contentEl', 'control', 'controller', 'data', 'defaultEndTime', 'defaultFocus', 'defaultListenerScope', 'defaults', 'defaultStartTime', 'defaultToolWeights', 'defaultType', 'descriptionField', 'dirty', 'disabled', 'displayed', 'docked', 'draggable', 'dropButton', 'enableSubmissionForm', 'enctype', 'endDateField', 'endTimeField', 'undefined', 'event', 'undefined', 'undefined', 'fieldDefaults', 'fieldSeparators', 'flex', 'floated', 'focusableContainer', 'focusCls', 'fullscreen', 'header', 'headerPosition', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'inactiveChildTabIndex', 'innerCls', 'inputBorders', 'instanceCls', 'itemId', 'items', 'jsonSubmit', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'layout', 'lbar', 'left', 'listeners', 'manageBorders', 'margin', 'masked', 'maxHeight', 'maxWidth', 'method', 'minButtonWidth', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'multipartDetection', 'name', 'nameable', 'nameHolder', 'padding', 'paramOrder', 'paramsAsHash', 'plugins', 'publishes', 'rbar', 'record', 'reference', 'referenceHolder', 'relative', 'renderTo', 'resetFocusPosition', 'resizable', 'right', 'ripple', 'saveButton', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'standardButtons', 'standardSubmit', 'startDateField', 'startTimeField', 'stateful', 'statefulDefaults', 'stateId', 'style', 'submitOnAction', 'tabIndex', 'tbar', 'timeout', 'title', 'titleAlign', 'titleCollapse', 'titleField', 'toFrontOnShow', 'toolDefaults', 'tools', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'trackResetOnLoad', 'translatable', 'twoWayBindable', 'ui', 'url', 'userCls', 'userSelectable', 'view', 'viewModel', 'weight', 'weighted', 'width', 'x', 'xtype', 'y', 'zIndex',],
            outputs: ['ready', 'activate', 'activeItemchange', 'add', 'added', 'beforeactiveItemchange', 'beforebottomchange', 'beforecenteredchange', 'beforecollapse', 'beforedisabledchange', 'beforedockedchange', 'beforeexpand', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforeresizedragstart', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforesubmit', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'cancel', 'centeredchange', 'collapse', 'deactivate', 'destroy', 'dirtychange', 'disabledchange', 'dockedchange', 'drawerhide', 'drawershow', 'drop', 'erased', 'exception', 'expand', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'move', 'moved', 'orientationchange', 'painted', 'positionedchange', 'remove', 'removed', 'renderedchange', 'resize', 'resizedrag', 'resizedragcancel', 'resizedragend', 'resizedragstart', 'rightchange', 'save', 'scrollablechange', 'show', 'submit', 'tofront', 'topchange', 'updatedata', 'widthchange',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCalendar_form_addComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
    ], ExtCalendar_form_addComponent);
    return ExtCalendar_form_addComponent;
}(EngBase));
export { ExtCalendar_form_addComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCCalendar_form_add()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0Q2FsZW5kYXJfZm9ybV9hZGQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbInNyYy9FeHRDYWxlbmRhcl9mb3JtX2FkZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0ZBQWdGO0FBQ2hGLGtEQUFrRDtBQUNsRCxPQUFPLG9CQUFvQixNQUFNLDJFQUEyRSxDQUFDO0FBQzdHLE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN4QztJQUFtRCx5REFBTztJQUN0RCx1Q0FDSSxJQUFnQixFQUNnQixhQUFzQixFQUN0RCxFQUFvQjtRQUh4QixZQUtJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMscUJBQXFCLEVBQUMsWUFBWSxFQUFDLFdBQVcsRUFBQyxhQUFhLEVBQUMsK0JBQStCLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxLQUFLLEVBQUMsZ0JBQWdCLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLGdCQUFnQixFQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFlBQVksRUFBQyxTQUFTLEVBQUMsYUFBYSxFQUFDLFdBQVcsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLGFBQWEsRUFBQyxhQUFhLEVBQUMsU0FBUyxFQUFDLGVBQWUs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M0MsR0FBRztBQUNILGtEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IEVXQ0NhbGVuZGFyX2Zvcm1fYWRkIGZyb20gJy4uL2Rpc3QvZXh0LWNhbGVuZGFyLWZvcm0tYWRkLmNvbXBvbmVudC5qcyc7XG4vL2lucHV0czogKG5ldyBFV0NDYWxlbmRhcl9mb3JtX2FkZCgpKS5wcm9wZXJ0aWVzLFxuaW1wb3J0IEVXQ0NhbGVuZGFyX2Zvcm1fYWRkIGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLW1vZGVybi9kaXN0L2V4dC1jYWxlbmRhci1mb3JtLWFkZC5jb21wb25lbnQuanMnO1xuaW1wb3J0IHtcbiAgICBIb3N0LFxuICAgIE9wdGlvbmFsLFxuICAgIFNraXBTZWxmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vYW5ndWxhcmJhc2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ0V4dENhbGVuZGFyX2Zvcm1fYWRkJyxcbiAgICBpbnB1dHM6IFsnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhY3RpdmVDaGlsZFRhYkluZGV4JywnYWN0aXZlSXRlbScsJ2FsaWduU2VsZicsJ2FsbERheUZpZWxkJywnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLCdhbHdheXNPblRvcCcsJ2FuY2hvcicsJ2FuY2hvclBvc2l0aW9uJywnYXBpJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2F1dG9EZXN0cm95JywnYXV0b1NpemUnLCdheGlzTG9jaycsJ2Jhc2VQYXJhbXMnLCdiYmFyJywnYmluZCcsJ2JvZHlCb3JkZXInLCdib2R5Q2xzJywnYm9keVBhZGRpbmcnLCdib2R5U3R5bGUnLCdib3JkZXInLCdib3R0b20nLCdidWJibGVEaXJ0eScsJ2J1dHRvbkFsaWduJywnYnV0dG9ucycsJ2J1dHRvblRvb2xiYXInLCdjYWxlbmRhckZpZWxkJywnY2FuY2VsQnV0dG9uJywnY2FyZFN3aXRjaEFuaW1hdGlvbicsJ2NlbnRlcmVkJywnY2xvc2FibGUnLCdjbG9zZUFjdGlvbicsJ2Nsb3NlVG9vbFRleHQnLCdjbHMnLCdjb2xsYXBzZWQnLCdjb2xsYXBzaWJsZScsJ2NvbnN0cmFpbkFsaWduJywnY29udGVudEVsJywnY29udHJvbCcsJ2NvbnRyb2xsZXInLCdkYXRhJywnZGVmYXVsdEVuZFRpbWUnLCdkZWZhdWx0Rm9jdXMnLCdkZWZhdWx0TGlzdGVuZXJTY29wZScsJ2RlZmF1bHRzJywnZGVmYXVsdFN0YXJ0VGltZScsJ2RlZmF1bHRUb29sV2VpZ2h0cycsJ2RlZmF1bHRUeXBlJywnZGVzY3JpcHRpb25GaWVsZCcsJ2RpcnR5JywnZGlzYWJsZWQnLCdkaXNwbGF5ZWQnLCdkb2NrZWQnLCdkcmFnZ2FibGUnLCdkcm9wQnV0dG9uJywnZW5hYmxlU3VibWlzc2lvbkZvcm0nLCdlbmN0eXBlJywnZW5kRGF0ZUZpZWxkJywnZW5kVGltZUZpZWxkJywndW5kZWZpbmVkJywnZXZlbnQnLCd1bmRlZmluZWQnLCd1bmRlZmluZWQnLCdmaWVsZERlZmF1bHRzJywnZmllbGRTZXBhcmF0b3JzJywnZmxleCcsJ2Zsb2F0ZWQnLCdmb2N1c2FibGVDb250YWluZXInLCdmb2N1c0NscycsJ2Z1bGxzY3JlZW4nLCdoZWFkZXInLCdoZWFkZXJQb3NpdGlvbicsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVBbmltYXRpb24nLCdoaWRlTW9kZScsJ2hpZGVPbk1hc2tUYXAnLCdodG1sJywnaWNvbicsJ2ljb25BbGlnbicsJ2ljb25DbHMnLCdpZCcsJ2luYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2lubmVyQ2xzJywnaW5wdXRCb3JkZXJzJywnaW5zdGFuY2VDbHMnLCdpdGVtSWQnLCdpdGVtcycsJ2pzb25TdWJtaXQnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGF5b3V0JywnbGJhcicsJ2xlZnQnLCdsaXN0ZW5lcnMnLCdtYW5hZ2VCb3JkZXJzJywnbWFyZ2luJywnbWFza2VkJywnbWF4SGVpZ2h0JywnbWF4V2lkdGgnLCdtZXRob2QnLCdtaW5CdXR0b25XaWR0aCcsJ21pbkhlaWdodCcsJ21pbldpZHRoJywnbW9kYWwnLCdtb2RlbFZhbGlkYXRpb24nLCdtdWx0aXBhcnREZXRlY3Rpb24nLCduYW1lJywnbmFtZWFibGUnLCduYW1lSG9sZGVyJywncGFkZGluZycsJ3BhcmFtT3JkZXInLCdwYXJhbXNBc0hhc2gnLCdwbHVnaW5zJywncHVibGlzaGVzJywncmJhcicsJ3JlY29yZCcsJ3JlZmVyZW5jZScsJ3JlZmVyZW5jZUhvbGRlcicsJ3JlbGF0aXZlJywncmVuZGVyVG8nLCdyZXNldEZvY3VzUG9zaXRpb24nLCdyZXNpemFibGUnLCdyaWdodCcsJ3JpcHBsZScsJ3NhdmVCdXR0b24nLCdzY3JvbGxhYmxlJywnc2Vzc2lvbicsJ3NoYWRvdycsJ3NoYXJlYWJsZU5hbWUnLCdzaGltJywnc2hvd0FuaW1hdGlvbicsJ3N0YW5kYXJkQnV0dG9ucycsJ3N0YW5kYXJkU3VibWl0Jywnc3RhcnREYXRlRmllbGQnLCdzdGFydFRpbWVGaWVsZCcsJ3N0YXRlZnVsJywnc3RhdGVmdWxEZWZhdWx0cycsJ3N0YXRlSWQnLCdzdHlsZScsJ3N1Ym1pdE9uQWN0aW9uJywndGFiSW5kZXgnLCd0YmFyJywndGltZW91dCcsJ3RpdGxlJywndGl0bGVBbGlnbicsJ3RpdGxlQ29sbGFwc2UnLCd0aXRsZUZpZWxkJywndG9Gcm9udE9uU2hvdycsJ3Rvb2xEZWZhdWx0cycsJ3Rvb2xzJywndG9vbHRpcCcsJ3RvcCcsJ3RvdWNoQWN0aW9uJywndHBsJywndHBsV3JpdGVNb2RlJywndHJhY2tSZXNldE9uTG9hZCcsJ3RyYW5zbGF0YWJsZScsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1cmwnLCd1c2VyQ2xzJywndXNlclNlbGVjdGFibGUnLCd2aWV3Jywndmlld01vZGVsJywnd2VpZ2h0Jywnd2VpZ2h0ZWQnLCd3aWR0aCcsJ3gnLCd4dHlwZScsJ3knLCd6SW5kZXgnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2FjdGl2YXRlJywnYWN0aXZlSXRlbWNoYW5nZScsJ2FkZCcsJ2FkZGVkJywnYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScsJ2JlZm9yZWJvdHRvbWNoYW5nZScsJ2JlZm9yZWNlbnRlcmVkY2hhbmdlJywnYmVmb3JlY29sbGFwc2UnLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWRvY2tlZGNoYW5nZScsJ2JlZm9yZWV4cGFuZCcsJ2JlZm9yZWhlaWdodGNoYW5nZScsJ2JlZm9yZWhpZGRlbmNoYW5nZScsJ2JlZm9yZWhpZGUnLCdiZWZvcmVsZWZ0Y2hhbmdlJywnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJywnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsJ2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJywnYmVmb3JlcmVzaXplZHJhZ3N0YXJ0JywnYmVmb3JlcmlnaHRjaGFuZ2UnLCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJywnYmVmb3Jlc2hvdycsJ2JlZm9yZXN1Ym1pdCcsJ2JlZm9yZXRvZnJvbnQnLCdiZWZvcmV0b3BjaGFuZ2UnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdib3R0b21jaGFuZ2UnLCdjYW5jZWwnLCdjZW50ZXJlZGNoYW5nZScsJ2NvbGxhcHNlJywnZGVhY3RpdmF0ZScsJ2Rlc3Ryb3knLCdkaXJ0eWNoYW5nZScsJ2Rpc2FibGVkY2hhbmdlJywnZG9ja2VkY2hhbmdlJywnZHJhd2VyaGlkZScsJ2RyYXdlcnNob3cnLCdkcm9wJywnZXJhc2VkJywnZXhjZXB0aW9uJywnZXhwYW5kJywnZmxvYXRpbmdjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnZnVsbHNjcmVlbicsJ2hlaWdodGNoYW5nZScsJ2hpZGRlbmNoYW5nZScsJ2hpZGUnLCdpbml0aWFsaXplJywnbGVmdGNoYW5nZScsJ21heEhlaWdodGNoYW5nZScsJ21heFdpZHRoY2hhbmdlJywnbWluSGVpZ2h0Y2hhbmdlJywnbWluV2lkdGhjaGFuZ2UnLCdtb3ZlJywnbW92ZWQnLCdvcmllbnRhdGlvbmNoYW5nZScsJ3BhaW50ZWQnLCdwb3NpdGlvbmVkY2hhbmdlJywncmVtb3ZlJywncmVtb3ZlZCcsJ3JlbmRlcmVkY2hhbmdlJywncmVzaXplJywncmVzaXplZHJhZycsJ3Jlc2l6ZWRyYWdjYW5jZWwnLCdyZXNpemVkcmFnZW5kJywncmVzaXplZHJhZ3N0YXJ0JywncmlnaHRjaGFuZ2UnLCdzYXZlJywnc2Nyb2xsYWJsZWNoYW5nZScsJ3Nob3cnLCdzdWJtaXQnLCd0b2Zyb250JywndG9wY2hhbmdlJywndXBkYXRlZGF0YScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDYWxlbmRhcl9mb3JtX2FkZENvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENhbGVuZGFyX2Zvcm1fYWRkQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWN0aXZlQ2hpbGRUYWJJbmRleCcsJ2FjdGl2ZUl0ZW0nLCdhbGlnblNlbGYnLCdhbGxEYXlGaWVsZCcsJ2FsbG93Rm9jdXNpbmdEaXNhYmxlZENoaWxkcmVuJywnYWx3YXlzT25Ub3AnLCdhbmNob3InLCdhbmNob3JQb3NpdGlvbicsJ2FwaScsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdhdXRvRGVzdHJveScsJ2F1dG9TaXplJywnYXhpc0xvY2snLCdiYXNlUGFyYW1zJywnYmJhcicsJ2JpbmQnLCdib2R5Qm9yZGVyJywnYm9keUNscycsJ2JvZHlQYWRkaW5nJywnYm9keVN0eWxlJywnYm9yZGVyJywnYm90dG9tJywnYnViYmxlRGlydHknLCdidXR0b25BbGlnbicsJ2J1dHRvbnMnLCdidXR0b25Ub29sYmFyJywnY2FsZW5kYXJGaWVsZCcsJ2NhbmNlbEJ1dHRvbicsJ2NhcmRTd2l0Y2hBbmltYXRpb24nLCdjZW50ZXJlZCcsJ2Nsb3NhYmxlJywnY2xvc2VBY3Rpb24nLCdjbG9zZVRvb2xUZXh0JywnY2xzJywnY29sbGFwc2VkJywnY29sbGFwc2libGUnLCdjb25zdHJhaW5BbGlnbicsJ2NvbnRlbnRFbCcsJ2NvbnRyb2wnLCdjb250cm9sbGVyJywnZGF0YScsJ2RlZmF1bHRFbmRUaW1lJywnZGVmYXVsdEZvY3VzJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkZWZhdWx0cycsJ2RlZmF1bHRTdGFydFRpbWUnLCdkZWZhdWx0VG9vbFdlaWdodHMnLCdkZWZhdWx0VHlwZScsJ2Rlc2NyaXB0aW9uRmllbGQnLCdkaXJ0eScsJ2Rpc2FibGVkJywnZGlzcGxheWVkJywnZG9ja2VkJywnZHJhZ2dhYmxlJywnZHJvcEJ1dHRvbicsJ2VuYWJsZVN1Ym1pc3Npb25Gb3JtJywnZW5jdHlwZScsJ2VuZERhdGVGaWVsZCcsJ2VuZFRpbWVGaWVsZCcsJ3VuZGVmaW5lZCcsJ2V2ZW50JywndW5kZWZpbmVkJywndW5kZWZpbmVkJywnZmllbGREZWZhdWx0cycsJ2ZpZWxkU2VwYXJhdG9ycycsJ2ZsZXgnLCdmbG9hdGVkJywnZm9jdXNhYmxlQ29udGFpbmVyJywnZm9jdXNDbHMnLCdmdWxsc2NyZWVuJywnaGVhZGVyJywnaGVhZGVyUG9zaXRpb24nLCdoZWlnaHQnLCdoaWRkZW4nLCdoaWRlQW5pbWF0aW9uJywnaGlkZU1vZGUnLCdoaWRlT25NYXNrVGFwJywnaHRtbCcsJ2ljb24nLCdpY29uQWxpZ24nLCdpY29uQ2xzJywnaWQnLCdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLCdpbm5lckNscycsJ2lucHV0Qm9yZGVycycsJ2luc3RhbmNlQ2xzJywnaXRlbUlkJywnaXRlbXMnLCdqc29uU3VibWl0Jywna2V5TWFwJywna2V5TWFwRW5hYmxlZCcsJ2tleU1hcFRhcmdldCcsJ2xheW91dCcsJ2xiYXInLCdsZWZ0JywnbGlzdGVuZXJzJywnbWFuYWdlQm9yZGVycycsJ21hcmdpbicsJ21hc2tlZCcsJ21heEhlaWdodCcsJ21heFdpZHRoJywnbWV0aG9kJywnbWluQnV0dG9uV2lkdGgnLCdtaW5IZWlnaHQnLCdtaW5XaWR0aCcsJ21vZGFsJywnbW9kZWxWYWxpZGF0aW9uJywnbXVsdGlwYXJ0RGV0ZWN0aW9uJywnbmFtZScsJ25hbWVhYmxlJywnbmFtZUhvbGRlcicsJ3BhZGRpbmcnLCdwYXJhbU9yZGVyJywncGFyYW1zQXNIYXNoJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JiYXInLCdyZWNvcmQnLCdyZWZlcmVuY2UnLCdyZWZlcmVuY2VIb2xkZXInLCdyZWxhdGl2ZScsJ3JlbmRlclRvJywncmVzZXRGb2N1c1Bvc2l0aW9uJywncmVzaXphYmxlJywncmlnaHQnLCdyaXBwbGUnLCdzYXZlQnV0dG9uJywnc2Nyb2xsYWJsZScsJ3Nlc3Npb24nLCdzaGFkb3cnLCdzaGFyZWFibGVOYW1lJywnc2hpbScsJ3Nob3dBbmltYXRpb24nLCdzdGFuZGFyZEJ1dHRvbnMnLCdzdGFuZGFyZFN1Ym1pdCcsJ3N0YXJ0RGF0ZUZpZWxkJywnc3RhcnRUaW1lRmllbGQnLCdzdGF0ZWZ1bCcsJ3N0YXRlZnVsRGVmYXVsdHMnLCdzdGF0ZUlkJywnc3R5bGUnLCdzdWJtaXRPbkFjdGlvbicsJ3RhYkluZGV4JywndGJhcicsJ3RpbWVvdXQnLCd0aXRsZScsJ3RpdGxlQWxpZ24nLCd0aXRsZUNvbGxhcHNlJywndGl0bGVGaWVsZCcsJ3RvRnJvbnRPblNob3cnLCd0b29sRGVmYXVsdHMnLCd0b29scycsJ3Rvb2x0aXAnLCd0b3AnLCd0b3VjaEFjdGlvbicsJ3RwbCcsJ3RwbFdyaXRlTW9kZScsJ3RyYWNrUmVzZXRPbkxvYWQnLCd0cmFuc2xhdGFibGUnLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXJsJywndXNlckNscycsJ3VzZXJTZWxlY3RhYmxlJywndmlldycsJ3ZpZXdNb2RlbCcsJ3dlaWdodCcsJ3dlaWdodGVkJywnd2lkdGgnLCd4JywneHR5cGUnLCd5JywnekluZGV4JyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NDYWxlbmRhcl9mb3JtX2FkZCgpKS5ldmVudHMsXG4gICAgICAgICAgICBbJ3JlYWR5JywnYWN0aXZhdGUnLCdhY3RpdmVJdGVtY2hhbmdlJywnYWRkJywnYWRkZWQnLCdiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJywnYmVmb3JlYm90dG9tY2hhbmdlJywnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLCdiZWZvcmVjb2xsYXBzZScsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlZG9ja2VkY2hhbmdlJywnYmVmb3JlZXhwYW5kJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3JlaGlkZScsJ2JlZm9yZWxlZnRjaGFuZ2UnLCdiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLCdiZWZvcmVtYXhXaWR0aGNoYW5nZScsJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsJ2JlZm9yZW1pbldpZHRoY2hhbmdlJywnYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLCdiZWZvcmVyZXNpemVkcmFnc3RhcnQnLCdiZWZvcmVyaWdodGNoYW5nZScsJ2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLCdiZWZvcmVzaG93JywnYmVmb3Jlc3VibWl0JywnYmVmb3JldG9mcm9udCcsJ2JlZm9yZXRvcGNoYW5nZScsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2JvdHRvbWNoYW5nZScsJ2NhbmNlbCcsJ2NlbnRlcmVkY2hhbmdlJywnY29sbGFwc2UnLCdkZWFjdGl2YXRlJywnZGVzdHJveScsJ2RpcnR5Y2hhbmdlJywnZGlzYWJsZWRjaGFuZ2UnLCdkb2NrZWRjaGFuZ2UnLCdkcmF3ZXJoaWRlJywnZHJhd2Vyc2hvdycsJ2Ryb3AnLCdlcmFzZWQnLCdleGNlcHRpb24nLCdleHBhbmQnLCdmbG9hdGluZ2NoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdmdWxsc2NyZWVuJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywnaGlkZScsJ2luaXRpYWxpemUnLCdsZWZ0Y2hhbmdlJywnbWF4SGVpZ2h0Y2hhbmdlJywnbWF4V2lkdGhjaGFuZ2UnLCdtaW5IZWlnaHRjaGFuZ2UnLCdtaW5XaWR0aGNoYW5nZScsJ21vdmUnLCdtb3ZlZCcsJ29yaWVudGF0aW9uY2hhbmdlJywncGFpbnRlZCcsJ3Bvc2l0aW9uZWRjaGFuZ2UnLCdyZW1vdmUnLCdyZW1vdmVkJywncmVuZGVyZWRjaGFuZ2UnLCdyZXNpemUnLCdyZXNpemVkcmFnJywncmVzaXplZHJhZ2NhbmNlbCcsJ3Jlc2l6ZWRyYWdlbmQnLCdyZXNpemVkcmFnc3RhcnQnLCdyaWdodGNoYW5nZScsJ3NhdmUnLCdzY3JvbGxhYmxlY2hhbmdlJywnc2hvdycsJ3N1Ym1pdCcsJ3RvZnJvbnQnLCd0b3BjaGFuZ2UnLCd1cGRhdGVkYXRhJywnd2lkdGhjaGFuZ2UnLF0sXG4gICAgICAgICAgICB2Y1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAnY2FsZW5kYXItZm9ybS1hZGQnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ0NhbGVuZGFyX2Zvcm1fYWRkKCkpLmV2ZW50bmFtZXM7XG4vL3ZhciBldmVudG5hbWVzYWxsID0gW107XG4vL2V2ZW50cy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4vLyAgICBldmVudG5hbWVzYWxsLnB1c2goZXZlbnQubmFtZSlcbi8vfSlcbi8vY29uc3QgZGlzdGluY3QgPSAodmFsdWUsIGluZGV4LCBzZWxmKSA9PiB7XG4vLyAgICAvL3JldHVybiB0cnVlXG4vLyAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4vL31cbi8vdmFyIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzYWxsLmZpbHRlcihkaXN0aW5jdCk7XG4iXX0=