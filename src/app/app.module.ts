import { HidePlatformDirective } from './../directives/hide-platform/hide-platform';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { IonicStorageModule } from '@ionic/storage'

import { MyApp } from './app.component';
import { ApiProvider } from '../providers/api/api';
import { AppStorageService } from '../providers/app-storage-service/app-storage-service';
import { AppPlatformProvider } from '../providers/app-platform/app-platform';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [ 
    MyApp,
    HidePlatformDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    }),
    IonicStorageModule.forRoot({
      name: 'olxdb'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    AppStorageService,
    AppPlatformProvider,
    {provide: LocationStrategy, useClass: PathLocationStrategy}
  ]
})
export class AppModule {}
