/**
 * @class Ext.menu.Menu
 * @extend Ext.Panel
 * @alias widget.menu
 *
 * A menu object. This is the container to which you may add {@link Ext.menu.Item menu items}.
 *
 * Menus may contain either {@link Ext.menu.Item menu items}, or general {@link Ext.Component Components}.
 * Menus may also contain docked items because it extends {@link Ext.Panel}.
 *
 * By default, non {@link Ext.menu.Item menu items} are indented so that they line up with the text of menu items. clearing
 * the icon column. To make a contained general {@link Ext.Component Component} left aligned configure the child
 * Component with `indent: false.
 *
 * By default, Menus are absolutely positioned, floated Components. By configuring a 
 * Menu with `{@link #cfg-floated}: false`, a Menu may be used as a child of a 
 * {@link Ext.Container Container}.
 *
 *     @example packages=[extangular]
 *       import { Component } from '@angular/core'
 *       declare var Ext: any;
 *
 *        @Component({
 *        selector: 'app-root',
 *        styles: [`
 *       `],
 *       template: `
 *                           <container #item>
 *                               <button #item text="Menu">
 *                                   <menu #item rel="menu" >
 *                                       <menuitem #item text="Mobile" name="ui-type" ></menuitem>
 *                                       <menuitem #item text="Desktop" name="ui-type"></menuitem>
 *                                   </menu>
 *                               </button>
 *                           </container>
 *       
 *       `
 *       })
 *       export class AppComponent {
 *       }
 *
 */

/**
 * @property {Boolean} [isMenu=true]
 * `true` in this class to identify an object as an instantiated Menu, or subclass thereof.
 */

/**
 * @cfg {Boolean} [allowOtherMenus=false]
 * True to allow multiple menus to be displayed at the same time.
 */

/**
 * @cfg {Boolean} [ignoreParentClicks=false]
 * True to ignore clicks on any item in this menu that is a parent item (displays a submenu)
 * so that the submenu is not dismissed when clicking the parent item.
 */

/**
 * @cfg {Number} [mouseLeaveDelay=50]
 * The delay in ms as to how long the framework should wait before firing a mouseleave event.
 * This allows submenus not to be collapsed while hovering other menu items.
 *
 * Defaults to 50
 */

/**
 * @cfg {Boolean} [plain=null]
 * Plain menus do not {@link #showSeparator show a vertical separator}
 * and do not indent non-MenuItem children to clear the icon indentation
 * of sibling MenuItems.
 *
 * {@link Ext.menu.Item MenuItem}s will *always* have space at their start for an icon. With the `plain` setting,
 * non {@link Ext.menu.Item MenuItem} child components will not be indented to line up.
 *
 * Basically, `plain:true` makes a Menu behave more like a regular {@link Ext.layout.container.HBox HBox layout}
 * {@link Ext.panel.Panel Panel} which just has the same background as a Menu.
 *
 * See also the {@link #showSeparator} config.
 * @accessor
 */

/**
 * @cfg [align='tl-bl?']
 * @inheritdoc Ext.Panel#cfg-align
 * @accessor
 */

/**
 * @cfg {Boolean} [showSeparator=false]
 * True to show a vertical icon separator line between the icons and the menu text.
 * @accessor
 */
