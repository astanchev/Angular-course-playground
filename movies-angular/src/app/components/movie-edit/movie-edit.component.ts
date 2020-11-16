import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IMovieEdit } from 'src/app/interfaces/movieEdit';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  editForm: FormGroup;
  movieId: string;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.paramMap.get('id');

    this.moviesService
      .getMovieById(this.movieId)
      .subscribe(movie => {
        this.editForm = new FormGroup({
          title: new FormControl(movie.title),
          description: new FormControl(movie.description),
          imageUrl: new FormControl(movie.imageUrl)
        });
      });
  }

  editMovie(): void {
    const { title, description, imageUrl } = this.editForm.value;
    const movie: IMovieEdit = {
      title,
      description,
      imageUrl
    };

    this.moviesService.editMovie(movie, this.movieId).subscribe();
    this.router.navigate(['/movie/details', this.movieId]);
  }

  goBack(): void {
    this.location.back();
  }

}
