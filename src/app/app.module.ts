import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioprincipalComponent } from './inicio/pages/inicioprincipal/inicioprincipal.component';
import { PagesComponent } from './inicio/pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioprincipalComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
