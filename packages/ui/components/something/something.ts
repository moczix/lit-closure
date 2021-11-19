

import { InheritanceInit, InheritElement } from '@app/shared/injector/inherit-element';
import { SettingsService } from '@app/shared/services/settings.service';
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-something')
export class SomethingComponent extends InheritElement implements InheritanceInit {

    constructor() {
        super();
    }

    public inheritanceInit(): void {
      console.log('lit-something initialized');
    }

    public render() {
        return html`somethingComponent22781`;
    }
}