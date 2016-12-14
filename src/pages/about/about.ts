import { Component } from '@angular/core';

import { NavController, ToastController } from 'ionic-angular';
declare var navigator;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {

  }
  saveQr() {
    let that = this;
    navigator.screenshot.save(function (error, res) {
      if (error) {
        that.showToast("保存失败！");
      } else {
        that.showToast("保存成功，微信扫描关注公众号~");
      }
    }, 'jpg', 100, 'Ion2Screenshot');
  }
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
