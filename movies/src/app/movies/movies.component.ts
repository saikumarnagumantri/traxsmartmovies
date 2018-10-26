import { Component, OnInit, Input,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MoviesListComponent } from '../movies-list/movies-list.component';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  @Input('singleMovie')singleMovie:any;
 
  @ViewChild(MoviesListComponent)//To trigger the Search api when user clicked on search button

  private listComponent: MoviesListComponent;
 
  @ViewChild(MovieDetailsComponent)//To trigger the Search api when user clicked on search button
 
  private singleMovieApi: MovieDetailsComponent;
  
  movies:any;
  
  constructor(public http:HttpClient ) {}
  
  showLoader:boolean=false;
  ngOnInit() {
   
  }
//Getting the selected movie details
  movieDetials(movieId) {
   this.singleMovieApi.movie(movieId);
  }

  //Triggering the movies list api with search 
  searchValues(val){
    this.listComponent.listMovies(val);
  }
}
