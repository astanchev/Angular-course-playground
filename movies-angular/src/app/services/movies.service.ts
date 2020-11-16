import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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
    const userToken: string = this.storage.getItem('userToken');
    const options = { headers: new HttpHeaders({ 'user-token': userToken }) };

    return this.http.get<IMovie[]>(url, options);
  }

  getMovieById(id: string): Observable<IMovie> {
    const url: string = environment.backendless.url + environment.backendless.endpoints.movie + `/${id}`;

    return this.http.get<IMovie>(url, this.getHttpOptions);
  }

  editMovie() {

  }

  deleteMovie(id: string): Observable<void> {
    const url: string = environment.backendless.url + environment.backendless.endpoints.movie + `/${id}`;

    return this.http.delete<void>(url, this.getHttpOptions);
  }

  likeMovie(id: string): Observable<void> {
    const email: string = this.storage.getItem('email');
    const url: string = environment.backendless.url + environment.backendless.endpoints.movie + `/${id}`;

    return this.getMovieById(id)
    .pipe(
      switchMap(movie => {
        const people = movie.peopleLiked ?
                      movie.peopleLiked.split(', ').filter(x => x !== '') :
                      [];
        people.push(email);
        return this.http.put<void>(url, JSON.stringify({ peopleLiked: people.join(', ') }), this.postHttpOptions);
      })
    )
  }
}
