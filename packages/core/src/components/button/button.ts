import { UIButton } from './button.component';

customElements.define('ui-button', UIButton);

export * from './button.component';
export default UIButton;

declare global {
  interface HTMLElementTagNameMap {
    'ui-button': UIButton;
  }
}
