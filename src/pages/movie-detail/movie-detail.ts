import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { Data } from '../../providers/data';

/*
  Generated class for the MovieDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html'
})
export class MovieDetailPage {
  id: String;
  movieInfo:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data, public menuCtrl: MenuController) {
    this.id = this.navParams.get('id');
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLoad() {
    this.data.getMovieDetail(this.id).then(res => {
      this.movieInfo = res;
    })
  }
  ionViewWillLeave() {
    this.menuCtrl.swipeEnable(true);
  }

}
