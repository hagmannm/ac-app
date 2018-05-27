import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Event} from "../../app/events/event.model";
import {User} from "../../app/users/user.model";
import {Participation, ParticipationState} from "../../app/participations/participation.model";

/**
 * Generated class for the AbsenceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-absence-detail',
    templateUrl: 'absence-detail.html',
})
export class AbsenceDetailPage {

    private event: Event;
    private user : User;
    private absence: FormGroup;

    constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private toastCtrl: ToastController) {
        this.absence = this.formBuilder.group({
            reason: ['', Validators.required]
        });
        this.event = navParams.get('event');
        this.user = navParams.get('user');
    }

    saveAbsence(comment: string) {
        let participation = new Participation(ParticipationState.Absent, comment);
        // save absence
        if (this.event.singers.has(this.user.id)) {
          this.event.singers.set(this.user.id, participation);
        }

        this.presentToast("Annonce d'absence envoyée avec succès.")

        this.navCtrl.pop();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad AbsenceDetailPage');
    }

    private presentToast(message: string) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });

        toast.present();
    }

}
