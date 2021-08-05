import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';



@Injectable()
export class weatherService{
    CITIES:JSON;
    CurrentWeather:JSON;
    favoritesKeys:String[]=[];
    favoritesNames:String[]=[];
    favorites: { Key: string, Name: string }[]=[];
    getCurrentWeatherOfCityFromServer(locationKey:String,):Observable<JSON>
    {debugger
        let params = new HttpParams().set("apikey","dO4S5XWftQ2CV52C4ejumGALVr4DyFrI"); 
        return this._http.get<JSON>("http://dataservice.accuweather.com/currentconditions/v1/"+locationKey , { params: params}).pipe(
            retry(1),
            catchError(this.handleError)  
          );
    }
    get5dayWeatherOfCityFromServer(locationKey:String,):Observable<JSON>
    {   debugger
        let params = new HttpParams().set("apikey","dO4S5XWftQ2CV52C4ejumGALVr4DyFrI"); 
        return this._http.get<JSON>("http://dataservice.accuweather.com/forecasts/v1/daily/5day/"+locationKey , { params: params}).pipe(
            retry(1),
            catchError(this.handleError)  
          );
    }
    handleError(error) {

        let errorMessage:string;
     
        if (error.error instanceof ErrorEvent) {    
          // client-side error    
          errorMessage = error.error.message;
     
        } else {     
          // server-side error    
          errorMessage = error.status+" "+error.message;    
        }     
        window.alert(errorMessage);    
        return throwError(errorMessage);    
      }



    constructor (private _http:HttpClient)
      {
        
      }
}