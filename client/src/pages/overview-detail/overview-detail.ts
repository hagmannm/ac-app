import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Event} from "../../app/events/event.model";
import {Registry, User} from "../../app/users/user.model";
import {ParticipationState} from "../../app/participations/participation.model";

/**
 * Generated class for the OverviewDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-overview-detail',
  templateUrl: 'overview-detail.html',
})
export class OverviewDetailPage {

  private event: Event;
  private users: Map<string, User>;

  private nbOfPresentSoprani: number;
  private absentSoprani: Array<User>;
  private delayedSoprani: Array<User>;

  private nbOfPresentAlti: number;
  private absentAlti: Array<User>;
  private delayedAlti: Array<User>;

  private nbOfPresentTenors: number;
  private absentTenors: Array<User>;
  private delayedTenors: Array<User>;

  private nbOfPresentBasses: number;
  private absentBasses: Array<User>;
  private delayedBasses: Array<User>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = navParams.get('event');
    this.users = navParams.get('users');

    this.nbOfPresentSoprani = this.getNbOfUsers(ParticipationState.Present, Registry.Soprano);
    this.absentSoprani = this.getUsers(ParticipationState.Absent, Registry.Soprano);
    this.delayedSoprani = this.getUsers(ParticipationState.Delayed, Registry.Soprano);

    this.nbOfPresentAlti = this.getNbOfUsers(ParticipationState.Present, Registry.Alto);
    this.absentAlti = this.getUsers(ParticipationState.Absent, Registry.Alto);
    this.delayedAlti = this.getUsers(ParticipationState.Delayed, Registry.Alto);

    this.nbOfPresentTenors = this.getNbOfUsers(ParticipationState.Present, Registry.Tenor);
    this.absentTenors = this.getUsers(ParticipationState.Absent, Registry.Tenor);
    this.delayedTenors = this.getUsers(ParticipationState.Delayed, Registry.Tenor);

    this.nbOfPresentBasses = this.getNbOfUsers(ParticipationState.Present, Registry.Basso);
    this.absentBasses = this.getUsers(ParticipationState.Absent, Registry.Basso);
    this.delayedBasses = this.getUsers(ParticipationState.Delayed, Registry.Basso);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewDetailPage');
  }

  getNbOfUsers(state: ParticipationState, registry: Registry): number {
    let count = 0;
    for (let key of Array.from( this.event.singers.keys())) {
      if (this.event.singers.get(key).state == state) {
        if (registry == null || this.users.get(key).registry == registry) {
          count++;
        }
      }
    }
    return count;
  }

  getUsers(state: ParticipationState, registry: Registry): Array<User> {
    let users = new Array<User>();
    for (let key of Array.from( this.event.singers.keys())) {
      if (this.event.singers.get(key).state == state) {
        if (registry == null || this.users.get(key).registry == registry) {
          users.push(this.users.get(key));
        }
      }
    }
    return users;
  }
}
