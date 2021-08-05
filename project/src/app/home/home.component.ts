import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cityKey:String;
  onSearch: EventEmitter<String> = new EventEmitter();
  getCityId(cityKey:String)
  {
    this.cityKey=cityKey;
    this.onSearch.emit(cityKey);
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}
