import { Component } from '@angular/core';
import { NavController, MenuController，ToastController } from 'ionic-angular';

declare var BMap, baidu_location;
@Component({
  selector: 'page-baidu-map',
  templateUrl: 'baidu-map.html'
})
export class BaiduMapPage {
  map: any;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public toastCtrl: ToastController) {
    this.menuCtrl.swipeEnable(false);
  }
  getLocation() {
    let that = this;
    baidu_location.getCurrentPosition((data) => {
      alert(JSON.stringify(data));
      if (data.locType == '61' || data.locType == '161') {
        this.map.centerAndZoom(new BMap.Point(data.lontitude, data.latitude), 15);
      } else {
        that.showToast('定位失败，请检查应用权限设置！');
      }

    }, (err) => {
      that.showToast('定位失败，请检查应用权限设置！');
    });
  }
  ionViewDidLoad() {
    this.map = new BMap.Map("Bmap");
    this.map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);
    this.map.addControl(new BMap.NavigationControl());
    this.map.enableScrollWheelZoom(true);
  }
  ionViewWillLeave() {
    this.menuCtrl.swipeEnable(true);
  }
  showToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
