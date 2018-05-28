import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventListPageModule } from "../pages/event-list/event-list.module";
import { EventDetailPageModule } from "../pages/event-detail/event-detail.module";
import { AbsenceDetailPageModule } from '../pages/absence-detail/absence-detail.module';
import { PresenceDetailPageModule } from "../pages/presence-detail/presence-detail.module";
import { DelayDetailPageModule } from "../pages/delay-detail/delay-detail.module";
import { OverviewDetailPageModule } from "../pages/overview-detail/overview-detail.module";

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        EventListPageModule,
        EventDetailPageModule,
        AbsenceDetailPageModule,
        PresenceDetailPageModule,
        DelayDetailPageModule,
        OverviewDetailPageModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        ListPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
