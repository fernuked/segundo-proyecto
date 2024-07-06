import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
import { PagesComponent } from './pages/pages.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  declarations: [
    PagesComponent,
    IniciosesionComponent,
    RegistroComponent,
    ServicesComponent
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule
  ]
})
export class AutentificacionModule { }
