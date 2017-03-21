import { Routes, RouterModule } from "@angular/router";
import {AddContactComponent} from "./components/add-contact/add-contact.component";
import {ListContactsComponent} from "./components/list-contacts/list-contacts.component";
import { LayoutComponent } from './layout.component';


const APP_ROUTES : Routes = [
                                { path: '' ,redirectTo: '/layout', pathMatch: 'full'},
                                { path: 'layout', component : LayoutComponent,
                                 children:[
                                           {
                                                path: 'list-contacts',
                                                component : ListContactsComponent,
                                                outlet: 'listContacts'
                                           },
                                            {
                                                path: 'add-contact',
                                                component : AddContactComponent,
                                                outlet: 'addContact'
                                            }
                                          ]
                                }
                            ];

export const routing = RouterModule.forRoot(APP_ROUTES);
