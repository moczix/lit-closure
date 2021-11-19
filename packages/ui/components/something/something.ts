

import { InheritElement } from '@app/shared/injector/inherit-element';
import { SettingsService } from '@app/shared/services/settings.service';
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';

@customElement('lit-something')
export class SomethingComponent extends InheritElement {


    private _settingsService: SettingsService = this.get(SettingsService);

    constructor() {
        super();
    }

    public render() {
        return html`somethingComponent22781`;
    }
}