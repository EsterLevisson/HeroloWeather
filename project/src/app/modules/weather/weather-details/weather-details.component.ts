import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { City } from '../city.model';
import { weatherService } from '../weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
@Input() private getKeyOnSearch: EventEmitter<City>;
cityKey:String="215854";
currentWeather:JSON;
fiveDayWeather: any ={};
d1:Date;
currentCity=new City("215854","Tel Aviv");
getDay(s:string)
{
  var stringDate = s;
  var d= new Date(stringDate );
  return d;
}
getWeather()
{
  document.getElementById("addOrRemove").innerText="add to favorite";
    this._weatherService.getCurrentWeatherOfCityFromServer(this.currentCity.key).subscribe(data=>{
      this.currentWeather=data;
      

    })
    this._weatherService.get5dayWeatherOfCityFromServer(this.currentCity.key).subscribe(data=>{
      this.fiveDayWeather=data;
         
     
    })
    
}
addToFavorites()
{
  if (this.cityKey!=undefined){
    let index=this._weatherService.favoritesKeys.indexOf(this.currentCity.key);
    if(index!=-1)
    {     
      this._weatherService.favoritesNames.splice(index);
      this._weatherService.favoritesKeys.splice(index);
      this._weatherService.favorites.splice(index);
      document.getElementById("addOrRemove").innerText="add to favorite";
      alert("removed favorites")
    }
    else
    {
      this._weatherService.favoritesKeys.push(this.currentCity.key);
      this._weatherService.favoritesNames.push(this.currentCity.name);
      this._weatherService.favorites.push({ Key: this.currentCity.key, Name: this.currentCity.name });
      document.getElementById("addOrRemove").innerText="remove to favorite";
      alert("added to favorites")
    }
  
  
  }
  else{
    alert("city not choose");
  }
}
  constructor(private _weatherService :weatherService) { }

  ngOnInit(): void {
    
    this.getWeather();
    if (this.getKeyOnSearch) {
      this.getKeyOnSearch.subscribe(data => {
      this.currentCity.key=data.key;
      this.currentCity.name=data.name;
       this.getWeather();
      });
    }
  }

}
