import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EventDetailPage} from "../event-detail/event-detail";

/**
 * Generated class for the EventListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-list',
  templateUrl: 'event-list.html',
})
export class EventListPage {

  events: Array<any> = [
    { date: '01.06.2018', time: '20:00', desc: 'Répétition', location: 'HEP' },
    { date: '08.06.2018', time: '19:00', desc: 'Partielle'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListPage');
  }

  eventTapped(event, evnt) {
    this.navCtrl.push(EventDetailPage, {
      event: evnt
    });
  }
}
