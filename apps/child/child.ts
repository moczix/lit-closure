

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-apka-child')
export class LitApkaChild extends LitElement {

    constructor() {
        super();
    }

    createRenderRoot() {
      return this;
    }

    connectedCallback() {
      super.connectedCallback()
      console.dir(this)
    }


    public render() {
        return html`heheheszunie`;
    }
}