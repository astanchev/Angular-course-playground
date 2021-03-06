import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovie;
  count: number;
  isCreator: boolean;
  isLiked: boolean;
  loading: boolean = true;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private storage: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void { this.getMovieByID(); }

  getMovieByID() {
    const movieId: string = this.route.snapshot.paramMap.get('id');
    const userId: string = this.storage.getItem('userId');
    const userEmail: string = this.storage.getItem('email');

    this.moviesService
      .getMovieById(movieId)
      .subscribe(data => {
        this.movie = data;
        this.isCreator = data.ownerId === userId;
        const people = data.peopleLiked ?
                data.peopleLiked.split(', ').filter(x => x !== '') :
                [];
        this.isLiked = people.indexOf(userEmail) > - 1 ? true : false;
        this.count = people.length;
        this.loading = false;
      });
  }

  likeMovie(movieId: string): void {
    this.moviesService.likeMovie(movieId).subscribe(() => this.ngOnInit());
  }

  deleteMovie(movieId: string): void {
    this.moviesService.deleteMovie(movieId).subscribe();
    this.router.navigate(['/']);
  }
}
