import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Event} from "../../app/events/event.model";
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../app/users/user.model";
import {Participation, ParticipationState} from "../../app/participations/participation.model";

/**
 * Generated class for the DelayDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-delay-detail',
  templateUrl: 'delay-detail.html',
})
export class DelayDetailPage {

  private event: Event;
  private user : User;
  private delay: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private toastCtrl: ToastController) {
    this.delay = this.formBuilder.group({
      comment: ['']
    });
    this.event = navParams.get('event');
    this.user = navParams.get('user');
  }

  saveDelay(comment: string) {
    let participation = new Participation(ParticipationState.Delayed, comment);
    // save delay
    if (this.event.singers.has(this.user.id)) {
      this.event.singers.set(this.user.id, participation);
    }

    this.presentToast("Annonce de retard envoyée avec succès.")

    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DelayDetailPage');
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
