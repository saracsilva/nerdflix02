import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NerdflixComponent } from './components/nerdflix/nerdflix.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, NerdflixComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
