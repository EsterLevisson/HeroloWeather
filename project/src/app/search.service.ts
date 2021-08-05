import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";



@Injectable()
export class searchService{
    CITIES:JSON;



    getCitiesFromServer(city :string):Observable<JSON>
    {
        let params = new HttpParams().set("apikey","dO4S5XWftQ2CV52C4ejumGALVr4DyFrI").set("q", city); 
        return this._http.get<JSON>("http://dataservice.accuweather.com/locations/v1/cities/autocomplete", { params: params}).pipe(
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