import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NerdflixComponent } from './components/nerdflix/nerdflix.component';
import { MoviesComponent } from './components/movies/movies.component';
import { SeriesComponent } from './components/series/series.component';

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

const appRoutes: Routes = [
  { path: '', component: NerdflixComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'series', component: SeriesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NerdflixComponent,
    MoviesComponent,
    SeriesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
    CommonModule,
    [LottieModule.forRoot({ player: playerFactory })],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
