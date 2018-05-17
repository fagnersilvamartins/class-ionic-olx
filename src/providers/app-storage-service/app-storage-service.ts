import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'

import { Ad } from '../../models/ad';

@Injectable()
export class AppStorageService {

  protected key = 'ad.';

  constructor(public storage: Storage) {
    console.log('Hello AppStorageServiceProvider Provider');
  }

  public getAll() : Promise<Ad[]> {
    return this.storage.ready().then(() => {
      let ads: Array<Ad> = [];
      return this.storage.forEach((ad: Ad, key: String, interator: number) => {
        if (key.indexOf(this.key) > -1) {
          ads.push(ad);
        }
      }).then(() => ads);
    });
  }

  public get(id): Promise<Ad> {
    return this.storage.ready().then(() => {
      return this.storage.get(this.key + id);
    });
  }

  public save (ad: Ad) {
    return this.storage.ready().then(() => {
      return this.storage.set(this.key + ad.id, ad);
    });
  }

}
