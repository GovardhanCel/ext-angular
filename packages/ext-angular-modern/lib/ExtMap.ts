//import EWCMap from '../dist/ext-map.component.js';
//inputs: (new EWCMap()).properties,
//import EWCMap from '@sencha/ext-web-components-modern/dist/ext-map.component.js';
import { EWCMap } from '@sencha/ext-web-components-modern';
import {
    Host,
    Optional,
    SkipSelf,
    Component,
    ElementRef,
    forwardRef,
    ViewContainerRef
  } from '@angular/core';
import { EngBase } from './runtime/angularbase';

@Component({
    selector: 'ExtMap',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','cardSwitchAnimation','centered','cls','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','disabled','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','geo','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','manageBorders','map','mapListeners','mapOptions','margin','markers','markerTemplate','masked','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','record','reference','referenceHolder','relative','renderTo','requiredScripts','resetFocusPosition','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','tabIndex','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','useCurrentLocation','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
    outputs: ['ready','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centerchange','centeredchange','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maprender','markerclick','markerdblclick','markerdrag','markerdragend','markerdragstart','markermousedown','markermouseout','markermouseover','markermouseup','markerrightclick','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','rightchange','scrollablechange','show','tofront','topchange','typechange','updatedata','widthchange','zoomchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMapComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtMapComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','activeChildTabIndex','activeItem','alignSelf','allowFocusingDisabledChildren','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoSize','axisLock','bind','bodyCls','border','bottom','cardSwitchAnimation','centered','cls','constrainAlign','contentEl','control','controller','data','defaultFocus','defaultListenerScope','defaults','defaultType','disabled','displayed','docked','draggable','undefined','undefined','undefined','flex','floated','focusableContainer','focusCls','fullscreen','geo','height','hidden','hideAnimation','hideMode','hideOnMaskTap','html','id','inactiveChildTabIndex','innerCls','instanceCls','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','left','listeners','manageBorders','map','mapListeners','mapOptions','margin','markers','markerTemplate','masked','maxHeight','maxWidth','minHeight','minWidth','modal','modelValidation','name','nameable','nameHolder','padding','plugins','publishes','record','reference','referenceHolder','relative','renderTo','requiredScripts','resetFocusPosition','right','ripple','scrollable','session','shadow','shareableName','shim','showAnimation','stateful','statefulDefaults','stateId','style','tabIndex','toFrontOnShow','tooltip','top','touchAction','tpl','tplWriteMode','translatable','twoWayBindable','ui','useCurrentLocation','userCls','userSelectable','viewModel','weight','weighted','width','x','xtype','y','zIndex',],
            (new EWCMap()).events,
            ['ready','activate','activeItemchange','add','added','beforeactiveItemchange','beforebottomchange','beforecenteredchange','beforedisabledchange','beforedockedchange','beforeheightchange','beforehiddenchange','beforehide','beforeleftchange','beforemaxHeightchange','beforemaxWidthchange','beforeminHeightchange','beforeminWidthchange','beforeorientationchange','beforerightchange','beforescrollablechange','beforeshow','beforetofront','beforetopchange','beforewidthchange','blur','bottomchange','centerchange','centeredchange','deactivate','destroy','disabledchange','dockedchange','erased','floatingchange','focus','focusenter','focusleave','fullscreen','heightchange','hiddenchange','hide','initialize','leftchange','maprender','markerclick','markerdblclick','markerdrag','markerdragend','markerdragstart','markermousedown','markermouseout','markermouseover','markermouseup','markerrightclick','maxHeightchange','maxWidthchange','minHeightchange','minWidthchange','move','moved','orientationchange','painted','positionedchange','remove','removed','renderedchange','resize','rightchange','scrollablechange','show','tofront','topchange','typechange','updatedata','widthchange','zoomchange',],
            vc
        )
        this.xtype = 'map'
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

//var events = (new EWCMap()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
