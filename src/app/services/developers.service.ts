import {modelDevelopers} from './../models/developers';
import {Injectable} from '@angular/core';
import {Http,HttpModule,Headers,Response,RequestOptions} from '@angular/http';
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

  createDeveloper(developer){

    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers: headers});
    let body = JSON.stringify(developer);
    return this._http.post(this.private_url,body,headers).map((res:Response) => res.json());
  }


   _errorHandler(error:Response){
        console.error(error);
        return Observable.throw(error || "Server Error");
  }

}
