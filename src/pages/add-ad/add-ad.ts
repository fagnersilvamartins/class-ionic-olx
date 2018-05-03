import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the AddAdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-ad',
  templateUrl: 'add-ad.html',
})
export class AddAdPage {

  base64Image: String;  

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
    public navParams: NavParams) {

  }

  onChangeCamera(): void {
    this.plataform.ready().then(() => {
      this.camera.getPicture(this.options).then((imageData) => {
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
       }, (err) => {
        // Handle error
       });
    });
    
  }

}
