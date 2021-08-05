import { Component, OnInit } from '@angular/core';
import { weatherService } from '../weather.service';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

citiesArr: { Key:string,Name:string }[] =[];

constructor(private _weatherService: weatherService) { }

ngOnInit() {
  this.citiesArr = this._weatherService.favorites;
}

}
