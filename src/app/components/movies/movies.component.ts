import { Component } from '@angular/core';
import movies from './imdb-top-50.json';

interface Movie {}
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  moviesList: [{}] = movies.data.movies;
  console = console;
}
