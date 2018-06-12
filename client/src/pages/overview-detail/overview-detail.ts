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

  private nbOfPresentSoprani: number = 0;
  private absentSoprani: Array<User> = new Array<User>();
  private delayedSoprani: Array<User> = new Array<User>();

  private nbOfPresentAlti: number = 0;
  private absentAlti: Array<User> = new Array<User>();
  private delayedAlti: Array<User> = new Array<User>();

  private nbOfPresentTenors: number = 0;
  private absentTenors: Array<User> = new Array<User>();
  private delayedTenors: Array<User> = new Array<User>();

  private nbOfPresentBasses: number = 0;
  private absentBasses: Array<User> = new Array<User>();
  private delayedBasses: Array<User> = new Array<User>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = navParams.get('event');
    this.users = navParams.get('users');

    this.readUsers();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OverviewDetailPage');
  }

  readUsers() {
    for (let key of Array.from(this.event.singers.keys())) {
      switch (this.event.singers.get(key).state) {
        case ParticipationState.Present: {
          switch (this.users.get(key).registry) {
            case Registry.Soprano: {
              this.nbOfPresentSoprani++;
              break;
            }
            case Registry.Alto: {
              this.nbOfPresentAlti++;
              break;
            }
            case Registry.Tenor: {
              this.nbOfPresentTenors++;
              break;
            }
            case Registry.Basso: {
              this.nbOfPresentBasses++;
              break;
            }
          }
          break;
        }
        case ParticipationState.Absent: {
          switch (this.users.get(key).registry) {
            case Registry.Soprano: {
              this.absentSoprani.push(this.users.get(key));
              break;
            }
            case Registry.Alto: {
              this.absentAlti.push(this.users.get(key));
              break;
            }
            case Registry.Tenor: {
              this.absentTenors.push(this.users.get(key));
              break;
            }
            case Registry.Basso: {
              this.absentBasses.push(this.users.get(key));
              break;
            }
          }
          break;
        }
        case ParticipationState.Delayed: {
          switch (this.users.get(key).registry) {
            case Registry.Soprano: {
              this.delayedSoprani.push(this.users.get(key));
              break;
            }
            case Registry.Alto: {
              this.delayedAlti.push(this.users.get(key));
              break;
            }
            case Registry.Tenor: {
              this.delayedTenors.push(this.users.get(key));
              break;
            }
            case Registry.Basso: {
              this.delayedBasses.push(this.users.get(key));
              break;
            }
          }
          break;
        }
      }
    }
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
