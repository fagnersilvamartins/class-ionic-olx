import { Platform } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AppPlatformProvider {

  private currentPlatform: String;

  constructor(private platform: Platform) {
    this.setPlatform();
  }

  setPlatform() {
    if(this.platform.is('android')) {
      this.currentPlatform = 'md';
    } else if(this.platform.is('ios')) {
      this.currentPlatform = 'ios';
    } else if(this.platform.is('core')) {
      this.currentPlatform = 'md';
    }
  }

}
