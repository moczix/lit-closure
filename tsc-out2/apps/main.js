var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * @fileoverview added by tsickle
 * Generated from: /home/moczniak/Desktop/lit-closure/lit-apka/apps/main.ts
 * @suppress {checkTypes,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
let LitApp = class LitApp extends LitElement {
    constructor() {
        super();
        this._load();
    }
    /**
     * @private
     * @return {?}
     */
    async _load() {
        //const cc = await import('./dynamicos')
        //const zz = new cc.Dynamicos();
        //console.log('zz', zz.hehe())
    }
    /**
     * @return {?}
     */
    render() {
        return html `hehehe`;
    }
};
LitApp = __decorate([
    customElement('lit-apka')
], LitApp);
export { LitApp };
