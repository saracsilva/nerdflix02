import { Component } from '@angular/core';
import movies from './imdb-top-50.json';

interface Movie {}
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  moviesList: [
    { title: String; rating: Number; urlPoster: String; year: Number }
  ] = movies.data.movies;
  console = console;
}
