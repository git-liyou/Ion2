import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TabsPage } from '../pages/tabs/tabs';
import { BaiduMapPage } from '../pages/baidu-map/baidu-map';
import { EchartsPage } from '../pages/echarts/echarts';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{ title: string, icon: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: '百度地图', icon: 'md-map', component: BaiduMapPage },
      { title: 'echarts', icon: 'md-analytics', component: EchartsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }
}
