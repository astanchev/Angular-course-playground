import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IMovie } from '../interfaces/movie';
import { IMoviePost } from '../interfaces/moviePost';
import { StorageService } from './storage.service';

@Injectable()
export class MoviesService {
  private userToken: string;

  constructor(
    private storage: StorageService,
    private http: HttpClient) {
    this.userToken = this.storage.getItem('userToken');
  }

  private get postHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'user-token': this.userToken
      })
    };
  };

  private get getHttpOptions() {
    return { headers: new HttpHeaders({ 'user-token': this.userToken }) };
  };

  createMovie(movie: IMoviePost): Observable<IMovie> {
    const url: string = environment.backendless.url + environment.backendless.endpoints.movie;

    return this.http.post<IMovie>(url, JSON.stringify(movie), this.getHttpOptions);
  }

  getAllMovies(search: string): Observable<IMovie[]> {
    let searchAddOn = search ? `?where=${escape(`title LIKE '%${search}%'`)}` : '';
    const url: string = environment.backendless.url + environment.backendless.endpoints.movie + searchAddOn;

    return this.http.get<IMovie[]>(url, this.getHttpOptions);
  }

  getMovieById() {

  }

  editMovie() {

  }

  deleteMovie() {

  }

  likeMovie() {

  }
}
