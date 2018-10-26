import { Component, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movies-search',
  templateUrl: './movies-search.component.html',
  styleUrls: ['./movies-search.component.css']
})
export class MoviesSearchComponent implements OnInit {
  searchMovie:any=null;
  @Output()searchValue= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  fiterData(){
    this.searchValue.emit(this.searchMovie);
  }
}
