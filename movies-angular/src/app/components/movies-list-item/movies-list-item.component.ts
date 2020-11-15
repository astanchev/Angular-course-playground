import { Component, Input } from '@angular/core';
import { IMovie } from 'src/app/interfaces/movie';

@Component({
  selector: 'app-movies-list-item',
  templateUrl: './movies-list-item.component.html',
  styleUrls: ['./movies-list-item.component.css']
})
export class MoviesListItemComponent {
  @Input() movie: IMovie;

  constructor() { }
}
