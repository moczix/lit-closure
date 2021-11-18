

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-apka')
export class LitApp extends LitElement {

    constructor() {
        super();
        this._load();
    }

    private async _load() {
       const cc = await import('./dynamicos')
       const zz = new cc.Dynamicos();
       console.log('zz', zz.hehe())
    }

    public render() {
        return html`rororo34555`;
    }
}




/*
async function  main() {
    const cc = await import('./dynamicos')
    const zz = new cc.Dynamicos();
    console.log('zz', zz.hehe())
}
main();
*/