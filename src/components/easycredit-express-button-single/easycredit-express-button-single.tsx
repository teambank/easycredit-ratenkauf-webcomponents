import { Component, Prop, State, Element, h, EventEmitter, Event } from '@stencil/core';
import { applyAssetsUrl } from '../../utils/utils';
import { METHODS } from '../../types';
import { validateAmount } from '../../utils/validation';

@Component({
  tag: 'easycredit-express-button-single',
  styleUrl: 'easycredit-express-button-single.scss',
  shadow: true,
})

export class EasycreditExpressButtonSingle {

  @Prop() webshopId: string
  @Prop() amount: number
  @Prop() bgBlue: boolean = false
  @Prop() fullWidth: boolean = false
  @Prop() paymentType: METHODS = METHODS.INSTALLMENT

  buttonTextDefault: string = 'Jetzt direkt in Raten zahlen'
  buttonTextDefaultShort: string = 'Direkt in Raten zahlen'

  @State() buttonOpacity: string = '0'
  @State() buttonText: string = this.buttonTextDefault
  @State() buttonTextShort: string = this.buttonTextDefaultShort

  @Element() el: HTMLElement;

  connectedCallback() {
    applyAssetsUrl(EasycreditExpressButtonSingle)
  }

  async componentWillLoad () {    
    if (this.paymentType === METHODS.BILL) {
      this.bgBlue = true
    }
  }

  @Event() buttonClicked: EventEmitter<string>;
  clickButtonHandler(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.buttonClicked.emit(this.paymentType)
  }

  componentDidLoad () {
    this.renderButton()
  }

  async renderButton () {
    await this.setButtonText()
    this.buttonOpacity = '1'
  }

