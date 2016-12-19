import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { MovieCategoryPage } from '../movie-category/movie-category';
import { MovieDetailPage } from '../movie-detail/movie-detail';

import { Data } from '../../providers/data';
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html'
})
export class MoviePage {
  @ViewChild(Content) content: Content;
  movieData: any;
  dataFinish: boolean = false;
  hasErr: any;
  constructor(public navCtrl: NavController, public data: Data) {

  }
  pushPage(category) {
    this.navCtrl.push(MovieCategoryPage, { categories: category })
  }
  pushDetail(id) {
    this.navCtrl.push(MovieDetailPage, { id: id })
  }
  ionViewDidLoad() {
    this.initData();
  }
  initData() {
    this.hasErr = null;
    this.dataFinish = false;
    this.data.getAll().then(res => {
      this.movieData = res;
      this.dataFinish = true;
    }, err => {
      this.hasErr = err;
    })
  }
}
