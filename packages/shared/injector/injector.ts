import { LitElement } from "lit";



export class Injector {
  private static instance: Injector;

  private _graphChildToParent: WeakMap<LitElement, LitElement> = new WeakMap<LitElement, LitElement>();

  constructor() {
      if (Injector.instance) {
          return Injector.instance;
      }
      Injector.instance = this;
  }

  public registerChildren(host: LitElement, children: LitElement[]) {
    console.group('register children');
    for (const child of children) {
      if (!this._graphChildToParent.has(child)) {
        this._graphChildToParent.set(child, host);
      }
    }
    console.log('host', host)
    console.log('childre', children);
    console.log('graph', this._graphChildToParent)
    console.groupEnd();
  }
}