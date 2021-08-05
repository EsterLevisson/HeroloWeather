import { Component, OnInit, Input } from '@angular/core';

import { JsonpClientBackend } from '@angular/common/http';
import { weatherService } from '../weather.service';
import { stringify } from '@angular/compiler/src/util';
import { Router } from '@angular/router';


@Component({
  selector: 'app-favorite-city',
  templateUrl: './favorite-city.component.html',
  styleUrls: ['./favorite-city.component.scss']
})
export class FavoriteCityComponent implements OnInit {

  constructor(private _weatherServ: weatherService,private router:Router) { }

  @Input() city: any; 

 specificCity: any ={};

  ngOnInit() 
  {
    this.getCurrentCityWeather();
  }
  goToHomeWithFavorite(key:String)
  {
    this.router.navigate(['/']);

  }
  getCurrentCityWeather() 
  {
  this._weatherServ.getCurrentWeatherOfCityFromServer(this.city.Key).subscribe(data=>{
    this.specificCity = data[0];


  
  });

  }

}
