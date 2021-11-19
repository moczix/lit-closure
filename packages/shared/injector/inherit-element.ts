import { LitElement } from "lit";
import { Injected } from "./injected";
import { Injector } from './injector';

export interface InheritanceInit {
  injectedInit: () => void;
}



export abstract class InheritElement extends LitElement  {

  protected _injector: Injector = new Injector();
  constructor(){
    super();
    this['inheritElementMarker'] = '#inheritElementMarker'; //closure compiler now cannot strip this
  }

  public inheritanceInit(): void {
    console.log("initialized", this)
  }

  public connectedCallback(): void {
    super.connectedCallback()
    this._injector.onRegister(this, () => this.inheritanceInit())
  }

  public firstUpdated() {
    this._tryRegister();
  }

  public updated(): void {
    this._tryRegister();
  }

  private _tryRegister(): void {
    if (this.shadowRoot?.children) {
      const inheritedElement: LitElement[] = [];
      for (const child of this.shadowRoot.children) {
        if (child['inheritElementMarker'] === '#inheritElementMarker') {
          inheritedElement.push(child as LitElement)
        }
      }
      this._injector.registerChildren(this, inheritedElement);
    }
  }

  public get<T extends Injected>(diClass: T): any {
    console.log('diClass', diClass);
    return undefined;
  }
}

export abstract class RootInheritElement extends InheritElement {

  public connectedCallback(): void {
    super.connectedCallback()
    this._injector.registerRoot(this);
    this.inheritanceInit();
  }
}