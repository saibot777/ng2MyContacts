
import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import {AddContactComponent} from "./components/add-contact/add-contact.component";
import {ListContactsComponent} from "./components/list-contacts/list-contacts.component";
import {AppComponent}          from "./app.component";


const APP_ROUTES : Routes = [
                                { path: '',redirectTo: '/app', pathMatch: 'full'}, 
                                { path: 'app', component : AppComponent,
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