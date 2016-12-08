import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

declare var BMap, baidu_location;
@Component({
  selector: 'page-baidu-map',
  templateUrl: 'baidu-map.html'
})
export class BaiduMapPage {
  map: any;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.swipeEnable(false);
  }
  getLocation() {
    baidu_location.getCurrentPosition((data) => {
      alert(JSON.stringify(data));
      this.map.centerAndZoom(new BMap.Point(data.lontitude, data.latitude), 15);
    }, (err) => {
      alert("错误：" + JSON.stringify(err))
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
}
