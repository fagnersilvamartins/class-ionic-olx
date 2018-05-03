import { AdPage } from './../ad/ad';
import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { Ad } from '../../models/ad';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private ads: Array<Ad>;
  private loadind: Boolean = false;
  private loader: any;

  constructor(
    private navCtrl: NavController, 
    private apiProvider: ApiProvider, 
    private loadingCtrl: LoadingController) {
      this.presentLoading();
  }

  ionViewDidLoad() {
    this.ads = this.apiProvider.getAllAds();
    console.log(this.loader);
    this.loader.dismiss();
    this.loadind = true;
  }

  onClickCard(ad): void {
    this.navCtrl.push(AdPage, ad);
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }

  doRefresh(refresher) {
    setTimeout(() => {
      this.ads = this.apiProvider.getAllAds();
      refresher.complete();
    }, 2000);
  }

}
