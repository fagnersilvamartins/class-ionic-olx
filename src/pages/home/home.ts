import { Component } from '@angular/core';
import { NavController, LoadingController, IonicPage } from 'ionic-angular';

import { ApiProvider } from '../../providers/api/api';
import { Ad } from '../../models/ad';

@IonicPage()
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
    this.apiProvider.getAllAds().then((result) => {
      this.ads = result;
      this.loader.dismiss();
      this.loadind = true;
    });    
  }

  onClickCard(ad): void {
    this.navCtrl.push('app-ad-page', {id: ad.id, ad: ad});
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    this.loader.present();
  }

  doRefresh(refresher) {
    this.apiProvider.getAllAds().then((result) => {
      this.ads = result;
      refresher.complete();
    }); 
  }

}
