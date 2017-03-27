import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {routing} from "./app.routes";
import { DevelopersService} from "./services/developers.service";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListContactsComponent,
    AddContactComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing,
  ],
  providers: [DevelopersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
