import { Component, Prop, State, Watch, h } from '@stencil/core';
import { formatAmount, fetchInstallmentPlans, fetchSingleInstallmentPlan } from '../../utils/utils';
import { applyAssetsUrl, sendFeedback } from '../../utils/utils';

@Component({
  tag: 'easycredit-widget',
  styleUrl: 'easycredit-widget.scss',
  shadow: true,
})
export class EasycreditWidget {
  /**
   * Webshop Id
   */
  @Prop() webshopId: string

  /**
   * Financing Amount
   */
  @Prop({ mutable: true }) amount: number

  /**
   * Display Type (e.g. clean -> without shadow)
   */
  @Prop() displayType: string

  /**
   * Show if out of range
   */
  @Prop({ mutable: true }) extended: boolean = true

  /**
   * Disable Flexprice in calculation
   */
  @Prop({ mutable: true }) disableFlexprice: boolean = false

  modal!: HTMLEasycreditModalElement;
  widgetElement!: HTMLElement;

  @State() installments
  @State() isValid: boolean = false
  @State() widgetLayout: string = ''

  @Watch('amount')
  onAmountChanged(amount: number, oldAmount: number) {
    if (amount !== oldAmount) {

      const fetchPlans = (this.disableFlexprice) ?
        fetchSingleInstallmentPlan.bind(this, this.webshopId, this.amount, { 'withoutFlexprice': true }) :
        fetchInstallmentPlans.bind(this, this.webshopId, this.amount)

      fetchPlans().then((data) => {
        this.isValid = true
        this.installments = data
      }).catch(e => {
        console.error(e)
      })
    }
  }

  connectedCallback() {
    applyAssetsUrl(EasycreditWidget)
  }
  
  componentWillLoad() {
    this.onAmountChanged(this.amount, 0);
  }

  componentDidRender() {
    this.setWidgetLayout();
  }

  getInstallmentPlan() {
    if (!this.installments || !this.installments.installmentPlans) {
      return null
    }
    return this.installments.installmentPlans
      .find(() => true)
  }

  getMinimumInstallment() {
    if (!this.getInstallmentPlan().plans) {
      return
    }
    return this.getInstallmentPlan().plans
      .sort((a,b) => b.numberOfInstallments - a.numberOfInstallments)
      .find(() => true)
  }

  clickHandler(e: MouseEvent): void {
    e.preventDefault();
  }

  private getLogo(): string {
    if (this.displayType === 'minimal') {
      return <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z" fill="#0066B3"/><path d="M16.0182 8.485C15.6336 8.35415 14.9276 8.20565 13.7441 8.20565C12.6663 8.19999 11.6242 8.5923 10.8178 9.3074C10.7305 9.38307 10.6303 9.44247 10.5221 9.48275C9.7788 9.73409 8.99616 9.84872 8.21205 9.82108H8.18913C7.4093 9.82108 6.91993 9.69022 6.63403 9.45608C6.37237 9.2395 6.26438 8.91762 6.28403 8.46357H11.4354L11.4517 8.38897C11.5575 7.94037 11.6249 7.48357 11.6532 7.02353C11.6532 5.96297 11.2986 5.13732 10.6843 4.57792C10.0699 4.01852 9.21033 3.73262 8.21525 3.73262C6.53387 3.73262 5.39488 4.41173 4.67858 5.31725C4.03623 6.15066 3.68382 7.17114 3.675 8.22333C3.66511 8.68323 3.74964 9.14027 3.92336 9.5662C4.09708 9.99214 4.3563 10.3779 4.685 10.6997C5.35098 11.337 6.32843 11.7282 7.58975 11.7282C8.19472 11.7296 8.79923 11.6947 9.4 11.6235C9.2942 12.0181 9.24011 12.4248 9.2391 12.8333C9.2391 13.8415 9.57933 14.6986 10.2204 15.3117C10.8747 15.9371 11.8128 16.2675 12.929 16.2675C13.4788 16.2622 14.0261 16.193 14.56 16.0614L14.7785 16.0051L15.2672 13.6498L14.613 13.9533C14.168 14.1497 13.686 14.2479 13.1998 14.2412C12.8226 14.264 12.4502 14.1476 12.1531 13.9141C11.8993 13.687 11.7704 13.3409 11.7704 12.8842C11.7813 12.2515 11.9824 11.6367 12.3474 11.1197C12.5324 10.8472 12.7812 10.6239 13.0722 10.4695C13.3632 10.3151 13.6875 10.2342 14.017 10.2339C14.5264 10.2198 15.0348 10.2894 15.5217 10.44L15.907 10.5708L16.325 8.58778L16.0182 8.485ZM6.47697 6.9253C6.58858 6.54542 6.82291 6.21322 7.14332 5.98062C7.46373 5.74802 7.85218 5.62813 8.24795 5.63968C8.41942 5.62604 8.5916 5.65525 8.74897 5.72469C8.90634 5.79414 9.04398 5.90162 9.14948 6.03748C9.31943 6.30205 9.4075 6.61089 9.40267 6.9253H6.47697Z" fill="white"/></svg>
    }
    return <div class="ec-widget__logo"></div>
  }

  private getLinkText(): string {
    return 'Mehr Infos'
  }

  private getInstallmentText(): string {
    if (!this.installments) {
      return
    }
    if (this.amount < this.installments.minFinancingAmount) {
      if (!this.extended) {
        return
      }
      return <span>
          Finanzieren ab&nbsp;
          <em>{this.installments.minFinancingAmount.toLocaleString('de-DE', {maximumFractionDigits: 0})} &euro; Bestellwert</em>
      </span>
    }
    if (this.amount > this.installments.maxFinancingAmount) {
      if (!this.extended) {
        return
      }
      return <span>
        Finanzieren bis&nbsp;
        <em>{this.installments.maxFinancingAmount.toLocaleString('de-DE', {maximumFractionDigits: 0})} &euro; Bestellwert</em>
      </span>
    }

    if (this.getMinimumInstallment()) {
      return <span>
        Finanzieren ab&nbsp;
        <em>{formatAmount(this.getMinimumInstallment().installment)} &euro; / Monat</em>
      </span>
    }
  }

  openModal (): void {
    sendFeedback(this, { component: 'EasycreditWidget', action: 'openModal' }); 
    this.modal.open()
  }

  setWidgetLayout(): void {
    if ( !this.widgetElement ) {
      return;
    }
    this.widgetLayout = this.widgetElement.getBoundingClientRect().width < 251 ? 'small' : '';
  }

  getModalFragment () {
    return ([
      <easycredit-modal ref={(el) => this.modal = el as HTMLEasycreditModalElement} size="payment">
          <iframe data-src={this.getInstallmentPlan()?.url} slot="content"></iframe>
      </easycredit-modal>
    ])
  }

  render() { 
    return ([
      this.isValid &&
      this.getInstallmentText() &&
      <div class="ec-widget-container">
        <div class={{
          'ec-widget': true,
          ['layout-' + this.widgetLayout]: this.widgetLayout !== '',
          'clean': this.displayType === 'clean',
          'minimal': this.displayType === 'minimal'
        }} ref={(el) => this.widgetElement = el as HTMLElement} onClick={this.clickHandler}>
          {this.getLogo()}

          <span>
            {this.getInstallmentText()}
            <span class="ec-widget__brand-name"> mit easyCredit-Ratenkauf.</span>
            <a class="ec-widget__link" onClick={() => this.openModal() }>{this.getLinkText()}</a>
          </span>
        </div>

        { this.getModalFragment() }
      </div>
    ])
  }
}
