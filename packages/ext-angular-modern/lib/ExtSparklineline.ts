//import EWCSparklineline from '../dist/ext-sparklineline.component.js';
//inputs: (new EWCSparklineline()).properties,
import EWCSparklineline from '@sencha/ext-web-components-modern/dist/ext-sparklineline.component.js';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './angularbase';

@Component({
    selector: 'ExtSparklineline',
    inputs: ['header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','chartRangeMax','chartRangeMaxX','chartRangeMin','chartRangeMinX','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','disabled','disableTooltips','displayed','docked','draggable','drawNormalOnTop','undefined','undefined','undefined','fillColor','flex','floated','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','highlightColor','highlightLighten','highlightLineColor','highlightSpotColor','html','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','lineColor','lineWidth','listeners','margin','maxHeight','maxSpotColor','maxWidth','minHeight','minSpotColor','minWidth','modal','modelValidation','name','nameable','normalRangeColor','normalRangeMax','normalRangeMin','padding','plugins','publishes','record','reference','relative','renderTo','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','spotColor','spotRadius','stateful','statefulDefaults','stateId','style','tabIndex','tipTpl','toFrontOnShow','tooltip','tooltipPrefix','tooltipSkipNull','tooltipSuffix','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','values','valueSpots','viewModel','weight','width','x','xtype','y','zIndex',],
    outputs: ['ready','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklinelineComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtSparklinelineComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','axisLock','bind','border','bottom','centered','chartRangeMax','chartRangeMaxX','chartRangeMin','chartRangeMinX','cls','constrainAlign','contentEl','controller','data','defaultListenerScope','disabled','disableTooltips','displayed','docked','draggable','drawNormalOnTop','undefined','undefined','undefined','fillColor','flex','floated','focusCls','fullscreen','height','hidden','hideAnimation','hideMode','hideOnMaskTap','highlightColor','highlightLighten','highlightLineColor','highlightSpotColor','html','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','left','lineColor','lineWidth','listeners','margin','maxHeight','maxSpotColor','maxWidth','minHeight','minSpotColor','minWidth','modal','modelValidation','name','nameable','normalRangeColor','normalRangeMax','normalRangeMin','padding','plugins','publishes','record','reference','relative','renderTo','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','spotColor','spotRadius','stateful','statefulDefaults','stateId','style','tabIndex','tipTpl','toFrontOnShow','tooltip','tooltipPrefix','tooltipSkipNull','tooltipSuffix','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','userCls','userSelectable','values','valueSpots','viewModel','weight','width','x','xtype','y','zIndex',],
            (new EWCSparklineline()).events,
            ['ready','added','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centeredchange','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','moved','orientationchange','painted','positionedchange','removed','resize','rightchange','scrollablechange','show','tofront','topchange','updatedata','widthchange',],
            vc
        )
        this.xtype = 'sparklineline'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}


// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)

//var events = (new EWCSparklineline()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
