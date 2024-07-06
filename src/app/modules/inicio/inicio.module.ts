import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { ComponentesComponent } from './componentes/componentes.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { PagesComponent } from './pages/pages.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InicioprincipalComponent } from './pages/inicioprincipal/inicioprincipal.component';
import { IniciosesionComponent } from './pages/iniciosesion/iniciosesion.component';


@NgModule({
  declarations: [
    ComponentesComponent,
    CardsComponent,
    PagesComponent,
    InicioComponent,
    InicioprincipalComponent,
    IniciosesionComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
