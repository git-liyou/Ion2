import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
declare var navigator;
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController) {

  }
  saveQr() {
    navigator.screenshot.save(function (error, res) {
      if (error) {
        alert(error);
      } else {
        alert('ok'+res.filePath);
      }
    }, 'jpg', 100, 'Ion2Screenshot');
  }

}
