import "@app/ui/components/something/something";
import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("lit-apka")
export class LitApp extends LitElement {
  constructor() {
    super();
  }

  public render() {
    return html`rororo345556<br />
      <lit-something></lit-something>`;
  }
}
