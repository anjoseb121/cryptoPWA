import { Component } from '@stencil/core';

@Component({
  tag: 'app-add-holding',
  styleUrl: 'app-add-holding.scss'
})
export class AppAddHolding {

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

        </ion-content>
      </ion-page>
    );
  }
}