import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Ad } from './../../models/ad';

@IonicPage()
@Component({
  selector: 'page-ad',
  templateUrl: 'ad.html',
})
export class AdPage {

  private ad: Ad;
  private loading: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.ad = this.navParams.data;
    this.loading = true;
  }

}
