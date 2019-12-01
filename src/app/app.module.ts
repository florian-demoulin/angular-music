import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { UsernameComponent } from './username/username.component';
import { HobbyComponent } from './hobby/hobby.component';
import { HttpClientModule } from "@angular/common/http";
import { HobbyService } from "./hobby.service";
import { ChanteurComponent } from './chanteur/chanteur.component';

@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    HobbyComponent,
    ChanteurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HobbyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