  private getLogo(): string {
    if (this.paymentType === METHODS.BILL) {
      return <svg class="bill" width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 1.75C2.80964 1.75 2.25 2.30964 2.25 3V16.5C2.25 17.1904 2.80964 17.75 3.5 17.75H8.25V14C8.25 13.0335 9.0335 12.25 10 12.25H13.75V3C13.75 2.30964 13.1904 1.75 12.5 1.75H3.5ZM12.6893 13.75H10C9.86193 13.75 9.75 13.8619 9.75 14V16.6893L12.6893 13.75ZM0.75 3C0.75 1.48122 1.98122 0.25 3.5 0.25H12.5C14.0188 0.25 15.25 1.48122 15.25 3V13C15.25 13.1989 15.171 13.3897 15.0303 13.5303L9.53033 19.0303C9.38968 19.171 9.19891 19.25 9 19.25H3.5C1.98122 19.25 0.75 18.0188 0.75 16.5V3ZM4.75 5C4.75 4.58579 5.08579 4.25 5.5 4.25H10.5C10.9142 4.25 11.25 4.58579 11.25 5C11.25 5.41421 10.9142 5.75 10.5 5.75H5.5C5.08579 5.75 4.75 5.41421 4.75 5ZM4.75 8C4.75 7.58579 5.08579 7.25 5.5 7.25H9C9.41421 7.25 9.75 7.58579 9.75 8C9.75 8.41421 9.41421 8.75 9 8.75H5.5C5.08579 8.75 4.75 8.41421 4.75 8Z" fill="white"/></svg>
    } else {
      return <svg class="installment" width="150" height="72" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.3501 14.674C6.59252 13.6232 7.19056 12.6884 8.043 12.0279C8.89545 11.3673 9.94994 11.0216 11.028 11.0492C13.3458 11.0492 14.1237 12.7055 14.1237 14.674H6.3501ZM16.6161 20.495C14.8139 21.3086 12.8624 21.7392 10.8851 21.7597C7.02215 21.7597 6.03789 20.2145 5.96381 18.246H18.9498C19.1979 17.1178 19.3501 15.9707 19.4049 14.8169C19.4049 9.26586 15.7853 6.83695 10.9698 6.83695C2.80992 6.83166 0 13.3723 0 17.6268C0 22.2254 3.30205 25.9931 9.41932 25.9931C11.5889 25.9507 13.7421 25.607 15.817 24.9718L16.6161 20.495Z" fill="white"/><path d="M55.4628 20.7172C57.083 21.4186 58.8303 21.7789 60.5958 21.7756C61.6118 21.7756 64.1466 21.675 64.1466 20.188C64.1466 17.5845 56.5847 18.9233 56.5847 12.8748C56.5847 8.58851 61.5801 6.8634 65.8293 6.8634C67.8995 6.92185 69.9498 7.28378 71.9149 7.93763L70.576 12.0864C68.9779 11.4018 67.2557 11.0541 65.5171 11.0651C64.1095 11.0651 62.5643 11.3826 62.5643 12.6526C62.5643 14.6952 70.4702 14.5523 70.4702 19.1561C70.4702 23.76 66.639 25.9296 61.9134 25.9931C59.3176 26.0222 56.7296 25.7019 54.2192 25.0406L55.4628 20.7172Z" fill="white"/><path d="M74.6665 36.5131L73.9627 40.2755H74.0368C75.0528 38.1324 77.0954 36.0898 79.699 36.0898C80.6022 36.0734 81.5002 36.2297 82.3449 36.5501L80.9002 42.1382C80.0906 41.5085 79.1804 41.3656 77.9792 41.3656C75.3333 41.3656 73.7458 43.6834 73.2695 46.3928L71.4756 54.8279H65.1255L69.0308 36.5131H74.6665Z" fill="white"/><path d="M87.9065 43.9215C88.1529 42.8705 88.7556 41.9372 89.6123 41.2803C90.4689 40.6233 91.5266 40.2833 92.6056 40.3179C94.9287 40.3179 95.7013 41.9689 95.7013 43.9374L87.9065 43.9215ZM98.1672 49.7425C96.3659 50.5533 94.4168 50.9839 92.4415 51.0072C88.5733 51.0072 87.589 49.462 87.5202 47.4935H100.49C100.739 46.3584 100.892 45.2041 100.945 44.0433C100.945 38.4922 97.3258 36.0633 92.5103 36.0633C84.3557 36.0633 81.5405 42.6039 81.5405 46.8585C81.5405 51.4623 84.8479 55.2247 90.9651 55.2247C93.1352 55.1949 95.2904 54.8618 97.3682 54.2352L98.1672 49.7425Z" fill="white"/><path d="M111.91 50.4039C109.904 50.4039 108.883 48.8958 108.883 46.6415C108.883 43.7945 110.677 40.9476 113.646 40.9476C115.762 40.9476 116.667 42.8473 116.667 44.6518C116.688 47.0966 114.894 50.4039 111.91 50.4039ZM115.387 54.8331H121.207C121.282 54.0976 121.387 53.1821 121.594 52.092L126.473 28.4696H120.276L118.059 39.4712H118.006C117.053 37.5027 114.831 36.095 111.656 36.095C105.401 36.095 102.379 41.6884 102.379 47.6999C102.379 51.8116 105.258 55.2565 109.195 55.2565C112.714 55.2565 114.222 53.9547 115.842 51.9174H115.889L115.387 54.8331Z" fill="white"/><path d="M127.637 36.5131H134.035L130.241 54.8278H123.827L127.637 36.5131ZM129.256 28.8877H135.654L134.67 33.5285H128.272L129.256 28.8877Z" fill="white"/><path d="M135.728 36.5131H139.347L140.231 32.5813L146.909 30.7874L145.645 36.5131H150L149.227 40.9476H144.623L143.533 46.0382C143.258 47.0778 143.081 48.1408 143.004 49.2133C142.987 49.4886 143.03 49.7643 143.129 50.0218C143.228 50.2793 143.38 50.5127 143.577 50.7062C143.773 50.8998 144.009 51.049 144.268 51.1438C144.527 51.2386 144.803 51.2768 145.078 51.2559C145.785 51.1974 146.475 51.0184 147.121 50.7267L146.417 54.9125C145.116 55.1279 143.799 55.2447 142.48 55.2618C139.247 55.2618 136.659 53.6742 136.659 49.8483C136.707 48.5773 136.895 47.3155 137.22 46.0859L138.31 40.9529H134.939L135.728 36.5131Z" fill="white"/><path d="M87.3141 7.25499L81.0962 18.8175H81.0275L79.3764 7.25499H72.9417L76.9846 25.501L76.3072 26.6175C75.3706 28.3426 74.4075 29.6391 72.603 29.6391C71.9016 29.6357 71.2039 29.5378 70.5286 29.3481L69.5391 34.0471C70.7821 34.3528 72.0585 34.5021 73.3385 34.4916C77.3814 34.4916 79.4611 32.3432 81.3238 29.1099L82.0223 27.9934L94.0346 7.25499H87.3141Z" fill="white"/><path d="M64.2895 49.2133C62.4476 50.0289 60.4511 50.4369 58.4368 50.4092C54.4998 50.4092 51.7269 48.3719 51.7269 44.0115C51.7269 39.3707 54.9019 32.83 61.4743 32.83C63.5271 32.7815 65.5745 33.062 67.5386 33.6609L68.5282 28.9459C67.0571 28.4644 64.5329 27.9775 60.453 27.9775C51.2453 27.9775 44.9746 35.6823 44.9746 43.8528C44.9746 50.5998 49.5096 55.2777 57.4208 55.2777C59.3577 55.2585 61.2859 55.0171 63.1677 54.558L64.2895 49.2133Z" fill="white"/><path d="M41.3707 15.1979C41.3707 12.9807 40.0055 11.4196 37.8782 11.4196C34.7666 11.4196 32.5864 14.6317 32.5864 17.4628C32.5864 19.68 33.9094 21.3311 36.1266 21.3311C39.1588 21.3311 41.3707 18.1666 41.3707 15.1979Z" fill="white"/><path d="M53.5682 20.3732C52.6704 24.1504 50.4725 27.4915 47.3595 29.8115C44.2464 32.1314 40.4165 33.2825 36.5403 33.0632C32.664 32.8439 28.9884 31.2682 26.1569 28.6119C23.3254 25.9556 21.5184 22.388 21.0523 18.5336C20.5862 14.6792 21.4906 10.7837 23.6073 7.52901C25.724 4.27431 28.9181 1.86783 32.6303 0.730846C36.3425 -0.406139 40.3364 -0.201175 43.9127 1.30986C47.4891 2.82089 50.42 5.5417 52.1924 8.99598C52.7719 10.2457 53.0665 11.6085 53.0549 12.986C53.0549 18.8069 47.5515 21.3363 45.1914 21.3363C45.0964 21.3493 44.9997 21.3402 44.9087 21.3098C44.8178 21.2794 44.7351 21.2284 44.667 21.1609C44.599 21.0933 44.5474 21.011 44.5163 20.9203C44.4851 20.8296 44.4753 20.7329 44.4876 20.6378C44.5386 20.0983 44.6486 19.5659 44.8157 19.0503L47.4086 7.58838H43.4451L42.863 9.8162C42.2883 8.88443 41.4825 8.11705 40.5238 7.58855C39.5651 7.06005 38.486 6.78838 37.3913 6.7999C32.0149 6.7999 27.6757 11.9435 27.6757 18.1666C27.6916 22.7545 31.0889 25.9296 35.0048 25.9296C36.9363 25.9296 38.5873 24.7972 39.7673 23.4795H39.8626C39.8546 23.8116 39.9158 24.1417 40.0421 24.4489C40.1685 24.7561 40.3573 25.0337 40.5966 25.2641C40.836 25.4945 41.1206 25.6726 41.4324 25.7872C41.7442 25.9017 42.0764 25.9502 42.4079 25.9296C44.514 25.9296 50.1392 24.3791 53.5682 20.3732Z" fill="white"/><path d="M71.5975 64.6123C71.9164 64.0348 72.0754 63.3826 72.0579 62.7231C72.0733 62.0548 71.8891 61.397 71.5287 60.834C71.1551 60.2955 70.6276 59.8823 70.0152 59.6486C69.2408 59.3591 68.4181 59.2208 67.5916 59.2412H64.2367L61.9136 71.227H64.4801L65.3003 66.9936H66.8455H67.1048L68.8193 71.227H71.6874L69.4279 66.4644C69.7646 66.3216 70.0855 66.1442 70.3857 65.9352C70.8831 65.59 71.2971 65.138 71.5975 64.6123ZM69.1368 64.0302C68.9325 64.3705 68.6274 64.6386 68.2637 64.7975C67.839 64.985 67.3784 65.0771 66.9143 65.0674H65.6813L66.4274 61.215H67.3747C67.9203 61.177 68.4623 61.3284 68.9093 61.6436C69.0875 61.7925 69.2283 61.9811 69.3202 62.1944C69.4121 62.4076 69.4526 62.6395 69.4384 62.8713C69.4483 63.2782 69.3438 63.6797 69.1368 64.0302Z" fill="white"/><path d="M79.5613 64.4694C79.4787 64.2402 79.3628 64.0245 79.2173 63.8291C78.9785 63.5281 78.6697 63.2901 78.3177 63.1359C77.928 62.9709 77.5079 62.8898 77.0847 62.8978C76.5207 62.8993 75.9646 63.0315 75.4602 63.2841C74.9431 63.5438 74.4826 63.9035 74.1055 64.3424C73.7103 64.8143 73.4005 65.3515 73.19 65.9299C72.967 66.5382 72.8558 67.1818 72.8619 67.8297C72.8474 68.4889 72.9793 69.1432 73.2482 69.7453C73.4806 70.2681 73.8568 70.7141 74.333 71.0312C74.8208 71.342 75.39 71.5004 75.9682 71.4863C76.3558 71.4893 76.7403 71.4174 77.1006 71.2746C77.4569 71.1337 77.7836 70.9273 78.0637 70.666C78.23 70.51 78.3742 70.332 78.4924 70.1369L78.3495 71.2481H80.6038L82.1913 63.1729H79.9052L79.5613 64.4694ZM78.8046 68.0784C78.6302 68.4378 78.3636 68.7446 78.032 68.9674C77.7114 69.1878 77.3308 69.3042 76.9419 69.3008C76.6407 69.3075 76.3432 69.2344 76.0793 69.0891C75.8289 68.9482 75.6276 68.734 75.5025 68.4753C75.3658 68.1805 75.2988 67.8582 75.3067 67.5333C75.3002 67.1041 75.3964 66.6796 75.5872 66.2951C75.7668 65.9359 76.0367 65.6295 76.3704 65.406C76.6817 65.1912 77.0505 65.075 77.4287 65.0727C77.7322 65.0656 78.0321 65.1406 78.2966 65.2896C78.5402 65.4357 78.7368 65.6488 78.8628 65.9035C79.0051 66.1948 79.0759 66.5159 79.0692 66.8401C79.0825 67.2682 78.9917 67.6931 78.8046 68.0784Z" fill="white"/><path d="M88.0599 60.8816L85.4458 61.5748L85.1441 63.1624H83.6095L83.1968 65.1785H84.742L84.2128 68.0202C84.1705 68.2372 84.1334 68.4277 84.1017 68.5811C84.0699 68.7346 84.0488 68.8616 84.0329 68.9674C84.017 69.0733 84.0064 69.1579 84.0011 69.232C83.9958 69.3061 84.0011 69.3802 84.0011 69.4543C83.9848 69.7374 84.0335 70.0206 84.1436 70.282C84.2537 70.5435 84.4222 70.7762 84.6361 70.9624C85.1413 71.3439 85.7665 71.5317 86.3983 71.4916C86.9035 71.4839 87.4068 71.4271 87.9011 71.3222L88.2134 69.4595C87.9714 69.5509 87.7153 69.5993 87.4566 69.6024C87.3417 69.6093 87.2266 69.5927 87.1183 69.5536C87.0101 69.5144 86.9109 69.4536 86.8269 69.3749C86.7486 69.2855 86.6886 69.1815 86.6505 69.0689C86.6124 68.9563 86.5968 68.8373 86.6047 68.7187C86.6066 68.5405 86.6279 68.3631 86.6682 68.1895C86.7105 67.9937 86.7581 67.7556 86.811 67.4699L87.2503 65.1679H89.0177L89.4146 63.1518H87.6471L88.0599 60.8816Z" fill="white"/><path d="M94.2568 62.8978C93.6261 62.892 93.001 63.0163 92.4205 63.2629C91.8696 63.4934 91.3737 63.8378 90.9653 64.2736C90.546 64.7145 90.2187 65.2343 90.0022 65.8029C89.7647 66.4152 89.6462 67.0671 89.653 67.7238C89.6434 68.2681 89.7461 68.8085 89.9546 69.3114C90.1434 69.7654 90.435 70.1693 90.8066 70.4914C91.2007 70.8285 91.66 71.0807 92.1559 71.2323C92.7399 71.414 93.349 71.5015 93.9604 71.4916C94.1586 71.4913 94.3565 71.4789 94.5531 71.4545L95.2305 71.3593C95.4633 71.3222 95.7014 71.2746 95.929 71.2164C96.1565 71.1582 96.3735 71.1 96.564 71.0365L96.8921 69.0309C96.5109 69.2271 96.1051 69.3713 95.6856 69.4595C95.2949 69.5497 94.8958 69.5976 94.4949 69.6024C93.8426 69.6552 93.1896 69.5095 92.6216 69.1844C92.4191 69.0164 92.2569 68.8051 92.147 68.566C92.0371 68.327 91.9823 68.0663 91.9866 67.8032H97.5535C97.6308 67.5399 97.6874 67.271 97.7229 66.9989C97.7553 66.7319 97.7729 66.4634 97.7758 66.1945C97.7994 65.751 97.7286 65.3074 97.5681 64.8933C97.4075 64.4791 97.1609 64.1038 96.8444 63.7921C96.1328 63.1657 95.2033 62.8444 94.2568 62.8978ZM95.5109 66.1786C95.5141 66.2368 95.5141 66.2951 95.5109 66.3533H92.1295C92.257 65.8811 92.5114 65.4528 92.8651 65.115C93.0371 64.954 93.2393 64.8285 93.4599 64.7459C93.6806 64.6633 93.9154 64.625 94.1509 64.6334C94.3356 64.6144 94.5222 64.6367 94.6972 64.6988C94.8722 64.761 95.0311 64.8613 95.1623 64.9926C95.2936 65.1239 95.394 65.2828 95.4561 65.4578C95.5182 65.6327 95.5406 65.8193 95.5215 66.004C95.5215 66.0569 95.5162 66.1151 95.5109 66.1786Z" fill="white"/><path d="M104.999 62.8978C104.609 62.8976 104.222 62.975 103.861 63.1253C103.295 63.3539 102.822 63.7656 102.517 64.2948L102.697 63.1518H100.348L98.7866 71.227H101.231L102.068 66.9195C102.126 66.5678 102.246 66.2292 102.422 65.9194C102.562 65.6634 102.764 65.4469 103.009 65.2896C103.242 65.1463 103.509 65.0712 103.782 65.0727C103.931 65.0589 104.081 65.0767 104.222 65.1251C104.364 65.1734 104.493 65.2511 104.602 65.3531C104.701 65.4686 104.775 65.6024 104.821 65.7468C104.868 65.8912 104.885 66.0434 104.872 66.1945C104.872 66.2792 104.872 66.3639 104.872 66.4538C104.872 66.5438 104.872 66.6496 104.83 66.7607L103.962 71.227H106.407L107.322 66.512C107.354 66.3321 107.375 66.1522 107.391 65.9829C107.407 65.8135 107.391 65.6389 107.391 65.4537C107.429 64.7656 107.198 64.0897 106.745 63.5698C106.517 63.342 106.244 63.1646 105.943 63.0488C105.643 62.9331 105.321 62.8816 104.999 62.8978Z" fill="white"/><path d="M118.133 63.1518H115.122L111.92 66.1734L113.418 58.4527H110.973L108.497 71.227H110.941L111.65 67.5651L114.143 71.227H117.064L113.931 66.9513L118.133 63.1518Z" fill="white"/><path d="M124.695 64.4694C124.612 64.2391 124.495 64.023 124.345 63.8291C124.109 63.5259 123.799 63.2874 123.446 63.1359C123.058 62.9709 122.64 62.8897 122.218 62.8978C121.654 62.8985 121.098 63.0308 120.594 63.2841C120.076 63.5438 119.616 63.9035 119.239 64.3424C118.841 64.8127 118.531 65.3503 118.323 65.9299C118.099 66.5379 117.986 67.1815 117.99 67.8297C117.978 68.4887 118.11 69.1424 118.376 69.7453C118.612 70.2674 118.99 70.7129 119.466 71.0312C119.952 71.3418 120.52 71.5003 121.096 71.4863C121.486 71.4893 121.872 71.4174 122.234 71.2746C122.59 71.1325 122.916 70.9263 123.197 70.6661C123.363 70.51 123.508 70.332 123.626 70.1369L123.478 71.2481H125.737L127.325 63.1729H125.017L124.695 64.4694ZM123.938 68.0784C123.762 68.4367 123.496 68.7431 123.165 68.9674C122.845 69.1878 122.464 69.3042 122.075 69.3008C121.772 69.3069 121.473 69.2339 121.207 69.0891C120.966 68.9433 120.773 68.7299 120.652 68.4753C120.517 68.1797 120.45 67.858 120.456 67.5333C120.451 67.1037 120.549 66.6792 120.742 66.2951C120.921 65.9373 121.189 65.6313 121.52 65.4061C121.839 65.1879 122.217 65.0717 122.604 65.0727C122.906 65.065 123.205 65.14 123.467 65.2896C123.713 65.434 123.912 65.6474 124.038 65.9035C124.176 66.1962 124.245 66.5166 124.24 66.8401C124.241 67.2713 124.138 67.6964 123.938 68.0784Z" fill="white"/><path d="M133.664 67.4381C133.592 67.9382 133.383 68.4087 133.061 68.7981C132.929 68.9482 132.766 69.0681 132.584 69.1494C132.401 69.2307 132.203 69.2715 132.003 69.269C131.283 69.269 130.944 68.8986 130.944 68.1525C130.947 67.9603 130.968 67.7689 131.008 67.581L131.876 63.1518H129.383L128.468 67.835C128.395 68.183 128.358 68.5377 128.357 68.8933C128.316 69.5825 128.545 70.2604 128.997 70.7825C129.227 71.0149 129.505 71.1955 129.81 71.3123C130.116 71.4291 130.443 71.4794 130.77 71.4598C131.336 71.4644 131.889 71.2964 132.357 70.9783C132.784 70.6989 133.128 70.3095 133.352 69.8511L133.141 71.2111H135.442L137.003 63.1518H134.511L133.664 67.4381Z" fill="white"/><path d="M143.01 60.9927C143.165 60.8378 143.352 60.7169 143.557 60.6376C143.762 60.5584 143.981 60.5225 144.2 60.5324C144.615 60.5306 145.023 60.6344 145.386 60.834L145.73 58.7808C145.484 58.6405 145.218 58.5405 144.941 58.4845C144.594 58.408 144.239 58.3707 143.883 58.3733C141.766 58.3733 140.463 59.6239 139.972 62.1252L139.776 63.1518H138.427L138.051 65.1679H139.39L138.226 71.227H140.713L141.867 65.1679H143.883L144.264 63.1518H142.253L142.385 62.4427C142.453 61.9102 142.669 61.4075 143.01 60.9927Z" fill="white"/></svg>
    }
  }

  setButtonText () {
    if (this.paymentType === METHODS.BILL) {
      this.buttonText = 'Heute bestellen - in 30 Tagen zahlen';
      this.buttonTextShort = 'In 30 Tagen zahlen';
    }
  }

  render() {
    try {
      validateAmount(this.amount, this.paymentType)
    } catch (e) {
      return
    }

    return ([
      <div class="ec-express-button" style={{ opacity: this.buttonOpacity }}>
        <div class={{ "ec-express-button__btn": true, "blue": this.bgBlue, "full-width": this.fullWidth }}>
          <a class="ec-express-button__btn__main"
            onClick={this.clickButtonHandler.bind(this)}
          >
            { this.getLogo() }
            <span class="long">{ this.buttonText }</span>
            <span class="short">{ this.buttonTextShort }</span>
          </a>
        </div>
      </div>
    ])
  }
}
