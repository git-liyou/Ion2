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
  movieData: Array<any>;
  data: any;
  constructor(public http: Http) {

  }

  getAll() {
    return new Promise((resolve, reject) => {
      this.movieData = [];
      this.getTopData(0, 5).then(res => {
        this.movieData.push({ title: 'Top250', content: res });
        this.getInTheaters(0, 5).then(res => {
          this.movieData.push({ title: '正在热映', content: res });
          this.getComingSoon(0, 5).then(res => {
            this.movieData.push({ title: '即将上映', content: res });
            resolve(this.movieData);
          }, err => {
            reject(err);
          })
        }, err => {
          reject(err);
        })
      }, err => {
        reject(err);
      })
    })
  }


  getTopData(start, count) {
    return new Promise((resolve, reject) => {
      this.http.get('https://api.douban.com/v2/movie/top250?start=' + start + '&count=' + count).subscribe(res => {
        this.topData = res.json().subjects;
        resolve(this.topData);
      }, err => {
        reject(err);
      });
    })
  }
  getInTheaters(start, count) {
    return new Promise((resolve, reject) => {
      this.http.get('https://api.douban.com/v2/movie/in_theaters?start=' + start + '&count=' + count).subscribe(res => {
        this.topData = res.json().subjects;
        resolve(this.topData);
      }, err => {
        reject(err);
      });
    })
  }
  getComingSoon(start, count) {
    return new Promise((resolve, reject) => {
      this.http.get('https://api.douban.com/v2/movie/coming_soon?start=' + start + '&count=' + count).subscribe(res => {
        this.topData = res.json().subjects;
        resolve(this.topData);
      }, err => {
        reject(err);
      });
    })
  }
  getMovieDetail(id) {
    return new Promise((resolve, reject) => {
      this.http.get('https://api.douban.com/v2/movie/subject/' + id).subscribe(res => {
        this.topData = res.json();
        resolve(this.topData);
      }, err => {
        reject(err);
      });
    })
  }

  getZhihuLatest() {
    return new Promise((resolve, reject) => {
      this.http.get('http://news-at.zhihu.com/api/4/news/latest').subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }
  getZhihuBefore(date) {
    return new Promise((resolve, reject) => {
      this.http.get('http://news-at.zhihu.com/api/4/news/before/' + date).subscribe(res => {
        this.data = res.json().stories;
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }
  getZhihuContent(id) {
    return new Promise((resolve, reject) => {
      this.http.get('http://news-at.zhihu.com/api/4/news/' + id).subscribe(res => {
        this.data = res.json();
        resolve(this.data);
      }, err => {
        reject(err);
      });
    })
  }
}
