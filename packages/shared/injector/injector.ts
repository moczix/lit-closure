import { LitElement } from "lit";



export class Injector {
  private static instance: Injector;

  private _root!: LitElement;
  private _graphChildToParent: WeakMap<LitElement, LitElement> = new WeakMap<LitElement, LitElement>();
  private _registrationCallbacks: WeakMap<LitElement, () => void> = new WeakMap<LitElement, () => void>()

  constructor() {
      if (Injector.instance) {
          return Injector.instance;
      }
      Injector.instance = this;
  }

  public registerRoot(host:LitElement): void {
    this._root = host;
  }

  public registerChildren(host: LitElement, children: LitElement[]) {
    for (const child of children) {
      if (!this._graphChildToParent.has(child)) {
        this._graphChildToParent.set(child, host);
        this._registrationCallbacks.get(child)!();
        this._registrationCallbacks.delete(child);
      }
    }
  }

  public onRegister(element: LitElement, cb: () => void): void {
    this._registrationCallbacks.set(element, cb);
  }
}