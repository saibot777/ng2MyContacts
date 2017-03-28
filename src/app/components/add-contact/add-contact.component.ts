import { Component,EventEmitter,Output} from '@angular/core';
import {DevelopersService} from './../../services/developers.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent{


  constructor(private _developers_service : DevelopersService) { }

        addDeveloper(nameName:string,familyName:string,cityName:string,stateName:string,mobName:number){
              let developers = {
                                  name  : nameName,
                            familyName  : familyName,
                                   city : cityName,
                                  state : stateName,
                           phone_number : mobName
                               }
            this._developers_service.createDeveloper(developers).subscribe(
              data =>{ 
                        //refresh the list}
                       this._developers_service.getDevelopers();
                       return true;
                    },
              error=> {
                console.error("Error saving the developers!");
                return Observable.throw(error);
              }
            );
        }

        
         
         /*
         developers = [];
         addDeveloper(newDevName:string,newDevCity:string,newDevState:string,newDevMob:number){
           this.developers.push(newDevName + "," + newDevCity+","+newDevState+","+newDevMob);
         }

         deleteDeveloper(){
           this.developers.pop();
         }
         */
}
