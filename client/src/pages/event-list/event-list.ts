import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EventDetailPage} from "../event-detail/event-detail";
import {Event} from "../../app/events/event.model";
import {User, Registry} from "../../app/users/user.model";
import {Participation, ParticipationState} from "../../app/participations/participation.model";

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

  private user = new User("1","Bianca", "Castafiore", Registry.Soprano);
  participation = new Participation(ParticipationState.Present, null);
  usersMap1 = new Map<string, Participation>([
    [this.user.id, this.participation]
    ]
  )
  usersMap2 = new Map<string, Participation>([
      [this.user.id, this.participation]
    ]
  )
  event1 = new Event(new Date(2018,7,23), "Répétition", "Maison de Justice",  "20:00",  "22:15", this.usersMap1);
  event2 = new Event(new Date(2018,7,30),"Répétition", "Maison de Justice",  "20:00",  "22:15", this.usersMap2);
  events: Array<Event> = [
    this.event1,
    this.event2
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventListPage');
  }

  eventTapped(event, evnt) {
    this.navCtrl.push(EventDetailPage, {
      event: evnt,
      user: this.user
    });
  }

  isUserPresentOrDelayed(event: Event) {
    return event.singers.get(this.user.id).state == ParticipationState.Present ||
      event.singers.get(this.user.id).state == ParticipationState.Delayed;
  }

  isUserAbsent(event: Event) {
    return event.singers.get(this.user.id).state == ParticipationState.Absent;
  }
}
