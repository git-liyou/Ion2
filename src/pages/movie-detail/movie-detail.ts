import { Component } from '@angular/core';
import { NavController, NavParams, MenuController,ToastController } from 'ionic-angular';
import { Data } from '../../providers/data';

declare var YCQQ, Wechat;

@Component({
  selector: 'page-movie-detail',
  templateUrl: 'movie-detail.html'
})
export class MovieDetailPage {
  id: String;
  movieInfo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data: Data, 
  public menuCtrl: MenuController,public toastCtrl: ToastController) {
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
  shareMovie(type, movie) {
    let that = this;
    switch (type) {
      case 'QQ':
        let QQ = {
          url: movie.share_url,
          title: movie.title,
          description: movie.summary,
          imageUrl: movie.images.large,
          appName: "Ion2"
        };
        YCQQ.shareToQQ(function () {
          that.showToast('分享成功');
        }, function (failReason) {
          that.showToast('分享失败');
        }, QQ);
        break;
      case 'Qzone':
        let Qzone = {
          url: movie.share_url,
          title: movie.title,
          description: movie.summary,
          imageUrl: [movie.images.large],
          appName: "Ion2"
        };
        YCQQ.shareToQzone(function () {
          that.showToast('分享成功');
        }, function (failReason) {
          that.showToast('分享失败');
        }, Qzone);
        break;
      case 'weixin':
        Wechat.share({
          message: {
            title: movie.title,
            description: movie.summary,
            thumb: movie.images.large,
            mediaTagName: "TEST-TAG-001",
            messageExt: "这是第三方带的测试字段",
            messageAction: "<action>dotalist</action>",
            media: {
              type: Wechat.Type.WEBPAGE,
              webpageUrl: movie.share_url
            }
          },
          scene: Wechat.Scene.TIMELINE   // share to Timeline
        }, function () {
          alert("Success");
        }, function (reason) {
          alert("Failed: " + reason);
        });
        break;
    }
  }
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
