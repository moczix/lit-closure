

import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@app/ui/components/something/something'
import { InheritElement } from '@app/shared/injector/inherit-element';
@customElement('lit-apka-child2')
export class LitApkaChild extends InheritElement {

    constructor() {
        super();
    }


    public render() {
        return html`rokorororor <br> <lit-something></lit-something>`;
    }
}