import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresenceDetailPage } from './presence-detail';

@NgModule({
  declarations: [
    PresenceDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PresenceDetailPage),
  ],
})
export class PresenceDetailPageModule {}
