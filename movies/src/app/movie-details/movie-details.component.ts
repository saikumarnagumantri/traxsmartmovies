import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  singleMovie:any=null;
  constructor(public http:HttpClient) { }
  showLoader:boolean=false;//Show loader
  youtudeUrl:'https://www.youtube.com/embed/';
  ngOnInit() {
  }
  //getting the single movie details
  movie(val=null) {
    this.showLoader=true;
    let url="https://api.themoviedb.org/3/movie/"+val+"?api_key=b7a8abae531ec03408f586926bba2727&append_to_response=videos,images";    
    this.http.get<any>(url).subscribe(
      data => {
        console.log(data.videos.results.length);
        this.singleMovie = data; 
        this.showLoader=false;
      },
      err => console.error(err));
  }
}
