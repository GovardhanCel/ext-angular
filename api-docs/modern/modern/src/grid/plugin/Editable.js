/**
 * @class Ext.grid.plugin.Editable
 * @extend Ext.plugin.Abstract
 * @alias plugin.grideditable
 *
 * The Editable plugin adds row-level editing to any Grid. Editing begins by double-tapping a row.  
 * This can be set to any event, which we'll discuss below. The editor consists of a small 
 * positioned dialog that be shown on the right side of your viewport.
 *
 * There is a button to save or cancel all changes for the edit in the toolbar, and the
 * row is deletable by default.
 * 
 * A Column is included in the editor dialog if it has a editable prop set to true.
 * By default a `TextField` is used as the editor.  You can substitute a different editor by 
 * adding a subclass of `Ext.field.Field` as a child of the `Column`.
 *
 *          @example packages=[extangular]
 *            import { Component } from '@angular/core'
 *            declare var Ext: any;
 *
 *            Ext.require('Ext.grid.plugin.Editable');
 *            @Component({
 *                selector: 'app-root-1',
 *                styles: [`
 *                        `],
 *                template: `
 *                <container #item>
 *                    <grid #item
 *                        [height]="'275px'"
 *                        [store]="this.store"
 *                        [plugins]="['grideditable']"
 *                    >
 *                        <column #item 
 *                            text="First Name"
 *                            dataIndex="fname"
 *                            flex="1"
 *                            editable="true"
 *                        ></column>
 *                        <column #item
 *                            text="Last Name"
 *                            dataIndex="lname"
 *                            flex="1"
 *                            editable="true"
 *                        ></column>
 *                        <column #item
 *                            text="Talent"
 *                            dataIndex="talent"
 *                            flex="1"
 *                            editable="true"
 *                        >
 *                            <selectfield #item
 *                                [options]="[
 *                                    { text: 'All', value: 'All' },
 *                                    { text: 'Archery', value: 'Archery' },
 *                                    { text: 'Speedster', value: 'Speedster' },
 *                                    { text: 'Weapons', value: 'Weapons' },
 *                                    { text: 'Willpower', value: 'Willpower' }
 *                                ]"
 *                            ></selectfield>
 *                        </column>
 *                    </grid>
 *                </container>
 *                `
 *            })
 *            export class AppComponent {
 *                store = new Ext.data.Store({
 *                    data: [
 *                        { 'fname': 'Barry',  'lname': 'Allen', 'talent': 'Speedster'},
 *                        { 'fname': 'Oliver', 'lname': 'Queen', 'talent': 'Archery'},
 *                        { 'fname': 'Kara',   'lname': 'Zor-El', 'talent': 'All'},
 *                        { 'fname': 'Helena', 'lname': 'Bertinelli', 'talent': 'Weapons Expert'},
 *                        { 'fname': 'Hal',    'lname': 'Jordan', 'talent': 'Willpower'  }
 *                    ]
 *                });
 *            }
 *
 */

/**
 * @cfg {String} [triggerEvent='doubletap']
 * The event used to trigger the showing of the editor form.
 * @accessor
 */

/**
 * @cfg {Object} [formConfig=null]
 * By changing the formConfig you can hardcode the form that gets created when editing a row.
 * Note that the fields are not set on this form, so you will have to define them yourself in this config.
 * If you want to alter certain form configurations, but still have the default editor fields applied, use
 * the defaultFormConfig instead.
 * @accessor
 */

/**
 * @cfg {Object} defaultFormConfig
 * Configures the default form appended to the editable panel.
 * @accessor
 */

/**
 * @cfg {Object} toolbarConfig
 * Configures the toolbar appended to the editable panel.
 * @accessor
 */

/**
 * @cfg {Boolean} [enableDeleteButton=true]
 * Creates a delete button, which allows the user to delete the selected row.
 * @accessor
 */
