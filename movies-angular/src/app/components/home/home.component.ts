import { Component } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  get isLogged(): boolean {
    return !!this.userService.userToken;
  }
  loading: boolean = true;
  movies: IMovie[];

  constructor(private userService: UserService) { }

  getMovies(movies: IMovie[]){
    this.movies = movies;
  }

  showLoading(loading: boolean){
    this.loading = loading;
  }
}
