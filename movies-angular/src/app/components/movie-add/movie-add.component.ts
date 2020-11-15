import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IMoviePost } from 'src/app/interfaces/moviePost';
import { MoviesService } from 'src/app/services/movies.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent {

  constructor(
    private moviesService: MoviesService,
    private userService: UserService,
    private router: Router
  ) { }

  createMovie(f: NgForm): void {
    const { title, description, imageUrl } = f.value;

    const movie: IMoviePost = {
      creator: this.userService.email,
      title,
      description,
      imageUrl,
      peopleLiked: ''
    }

    this.moviesService.createMovie(movie).subscribe();
    this.router.navigate(['/']);
  }

}
