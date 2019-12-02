//import EWCPivotgridgroupcell from '../dist/ext-pivotgridgroupcell.component.js';
//inputs: (new EWCPivotgridgroupcell()).properties,
import EWCPivotgridgroupcell from '@sencha/ext-web-components-modern/dist/ext-pivotgridgroupcell.component.js';
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
    selector: 'ExtPivotgridgroupcell',
    inputs: ['header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','align','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','bodyCls','bodyStyle','border','cellCls','cls','column','constrainAlign','controller','defaultListenerScope','defaultToolWeights','disabled','encodeHtml','undefined','flex','floated','focusCls','formatter','height','hidden','hideMode','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','rawValue','record','reference','relative','renderer','renderTo','ripple','scope','selectable','session','shadow','shareableName','shim','style','toFrontOnShow','toolDefaults','tools','touchAction','tpl','translatable','twoWayBindable','ui','userCls','value','viewModel','width','x','y','zeroValue',],
    outputs: ['ready','beforedisabledchange','beforeheightchange','beforehiddenchange','beforetofront','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','tofront','widthchange',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotgridgroupcellComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtPivotgridgroupcellComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','align','alignSelf','alwaysOnTop','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','bind','bodyCls','bodyStyle','border','cellCls','cls','column','constrainAlign','controller','defaultListenerScope','defaultToolWeights','disabled','encodeHtml','undefined','flex','floated','focusCls','formatter','height','hidden','hideMode','id','instanceCls','itemId','keyMap','keyMapEnabled','keyMapTarget','listeners','margin','name','nameable','plugins','publishes','rawValue','record','reference','relative','renderer','renderTo','ripple','scope','selectable','session','shadow','shareableName','shim','style','toFrontOnShow','toolDefaults','tools','touchAction','tpl','translatable','twoWayBindable','ui','userCls','value','viewModel','width','x','y','zeroValue',],
            (new EWCPivotgridgroupcell()).events,
            ['ready','beforedisabledchange','beforeheightchange','beforehiddenchange','beforetofront','beforewidthchange','blur','disabledchange','focus','focusenter','focusleave','heightchange','hiddenchange','tofront','widthchange',],
            vc
        )
        this.xtype = 'pivotgridgroupcell'
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

//var events = (new EWCPivotgridgroupcell()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
