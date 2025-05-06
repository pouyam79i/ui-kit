import { fixture, html } from '@open-wc/testing';
import { describe, it, expect } from 'vitest';
import { UIButton } from './button';

describe('UIButton', () => {
  it('renders label', async () => {
    const el = await fixture<UIButton>(html`<ui-button label="test"></ui-button>`);
    console.log(el.shadowRoot);
    await el.updateComplete;
    await new Promise(requestAnimationFrame);
    const shadowContent = el?.shadowRoot?.textContent;
    expect(shadowContent).toContain('test');
  });
});
