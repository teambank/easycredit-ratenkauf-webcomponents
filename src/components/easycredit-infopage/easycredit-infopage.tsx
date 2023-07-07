import { Component, h } from '@stencil/core';
import { applyAssetsUrl, sendFeedback } from '../../utils/utils';

@Component({
  tag: 'easycredit-infopage',
  styleUrl: 'easycredit-infopage.scss',
  shadow: true,
})

export class EasycreditInfopage {

  connectedCallback() {
    applyAssetsUrl(EasycreditInfopage)
  }

  componentDidLoad () {
    sendFeedback(this, { action: 'componentDidLoad' })
  }

  render() { 
    return ([
      <div class="ec-infopage">
        <section class="ec-infopage__text">
          <div class="ec-infopage__logo"></div>
          <h1>Ganz entspannt in Raten zahlen</h1>
          <p>
            Sofort - Flexibel - Transparent. 
            Mit easyCredit-Ratenkauf profitieren Sie gleich mehrfach von einer bequemen und fairen Ratenzahlung. 
            Ganz ohne versteckte Kosten, Gebühren und lästigen Papierkram. 
            Wählen Sie im Bezahlvorgang einfach easyCredit-Ratenkauf aus und zahlen Sie die erste Rate frühestens nach 30 Tagen. 
            Wenn Sie später schneller zurückzahlen oder eine Zahlpause einlegen wollen – auch das geht ganz einfach und flexibel.
          </p>
        </section>

        <section class="ec-infopage__usp">
          <h2>easyCredit-Ratenkauf auf einen Blick</h2>
          <ul>
            <li><div><strong>Bestellwerte</strong>: 200 bis 10.000 Euro</div></li>
            <li><div><strong>Mindestrate</strong>: 20 Euro</div></li>
            <li><div><strong>Laufzeiten</strong>: 2 bis 60 Monate</div></li>
            <li><div><strong>PostIdent</strong>: Nicht nötig! Alle notwendigen Informationen werden direkt online bei der Bestellung erfasst.</div></li>
            <li><div><strong>Rückzahlung</strong>: Erst erhalten Sie Ihre Bestellung und können sich dann ganz in Ruhe entscheiden. Die erste Rate zahlen Sie frühestens 30 Tage nach Lieferung. Ihren detaillierten Ratenplan erhalten Sie per E-Mail.</div></li>
            <li><div><strong>Vorzeitige Rückzahlungen und Zahlpausen sind gebührenfrei möglich.</strong></div></li>
          </ul>
        </section>

        <section class="ec-infopage__text">
          <h2>Verlassen Sie sich auf einen starken Partner:</h2>
          <p>easyCredit-Ratenkauf ist ein Produkt der TeamBank AG, Beuthener Straße 25, 90471 Nürnberg, www.teambank.de. 
            Die TeamBank AG ist mit der Produktfamilie easyCredit das Kompetenzzentrum für modernes Liquiditätsmanagement in der Genossenschaftlichen FinanzGruppe Volksbanken Raiffeisenbanken. 
            Durch die Bereitstellung und Vernetzung innovativer Produkte und Services erhalten die Kunden einfach, überall und zu jeder Zeit Zugang zu Liquidität.
          </p>
          <div class="ec-infopage__logo-secondary"></div>
        </section>

        <section class="ec-infopage__faq">
          <easycredit-faq />
        </section>
      </div>
    ])
  }
}
