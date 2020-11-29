import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as data from '../../../../assets/mostpopularmovies.json';
import * as data250 from '../../../../assets/top250movies.json';


@Injectable({
  providedIn: 'root'
})
export class MoviesServiceMockService {

  constructor() { }

  getMostPopularMovies() {
    return new Observable<any>(observer => {
      observer.next((data as any).default);
    });
  }

  getTop250PopularMovies(): Observable<any> {
    return new Observable<any>(observer => {
      observer.next((data250 as any).default);
    });
  }

  getSearchMovie(filter: string): Observable<any> {
    return new Observable<any>(observer => {
      let temp = (data as any).default;
      temp.results = temp.items.filter(x => {
        return x.title.toLowerCase().indexOf(filter.toLowerCase()) > -1;
      })
      observer.next(temp);
    });
  }
}
