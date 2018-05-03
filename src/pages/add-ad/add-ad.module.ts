import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAdPage } from './add-ad';

@NgModule({
  declarations: [
    AddAdPage,
  ],
  imports: [
    IonicPageModule.forChild(AddAdPage),
  ],
})
export class AddAdPageModule {}
