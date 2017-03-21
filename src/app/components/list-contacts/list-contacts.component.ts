import { Component} from '@angular/core';
import {DevelopersService} from './../../services/developers.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent {

  developers :any = [];

  constructor (private _developers_service : DevelopersService){}

	ngOnInit(){
		this._developers_service.getDevelopers().subscribe(developers =>this.developers = developers);
	}

}
