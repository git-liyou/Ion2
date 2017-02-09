import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsContentPage } from '../news-content/news-content'
import { Data } from '../../providers/data';

@Component({
  selector: 'page-news',
  templateUrl: 'news.html'
})
export class NewsPage {
  zhihuList: any;
  dataFinish: boolean = false;
  date: Date = new Date();
  hasErr: boolean = false;
  constructor(public navCtrl: NavController, public data: Data) {

  }
  ionViewDidLoad() {
    setTimeout(() => {
      this.initData();
    }, 1000)
  }
  initData() {
    this.hasErr = false;
    this.dataFinish = false;
    this.data.getZhihuLatest().then(res => {
      this.zhihuList = res;
      this.dataFinish = true;
    }, err => {
      this.hasErr = true;
    })
  }
  getMoreZhihuList(event) {
    let year = this.date.getFullYear();
    let month = (this.date.getMonth() + 1).toString();
    let day = this.date.getDate().toString();
    if (day.length < 2) day = '0' + day;
    if (month.length < 2) month = '0' + month;

    this.data.getZhihuBefore('' + year + month + day).then((res) => {
      this.zhihuList.stories = this.zhihuList.stories.concat(res);
      this.date = new Date(this.date.getTime() - 1 * 24 * 60 * 60 * 1000)
      event.complete();
    })
  }
  pushContent(id) {
    this.navCtrl.push(NewsContentPage, { id: id });
  }
}
