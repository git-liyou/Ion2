import { Component,ViewChild } from '@angular/core';
import { Tabs } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { MoviePage } from '../movie/movie';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('mainTabs') tabs:Tabs;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = NewsPage;
  tab2Root: any = MoviePage;
  tab3Root: any = AboutPage;

  constructor() {

  }
}
