import { Component,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent{

  constructor() { }

        addDeveloper(developerName:string,developerCity:string,developerState:string,developerMob:number){


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
