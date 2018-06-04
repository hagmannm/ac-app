import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OverviewDetailPage } from './overview-detail';

@NgModule({
  declarations: [
    OverviewDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(OverviewDetailPage),
  ],
})
export class OverviewDetailPageModule {}
