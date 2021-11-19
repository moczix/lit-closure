

import { InheritElement } from '@app/shared/injector/inherit-element';
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-apka-child')
export class LitApkaChild extends InheritElement {

    constructor() {
        super();
    }

    public render() {
        return html`heheheszunie`;
    }
}