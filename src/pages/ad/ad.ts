import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Ad } from './../../models/ad';
import { AppStorageService } from '../../providers/app-storage-service/app-storage-service';

@IonicPage({
  name: 'app-ad-page',
  segment: 'ad-page/:id',
  defaultHistory: ['HomePage', 'AddAdPage'],
  priority: 'low'
})
@Component({
  selector: 'page-ad',
  templateUrl: 'ad.html',
})
export class AdPage {

  private ad: Ad;
  private loading: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storageService: AppStorageService) {
  }

  ionViewDidLoad() {
    const id = this.navParams.get('id');
    this.ad = this.navParams.get('ad');
    if(!this.ad) {
      this.storageService.get(id).then((ad) => {
        this.ad = ad;
        this.loading = true;
      });
    } else {
      this.loading = true;
    }       
  }

}
