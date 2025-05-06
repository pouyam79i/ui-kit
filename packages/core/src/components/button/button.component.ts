import { CSSResultGroup, LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import styles from './button.styles';

// TODO: this is a sample button created with lit - remove it and write your Button components
@customElement('ui-button')
export class UIButton extends LitElement {
  static styles: CSSResultGroup = [styles];

  @property() label = 'Click me';

  render() {
    return html`<button>${this.label}</button>`;
  }
}
