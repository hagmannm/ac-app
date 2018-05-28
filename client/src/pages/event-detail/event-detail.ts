import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbsenceDetailPage } from '../absence-detail/absence-detail';
import {Event} from "../../app/events/event.model";
import {User} from "../../app/users/user.model";
import {ParticipationState} from "../../app/participations/participation.model";
import {DelayDetailPage} from "../delay-detail/delay-detail";
import {PresenceDetailPage} from "../presence-detail/presence-detail";
import {OverviewDetailPage} from "../overview-detail/overview-detail";

/**
 * Generated class for the EventDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-event-detail',
    templateUrl: 'event-detail.html',
})
export class EventDetailPage {

    private event: Event;
    private user: User;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.event = navParams.get('event');
        this.user = navParams.get('user');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EventDetailPage');
    }

    newAbsence() {
        this.navCtrl.push(AbsenceDetailPage, {
            event: this.event,
            user: this.user
        });
    }

    newDelay() {
      this.navCtrl.push(DelayDetailPage, {
        event: this.event,
        user: this.user
      });
    }

    newPresence() {
      this.navCtrl.push(PresenceDetailPage, {
        event: this.event,
        user: this.user
      });
    }

    overviewAllParticipations() {
      this.navCtrl.push(OverviewDetailPage, {
        event: this.event,
        users: this.users
      });
    }

    isPresent() {
      return this.event.singers.get(this.user.id).state == ParticipationState.Present;
    }

    isAbsent() {
      return this.event.singers.get(this.user.id).state == ParticipationState.Absent;
    }

    isDelayed() {
      return this.event.singers.get(this.user.id).state == ParticipationState.Delayed;
    }
}
