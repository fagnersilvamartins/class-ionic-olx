import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage'

import { AddAdPage } from './../pages/add-ad/add-ad';
import { AdPage } from './../pages/ad/ad';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ApiProvider } from '../providers/api/api';
import { AppStorageService } from '../providers/app-storage-service/app-storage-service';
import { AppPlatformProvider } from '../providers/app-platform/app-platform';

@NgModule({
  declarations: [
    AddAdPage,
    AdPage,
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: 'olxdb'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AddAdPage,
    AdPage,
    MyApp,
    HomePage
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    AppStorageService,
    AppPlatformProvider
  ]
})
export class AppModule {}
