import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController, MenuController } from 'ionic-angular';
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
  backButtonPressed: boolean = false;

  constructor(public platform: Platform, public toastCtrl: ToastController, public menuCtrl: MenuController) {
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
      this.platform.registerBackButtonAction((): any => {
        let activeVC = this.nav.getActive();
        let page = activeVC.instance;

        if (this.menuCtrl.isOpen()) return this.menuCtrl.close();

        if (!(page instanceof TabsPage)) {
          if (!this.nav.canGoBack()) {
            //当前页面为tabs，退出APP
            return this.showExit();
          }
          //当前页面为tabs的子页面，正常返回
          return this.nav.pop();
        }

        let tabs = page.tabs;
        let activeNav = tabs.getSelected();

        if (!activeNav.canGoBack()) {
          //当前页面为tab栏，退出APP
          return this.showExit();
        }
        //当前页面为tab栏的子页面，正常返回
        return activeNav.pop();
      }, 101);
    });
  }
  showExit() {
    if (this.backButtonPressed) this.platform.exitApp();
    else {
      let toast = this.toastCtrl.create({
        message: '再按一次退出应用',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
      this.backButtonPressed = true;
      setTimeout(() => {
        this.backButtonPressed = false;
      }, 2000)
    }
  }
  openPage(page) {
    this.nav.push(page.component);
  }
}
