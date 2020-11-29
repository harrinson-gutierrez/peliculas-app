import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BaseResponse, BaseResponseFilter } from 'src/app/data/models/base-response';
import { Movie } from 'src/app/data/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http: HttpClient) { }

  getMostPopularMovies(): Observable<BaseResponse<Movie>> {
    return this._http.get<BaseResponse<Movie>>(`${environment.api.url}/MostPopularMovies/${environment.api.key}`);
  }

  getTop250PopularMovies(): Observable<BaseResponse<Movie>> {
    return this._http.get<BaseResponse<Movie>>(`${environment.api.url}/Top250Movies/${environment.api.key}`);
  }

  getSearchMovie(filter: string): Observable<BaseResponseFilter<Movie>> {
    return this._http.get<BaseResponseFilter<Movie>>(`${environment.api.url}/SearchMovie/${environment.api.key}/${filter}`);
  }
}
