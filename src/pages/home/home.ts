import { Component } from '@angular/core';

import { NavController,ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {

  }
  showToast(){
                    let toast = this.toastCtrl.create({
                            message: 'User was added successfully',
                            duration: 2000,
                            position: 'top'
                          });
                 toast.present();
  }
}