import { Component, Host, Listen, h, Element, Method } from '@stencil/core';
import { sendFeedback } from '../../utils/utils';

@Component({
  tag: 'easycredit-accordion',
  shadow: true
})
export class EasycreditAccordion {

  @Element() element:HTMLElement;

  @Listen('openEvent')
  openEventHandler(event: CustomEvent) {
    const children = this.element.querySelectorAll('easycredit-accordion-item');

    for (let i = 0; i < children.length; i++) {
      if (event.detail.index != i) {
        children[i].closeItem();
      }
    }
    sendFeedback(this, { component: 'EasycreditAccordion', action: 'open', item: this.getAccordionItem(event.detail.index).querySelector('h3').textContent })
  }

  /**
   * Open an accordion item
   * @param index 
   */
  @Method()
  async open(index:number) {
    this.getAccordionItem(index).openItem();
  }

  /**
   * close an accordion item
   * @param index
   */
  @Method()
  async close(index:number) {
    this.getAccordionItem(index).closeItem();
  }

  getAccordionItem(index:number): HTMLEasycreditAccordionItemElement {
    const children = this.element.querySelectorAll('easycredit-accordion-item');

    if (index >= 0 && index < children.length) {
      return children[index];
    } else {
      throw new Error("index out of bounds");
    }
  }

  render() {
    return (
      <Host>
        <slot></slot>       
      </Host>
    );
  }

}
