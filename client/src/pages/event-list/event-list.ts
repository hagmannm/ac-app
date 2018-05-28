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
  private user2 = new User("2", "Lucky", "Luke", Registry.Basso);
  private user3 = new User("3", "Capitaine", "Haddock", Registry.Basso);
  private user4 = new User("4", "Cat", "Woman", Registry.Alto);

  users = new Map<string, User> ([
    [this.user.id, this.user],
    [this.user2.id, this.user2],
    [this.user3.id, this.user3],
    [this.user4.id, this.user4]
  ]);

  participation = new Participation(ParticipationState.Present, null);
  usersMap1 = new Map<string, Participation>([
    [this.user.id, this.participation],
    [this.user2.id, this.participation],
    [this.user3.id, this.participation],
    [this.user4.id, this.participation],
    ]
  )
  usersMap2 = new Map<string, Participation>([
    [this.user.id, this.participation],
    [this.user2.id, this.participation],
    [this.user3.id, this.participation],
    [this.user4.id, this.participation],
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
      user: this.user,
      users: this.users
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
