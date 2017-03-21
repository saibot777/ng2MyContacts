import {modelDevelopers} from './../models/developers';
import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class DevelopersService {
  developersModel:modelDevelopers[] =[];

   private_url : string =  "./app/developers.json";
    constructor (private _http :Http){}

  getDevelopers():Observable<modelDevelopers[]>{
        return this._http.get(this.private_url)
                         .map((response:Response)=><modelDevelopers[]>response.json())
                         .catch(this._errorHandler);
  }

   _errorHandler(error:Response){
        console.error(error);
        return Observable.throw(error || "Server Error");
  }

}
