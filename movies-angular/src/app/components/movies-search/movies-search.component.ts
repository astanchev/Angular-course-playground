import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMovie } from 'src/app/interfaces/movie';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {
  @Output() movies: EventEmitter<IMovie[]> = new EventEmitter<IMovie[]>();
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.loading.emit(true);

    this.moviesService
      .getAllMovies('')
      .subscribe(data => {
        this.movies.emit(data);
        this.loading.emit(false);
      });
  }

  searchMovies(f: NgForm): void {
    const { search } = f.value;

    this.moviesService
      .getAllMovies(search)
      .subscribe(data => this.movies.emit(data));
  }
}
