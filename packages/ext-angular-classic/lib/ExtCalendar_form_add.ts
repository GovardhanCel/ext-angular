//import EWCCalendar_form_add from '../dist/ext-calendar-form-add.component.js';
//inputs: (new EWCCalendar_form_add()).properties,
//import EWCCalendar_form_add from '@sencha/ext-web-components-classic/dist/ext-calendar-form-add.component.js';
import { EWCCalendar_form_add } from '@sencha/ext-web-components-classic';
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
    selector: 'ExtCalendar_form_add',
    inputs: ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignOnScroll','alignTarget','allDayField','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','animateTarget','animCollapse','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','buttonAlign','buttons','calendarField','cancelButton','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','columnWidth','componentCls','componentLayout','constrain','constrainHeader','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButton','defaultButtonTarget','defaultDockWeights','defaultEndTime','defaultFocus','defaultListenerScope','defaults','defaultStartTime','defaultType','descriptionField','detachOnRemove','disabled','disabledCls','dock','dockedItems','draggable','dropButton','endDateField','endTimeField','event','expandOnShow','expandToolText','fbar','fixed','flex','floatable','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','frameHeader','fromContainer','ghost','glyph','header','headerOverCls','headerPosition','height','hidden','hideCollapseTool','hideMode','hideShadowOnDeactivate','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','liquidLayout','listeners','liveDrag','loader','maintainTitlePosition','manageHeight','margin','maskClickAction','maskDefaults','maskElement','maxHeight','maximizable','maximized','maxWidth','minButtonWidth','minHeight','minimizable','minWidth','modal','modelValidation','monitorResize','nameable','nameHolder','onEsc','overCls','undefined','undefined','overlapHeader','padding','placeholder','placeholderCollapseHideMode','plain','plugins','undefined','publishes','rbar','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveButton','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','shrinkWrapDock','simpleDrag','startDateField','startTimeField','stateEvents','stateful','stateId','style','suspendLayout','tabGuard','tabIndex','tbar','title','titleAlign','titleCollapse','titleField','titlePosition','titleRotation','toContainer','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','view','viewModel','weight','width','x','xtype','y',],
    outputs: ['ready','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforeclose','beforecollapse','beforedeactivate','beforedestroy','beforeexpand','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','cancel','childmove','close','collapse','deactivate','destroy','disable','dockedadd','dockedremove','drop','enable','expand','float','focus','focusenter','focusleave','glyphchange','hide','iconalignchange','iconchange','iconclschange','maskclick','maximize','minimize','move','remove','removed','render','resize','restore','save','show','staterestore','statesave','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat',],
    providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_form_addComponent)}],
    template: '<ng-content></ng-content>'
})
export class ExtCalendar_form_addComponent extends EngBase {
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase,
        vc: ViewContainerRef
        ) {
        super(
            eRef,
            hostComponent,
            ['aMe', 'header', 'renderer', 'label','fitToParent','tab','config','platformConfig','extname','viewport','align','plugins','responsiveConfig','responsiveFormulas','actions','activeChildTabIndex','activeCounter','activeItem','alignOnScroll','alignTarget','allDayField','allowFocusingDisabledChildren','alwaysOnTop','anchor','anchorSize','animateShadow','animateTarget','animCollapse','ariaAttributes','ariaDescribedBy','ariaLabel','ariaLabelledBy','autoDestroy','autoEl','autoRender','undefined','autoShow','baseCls','bbar','bind','bodyBorder','bodyCls','bodyPadding','bodyStyle','border','bubbleEvents','buttonAlign','buttons','calendarField','cancelButton','childEls','closable','closeAction','closeToolText','cls','collapsed','collapsedCls','collapseDirection','collapseFirst','collapseMode','collapseToolText','collapsible','columnWidth','componentCls','componentLayout','constrain','constrainHeader','constraintInsets','constrainTo','contentEl','controller','data','defaultAlign','defaultButton','defaultButtonTarget','defaultDockWeights','defaultEndTime','defaultFocus','defaultListenerScope','defaults','defaultStartTime','defaultType','descriptionField','detachOnRemove','disabled','disabledCls','dock','dockedItems','draggable','dropButton','endDateField','endTimeField','event','expandOnShow','expandToolText','fbar','fixed','flex','floatable','floating','focusableContainer','focusCls','focusOnToFront','formBind','frame','frameHeader','fromContainer','ghost','glyph','header','headerOverCls','headerPosition','height','hidden','hideCollapseTool','hideMode','hideShadowOnDeactivate','html','icon','iconAlign','iconCls','id','inactiveChildTabIndex','itemId','items','keyMap','keyMapEnabled','keyMapTarget','layout','lbar','liquidLayout','listeners','liveDrag','loader','maintainTitlePosition','manageHeight','margin','maskClickAction','maskDefaults','maskElement','maxHeight','maximizable','maximized','maxWidth','minButtonWidth','minHeight','minimizable','minWidth','modal','modelValidation','monitorResize','nameable','nameHolder','onEsc','overCls','undefined','undefined','overlapHeader','padding','placeholder','placeholderCollapseHideMode','plain','plugins','undefined','publishes','rbar','reference','referenceHolder','region','renderConfig','renderData','undefined','renderTo','renderTpl','resetFocusPosition','resizable','resizeHandles','saveButton','saveDelay','scrollable','session','shadow','shadowOffset','shareableName','shim','shrinkWrap','shrinkWrapDock','simpleDrag','startDateField','startTimeField','stateEvents','stateful','stateId','style','suspendLayout','tabGuard','tabIndex','tbar','title','titleAlign','titleCollapse','titleField','titlePosition','titleRotation','toContainer','toFrontOnShow','tools','touchAction','tpl','tplWriteMode','twoWayBindable','ui','uiCls','userCls','view','viewModel','weight','width','x','xtype','y',],
            (new EWCCalendar_form_add()).events,
            ['ready','activate','add','added','afterlayout','afterlayoutanimation','afterrender','beforeactivate','beforeadd','beforeclose','beforecollapse','beforedeactivate','beforedestroy','beforeexpand','beforehide','beforeremove','beforerender','beforeshow','beforestaterestore','beforestatesave','blur','boxready','cancel','childmove','close','collapse','deactivate','destroy','disable','dockedadd','dockedremove','drop','enable','expand','float','focus','focusenter','focusleave','glyphchange','hide','iconalignchange','iconchange','iconclschange','maskclick','maximize','minimize','move','remove','removed','render','resize','restore','save','show','staterestore','statesave','titlealignchange','titlechange','titlepositionchange','titlerotationchange','unfloat',],
            vc
        )
        this.xtype = 'calendar-form-add'
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
