import { Component,ViewChild } from '@angular/core';
import { NavController,Content } from 'ionic-angular';
import { MovieCategoryPage } from '../movie-category/movie-category';
import { MovieDetailPage } from '../movie-detail/movie-detail';
import { Page1 } from '../page1/page1';
import { Data } from '../../providers/data';
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html'
})
export class MoviePage {
  @ViewChild(Content) content: Content;
  movieData: any;
  dataFinish: boolean = false;
  constructor(public navCtrl: NavController, public data: Data) {

  }
  pushPage(category) {
    this.navCtrl.push(MovieCategoryPage, { categories: category })
  }
  pushDetail(id) {
    this.navCtrl.push(MovieDetailPage, { id: id })
  }
  ionViewDidLoad() {
    this.data.getAll().then(res => {
      this.movieData = res;
      this.dataFinish = true;
    })
  }
}
