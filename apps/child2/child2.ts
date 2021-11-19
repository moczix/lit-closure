

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@app/ui/components/something/something'
@customElement('lit-apka-child2')
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
        return html`rokorororor <br> <lit-something></lit-something>`;
    }
}