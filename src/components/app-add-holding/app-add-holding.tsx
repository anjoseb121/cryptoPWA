import { Component } from '@stencil/core';

@Component({
  tag: 'app-add-holding',
  styleUrl: 'app-add-holding.scss'
})
export class AppAddHolding {

  private cryptoCode: string;
  private displayCurrency: string;
  private amountHolding: number;


  addHolding() {
    let holding = {
      crypto: this.cryptoCode,
      currency: this.displayCurrency,
      amount: this.amountHolding || 0
    };
    
    console.log(holding);
  }

  changeValue(ev) {
    let value = ev.target.value;

    switch(ev.target.name) {
      case 'cryptoCode': {
        this.cryptoCode = value;
        break;
      }

      case 'displayCurrency': {
        this.displayCurrency = value;
        break;
      }

      case 'amountHolding': {
        this.amountHolding = value;
        break;
      }
    }
  }

  render () {
    return (
      <ion-page>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-button>
                <ion-icon slot="icon-only" name="arrow-back"></ion-icon>
              </ion-button>
            </ion-buttons>
            <ion-title>Add Holding</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>

          <div class="message">
            <p>To add a holding you will need to supply the appropiate symbol for th cryptocurrency, and the symbol for the currency you would like to display the values in.</p>
            <p><strong>Note:</strong> Listed prices are estimated. Rates may vary significantly across different exchanges</p>
          </div>

          <ion-list>

            <ion-item>
              <ion-label stacked>Crypto Code</ion-label>
              <ion-input onInput={(ev) => this.changeValue(ev)} name="cryptoCode" placeholder="(e.g BTC, LTC, ETH)" type="text" ></ion-input>
            </ion-item>
            <ion-item>
              <ion-label stacked>Display Currency Code</ion-label>
              <ion-input onInput={(ev) => this.changeValue(ev)} name="displayCurrency" placeholder="(e.g. USD, CAD, AUD)" type="text"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label stacked>Amount Holding</ion-label>
              <ion-input onInput={(ev) => this.changeValue(ev)} name="amountHolding" type="number"></ion-input>
            </ion-item>

          </ion-list>

          <ion-button onClick={() => this.addHolding()}>Add Holding</ion-button>

        </ion-content>
      </ion-page>
    );
  }
}