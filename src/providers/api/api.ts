import { Injectable } from '@angular/core';

import { AppStorageService } from './../app-storage-service/app-storage-service';
import { Ad } from './../../models/ad';
import { Region } from '../../models/region';

@Injectable()
export class ApiProvider {

  constructor(private appStorage: AppStorageService) {
    console.log('Hello ApiProvider Provider');
  }

  getAllAds(): Promise <Array<Ad>> {
    return this.appStorage.getAll().then ((result)=> {
      return result;
    });
  }

  getRegion(index): Region {
    return this.getAllRegions()[index];
  }

  getAllRegions(): Array<Region> {
    return [
      "Paraíba",
      "São Paulo",
      "Santa Catarina",
      "Rio de Janeiro",
      "Pernambuco"
    ]
  }

}
