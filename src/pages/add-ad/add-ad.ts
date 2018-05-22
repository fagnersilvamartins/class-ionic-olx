import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { Ad } from './../../models/ad';
import { Region } from '../../models/region';
import { AppStorageService } from '../../providers/app-storage-service/app-storage-service';

/**
 * Generated class for the AddAdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  priority: 'high'
})
@Component({
  selector: 'page-add-ad',
  templateUrl: 'add-ad.html',
})
export class AddAdPage {

  private ad: Ad = new Ad('', '', new Region(''), 0, []);

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }

  constructor(
    private camera: Camera,
    private plataform: Platform,
    public navCtrl: NavController,
    private appStorageService: AppStorageService,
    public navParams: NavParams) {

  }

  onChangeCamera(): void {
    this.plataform.ready().then(() => {
      this.camera.getPicture(this.options).then((imageData) => {
        this.ad.images.push('data:image/jpeg;base64,' + imageData);

      }, (err) => {
        // Handle error
      });
    });

  }

  onSave() {
    this.appStorageService.save(this.ad);
  }

}
