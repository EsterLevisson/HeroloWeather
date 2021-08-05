import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherModule } from './modules/weather/weather.module';
import { weatherService } from './modules/weather/weather.service';
import { SearchCityComponent } from './search-city/search-city.component';
import { FormsModule } from '@angular/forms';
import { searchService } from './search.service';
import { Route, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './modules/weather/favorites/favorites.component';

const ROUTES:Route[]=[
  
  {path:"favorite",component:FavoritesComponent},
  // {path:"Home",component:HomeComponent},
  {path:"",component:HomeComponent},
  {path:"**",component:PageNotFoundComponent},

];
// const APP_ROUTS:Route[]=[
//   {path:"",redirectTo:"Home",pathMatch:"full",canActivate:[LoginService]},
//   {path:"students",component:StudentListComponent,canActivate:[LoginService] },
//   {path:"setting",loadChildren:()=>import("./modules/setting/setting.module").then(s=>s.SettingModule)},
//   {path:"Home",component:HomeComponent,canActivate:[LoginService]},
//   {path:"details/:id",component:StudentDetailsFormMDComponent},
//   {path:"details",component:StudentDetailsFormMDComponent},
//   {path:"login",component:LoginComponent},
//   {path:"**",component:PageNotFoundComponent}
// ];
@NgModule({
  declarations: [
    AppComponent,
    SearchCityComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
   
    WeatherModule,
    FormsModule,
    RouterModule,
    RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' })
  ],
  providers: [weatherService,searchService],
  bootstrap: [AppComponent]
}
)
export class AppModule {
  
 }
