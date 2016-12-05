import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { NewsPage } from '../pages/news/news';
import { AboutPage } from '../pages/about/about';
import { MoviePage } from '../pages/movie/movie';
import { MovieCategoryPage } from '../pages/movie-category/movie-category';
import { MovieDetailPage } from '../pages/movie-detail/movie-detail';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';

import { Data } from '../providers/data';
import { ImageLoader } from '../components/image-loader/image-loader';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    NewsPage,
    AboutPage,
    MoviePage,
    MovieCategoryPage,
    MovieDetailPage,
    Page1,
    Page2,
    ImageLoader
  ],
  imports: [
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages: true,
      platforms: {
        ios: {
          backButtonText: "返回"
        }
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    NewsPage,
    AboutPage,
    MoviePage,
    MovieCategoryPage,
    MovieDetailPage,
    Page1,
    Page2
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler },Data]
})
export class AppModule { }
