import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent {
  @Input() movies: IMovie[];

  constructor() { }
}
