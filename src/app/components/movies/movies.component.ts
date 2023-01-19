import { Component, Output, EventEmitter } from '@angular/core';
import movies from './imdb-top-50.json';

interface Movie {}
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent {
  /* @Output() arrFavorite = new EventEmitter<any>(); */
  arrFavorite: any = [];
  moviesList: [
    { title: String; rating: Number; urlPoster: String; year: Number }
  ] = movies.data.movies;
  console = console;
  addFavorite(movie: any) {
    this.arrFavorite.push(movie);

    console.log(this.arrFavorite, 'test');
  }
}
