import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import {LOCALE_ID, ErrorHandler, NgModule} from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "../assets/i18n/", ".json");
}

registerLocaleData(localeFr, 'fr');

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        ListPage,
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
      HttpClientModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: (HttpLoaderFactory),
          deps: [HttpClient]
        }
      }),
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
      {provide: ErrorHandler, useClass: IonicErrorHandler},
      {provide: LOCALE_ID, useValue: 'fr'}
    ]
})
export class AppModule {
}
