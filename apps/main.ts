

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import './child/child';
import './child2/child2';

@customElement('lit-apka')
export class LitApp extends LitElement {

    constructor() {
        super();
        this._load();
    }

    connectedCallback() {
        super.connectedCallback()
        console.dir(this)
      }

    private async _load() {
       const cc = await import('./dynamicos')
       const zz = new cc.Dynamicos();
       console.log('zz', zz.hehe())
    }

    public render() {
        return html`rororo345556 
            <br>
            <lit-apka-child></lit-apka-child>
            <br>
            <lit-apka-child2></lit-apka-child2>


        `;
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