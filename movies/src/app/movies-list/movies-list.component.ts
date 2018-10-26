import { Component, Input, Output,OnInit,EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  @Input() showLoader:boolean=false;
  movies:any;
  @Output() movieDetialsOutPut = new EventEmitter();
  constructor(public http: HttpClient) {
  }
count:number=0;
movieName:any;
  ngOnInit() {  
    this.listMovies();
  }
  listMovies(val=null) {
    this.showLoader=true;
    this.movieName=val;   
    let url="https://api.themoviedb.org/3/search/movie?api_key=b7a8abae531ec03408f586926bba2727&query="+val;
    this.http.get<any>(url).subscribe(
      data => {
        this.showLoader=false;
        this.count=data.results.length
        this.movies = data.results; 
      },
      err => console.error(err));
  }
  //Getting the movie from Movie component
  movieData(movie){
    this.movieDetialsOutPut.emit(movie);
  }
}
