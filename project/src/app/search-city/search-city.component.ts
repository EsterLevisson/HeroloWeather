import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { City } from '../modules/weather/city.model';
import { weatherService } from '../modules/weather/weather.service';
import { searchService } from '../search.service';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.css']
})
export class SearchCityComponent implements OnInit {

  cities=[];
  citiesDEV=[{"Version":1,"Key":"178087","Type":"City","Rank":10,"LocalizedName":"Berlin","Country":{"ID":"DE","LocalizedName":"Germany"},"AdministrativeArea":{"ID":"BE","LocalizedName":"Berlin"}},{"Version":1,"Key":"2921","Type":"City","Rank":35,"LocalizedName":"Berazategui","Country":{"ID":"AR","LocalizedName":"Argentina"},"AdministrativeArea":{"ID":"B","LocalizedName":"Buenos Aires"}},{"Version":1,"Key":"312122","Type":"City","Rank":40,"LocalizedName":"Bern","Country":{"ID":"CH","LocalizedName":"Switzerland"},"AdministrativeArea":{"ID":"BE","LocalizedName":"Bern"}},{"Version":1,"Key":"47786","Type":"City","Rank":41,"LocalizedName":"Bertoua","Country":{"ID":"CM","LocalizedName":"Cameroon"},"AdministrativeArea":{"ID":"ES","LocalizedName":"East"}},{"Version":1,"Key":"258220","Type":"City","Rank":41,"LocalizedName":"Bergen","Country":{"ID":"NO","LocalizedName":"Norway"},"AdministrativeArea":{"ID":"12","LocalizedName":"Hordaland"}},{"Version":1,"Key":"170337","Type":"City","Rank":43,"LocalizedName":"Bergisch Gladbach","Country":{"ID":"DE","LocalizedName":"Germany"},"AdministrativeArea":{"ID":"NW","LocalizedName":"North Rhine-Westphalia"}},{"Version":1,"Key":"289801","Type":"City","Rank":45,"LocalizedName":"Berezniki","Country":{"ID":"RU","LocalizedName":"Russia"},"AdministrativeArea":{"ID":"PER","LocalizedName":"Perm'"}},{"Version":1,"Key":"318259","Type":"City","Rank":45,"LocalizedName":"Bergama","Country":{"ID":"TR","LocalizedName":"Turkey"},"AdministrativeArea":{"ID":"35","LocalizedName":"İzmir"}},{"Version":1,"Key":"326524","Type":"City","Rank":45,"LocalizedName":"Berdychiv","Country":{"ID":"UA","LocalizedName":"Ukraine"},"AdministrativeArea":{"ID":"18","LocalizedName":"Zhytomyr"}},{"Version":1,"Key":"326515","Type":"City","Rank":45,"LocalizedName":"Berdiansk","Country":{"ID":"UA","LocalizedName":"Ukraine"},"AdministrativeArea":{"ID":"23","LocalizedName":"Zaporizhzhya"}}];
  currentKey="215854";
  citiesNames: string[] = [];
  citiesKeys;
  inputText:string;
  @Output()
  onSearch:EventEmitter<City> =new EventEmitter();
  searchCities()
  {
    
     this._searchService.getCitiesFromServer(this.inputText).subscribe((data :any)=>{
       this.cities=data;
     });
    
     this.citiesNames=[];
     this.citiesKeys=[];
     if (this.cities!=null){
     this.cities.forEach(element => {
     this.citiesNames.push(element.LocalizedName);
     this.citiesKeys.push(element.Key);
    



    }
  });
  ;
  }
  getWeatherByCity()
  {debugger
    if (this.inputText!=""){
      debugger
      let cityKey:string=this.citiesKeys[this.citiesNames.indexOf(this.inputText)];
      let city=new City(cityKey,this.inputText);
      if(cityKey!=undefined){
      this.onSearch.emit(city);
      }
      else{
        alert("input not ligal");
      }
    }
    else{
      alert("input not ligal");
    }
    
  }
    constructor(private _searchService :searchService) { 
      let city=new City("215854","Tel Aviv");
      this.onSearch.emit(city);}
  
    ngOnInit(): void {
      
    }
  
  }
