import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AbsenceDetailPage } from '../absence-detail/absence-detail';

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

    private event: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.event = navParams.get('event');
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad EventDetailPage');
    }

    newAbsence() {
        this.navCtrl.push(AbsenceDetailPage, {
            event: this.event
        });
    }

    newDelay() {
    }
}
