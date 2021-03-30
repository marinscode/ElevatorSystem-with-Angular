import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddressListComponent } from './addresses/address-list/address-list.component';
import { AddressCreateComponent } from './addresses/address-create/address-create.component';
import { AppRoutingModule } from './app-routing.module';
import { ElevatorListComponent } from './elevator/elevator-list/elevator-list.component';
import { ElevatorCreateComponent } from './elevator/elevator-create/elevator-create.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddressListComponent,
    AddressCreateComponent,
    ElevatorListComponent,
    ElevatorCreateComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
