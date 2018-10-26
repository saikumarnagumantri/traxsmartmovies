import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesSearchComponent } from './movies-search/movies-search.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Routes, RouterModule} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import { MintohrsPipe } from './pipes/mintohrs.pipe';
import { IframePipe } from './pipes/iframe.pipe';
import { TextLimitPipe } from './pipes/text-limit.pipe';
const routes: Routes = [
  { path: '', component: MoviesComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesSearchComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    MintohrsPipe,
    IframePipe,
    TextLimitPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
