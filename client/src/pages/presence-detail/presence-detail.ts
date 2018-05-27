import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Event} from "../../app/events/event.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {User} from "../../app/users/user.model";
import {Participation, ParticipationState} from "../../app/participations/participation.model";

/**
 * Generated class for the PresenceDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presence-detail',
  templateUrl: 'presence-detail.html',
})
export class PresenceDetailPage {

  private event: Event;
  private user : User;
  private presence: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private toastCtrl: ToastController) {
    this.presence = this.formBuilder.group({});
    this.event = navParams.get('event');
    this.user = navParams.get('user');
  }

  savePresence() {
    let participation = new Participation(ParticipationState.Present, null);
    // save presence
    if (this.event.singers.has(this.user.id)) {
      this.event.singers.set(this.user.id, participation);
    }

    this.presentToast("Annonce de présence envoyée avec succès.")

    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresenceDetailPage');
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
