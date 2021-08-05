import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';

import { weatherService } from './weather.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavoriteCityComponent } from './favorite-city/favorite-city.component';



@NgModule({
  declarations: [WeatherDetailsComponent,FavoritesComponent,FavoriteCityComponent],
  imports: [
    CommonModule,HttpClientModule,FormsModule
  ],
  providers:[weatherService],
  exports:[WeatherDetailsComponent,FavoritesComponent,FavoriteCityComponent]
})
export class WeatherModule { }
