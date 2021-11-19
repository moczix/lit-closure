

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-something')
export class SomethingComponent extends LitElement {

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
        return html`somethingComponent`;
    }
}