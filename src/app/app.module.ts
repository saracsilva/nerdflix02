import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NerdflixComponent } from './components/nerdflix/nerdflix.component';
import { MoviesComponent } from './components/movies/movies.component';

const appRoutes: Routes = [
  { path: '', component: NerdflixComponent },
  { path: 'movies', component: MoviesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NerdflixComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
