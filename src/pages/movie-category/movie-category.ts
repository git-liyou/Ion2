import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { MovieDetailPage } from '../movie-detail/movie-detail';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-movie-category',
  templateUrl: 'movie-category.html'
})
export class MovieCategoryPage {
  category: String;
  movieList: any = [];
  start = 0;
  count = 10;
  dataFinish: boolean = false;
  hasmore: boolean = false;
  hasErr: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data, public menuCtrl: MenuController) {
    this.category = this.navParams.get('categories');
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLoad() {
    this.getData(null);
  }
  ionViewWillLeave() {
    this.menuCtrl.swipeEnable(true);
  }
  pushDetail(id) {
    this.navCtrl.push(MovieDetailPage, { id: id })
  }
  getData(event) {
    if (event && event.ionRefresh) this.start = 0, this.movieList = [];
    this.hasErr = null;
    this.dataFinish = false;
    switch (this.category) {
      case 'Top250':
        this.data.getTopData(this.start, this.count).then((res: Array<any>) => {
          this.movieList = this.movieList.concat(res);
          this.dataFinish = true;
          if (res.length >= 10) this.start += this.count, this.hasmore = true;
          else this.hasmore = false;
          if (event) {
            event.complete();
          }
        }, err => {
          this.hasErr = err;
        })
        break;
      case '正在热映':
        this.data.getInTheaters(this.start, this.count).then((res: Array<any>) => {
          this.movieList = this.movieList.concat(res);
          this.dataFinish = true;
          if (res.length >= 10) this.start += this.count, this.hasmore = true;
          else this.hasmore = false;
          if (event) {
            event.complete();
          }
        }, err => {
          this.hasErr = err;
        })
        break;
      case '即将上映':
        this.data.getComingSoon(this.start, this.count).then((res: Array<any>) => {
          this.movieList = this.movieList.concat(res);
          this.dataFinish = true;
          if (res.length >= 10) this.start += this.count, this.hasmore = true;
          else this.hasmore = false;
          if (event) {
            event.complete();
          }
        }, err => {
          this.hasErr = err;
        })
        break;
    }

  }
}
