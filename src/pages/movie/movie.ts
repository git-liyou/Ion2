import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MovieCategoryPage } from '../movie-category/movie-category';
import { Page1 } from '../page1/page1';
import { Data } from '../../providers/data';
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html'
})
export class MoviePage {
  movieData: any;
  dataFinish:boolean = false;
  constructor(public navCtrl: NavController, public data: Data) {

  }
  pushPage(category) {
    this.navCtrl.push(MovieCategoryPage,{categories:category})
  }
  ionViewDidEnter() {
    this.data.getAll().then(res => {
      this.movieData = res;
      this.dataFinish = true;
    })
  }
}
