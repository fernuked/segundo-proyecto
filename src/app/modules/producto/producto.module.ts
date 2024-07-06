import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { PagesComponent } from './pages/pages.component';
import { FacturasComponent } from './pages/facturas/facturas.component';
import { ChurroComponent } from './pages/churro/churro.component';
import { ChurrosComponent } from './pages/churros/churros.component';
import { TortasComponent } from './pages/tortas/tortas.component';


@NgModule({
  declarations: [
    PagesComponent,
    FacturasComponent,
    ChurroComponent,
    ChurrosComponent,
    TortasComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
