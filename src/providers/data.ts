import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Data {
  topData: Array<any>;
  movieData:Array<any>;
  constructor(public http: Http) {
    
  }

  getAll() {
    if (this.movieData) {
      return Promise.resolve(this.movieData);
    } else {
      return new Promise(resolve => {
        this.movieData = [];
        this.getTopData(0, 5).then(res => {
          this.movieData.push({ title: 'Top250', content: res });
          this.getInTheaters(0, 5).then(res => {
            this.movieData.push ({ title: '正在热映', content: res });
            this.getComingSoon(0, 5).then(res => {
              this.movieData.push({ title: '即将上映', content: res });
              resolve(this.movieData);
            })
          })
        })

      })
    }
  }


  getTopData(start, count) {
    return new Promise(resolve => {
      this.http.get('https://api.douban.com/v2/movie/top250?start=' + start + '&count=' + count).subscribe(res => {
        this.topData = res.json().subjects;
        resolve(this.topData);
      });
    })
  }
  getInTheaters(start, count) {
    return new Promise(resolve => {
      this.http.get('https://api.douban.com/v2/movie/in_theaters?start=' + start + '&count=' + count).subscribe(res => {
        this.topData = res.json().subjects;
        resolve(this.topData);
      });
    })
  }
  getComingSoon(start, count) {
    return new Promise(resolve => {
      this.http.get('https://api.douban.com/v2/movie/coming_soon?start=' + start + '&count=' + count).subscribe(res => {
        this.topData = res.json().subjects;
        resolve(this.topData);
      });
    })
  }

}
