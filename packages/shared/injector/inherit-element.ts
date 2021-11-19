import { LitElement } from "lit";
import { InheritElementMarked } from "./inherit-element-marked";
import { Injected } from "./injected";
import { Injector } from './injector';

export abstract class InheritElement extends LitElement implements InheritElementMarked {

  private _injector: Injector = new Injector();
  public inheritElementMarker = '#inheritElementMarker';

  public connectedCallback(): void {
    super.connectedCallback()
    console.group('InheritElement')
    console.dir(this);
    console.log(typeof this)
    console.groupEnd();
  }

  public firstUpdated() {
    console.group('InheritElement FIRST')
    console.dir(this);
    console.log('FIRST');
    console.log('shadowRootChildren', this.shadowRoot?.children.length);
    console.groupEnd();
  }

  public updated(): void {
    console.group('InheritElement updated')
    console.dir(this);
    console.log('updated');
    console.log('shadowRootChildren', this.shadowRoot?.children);
    if (this.shadowRoot?.children) {
      const inheritedElement: LitElement[] = [];
      for (const child of this.shadowRoot.children) {
        if (child instanceof LitElement && child.hasOwnProperty('inheritElementMarker')) {
          inheritedElement.push(child)
        }
      }
      this._injector.registerChildren(this, inheritedElement);
    }
    console.groupEnd();
  }

  public get<T extends Injected>(diClass: T): any {
    console.log('diClass', diClass);
    return undefined;
  }
}