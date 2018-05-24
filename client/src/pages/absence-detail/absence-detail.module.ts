import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AbsenceDetailPage } from './absence-detail';

@NgModule({
  declarations: [
    AbsenceDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(AbsenceDetailPage),
  ],
})
export class AbsenceDetailPageModule {}
