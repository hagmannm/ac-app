import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DelayDetailPage } from './delay-detail';

@NgModule({
  declarations: [
    DelayDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DelayDetailPage),
  ],
})
export class DelayDetailPageModule {}
