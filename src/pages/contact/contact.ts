import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Page1 } from '../page1/page1';
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
pushPage(){
this.navCtrl.push(Page1)
}
}
