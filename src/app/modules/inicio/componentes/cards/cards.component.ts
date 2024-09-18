import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardComponent {
  public info: Producto[];

  constructor() {
    this.info = [
      {
        id: "",
        nombre: "Facturas X DOC",
        precio: 6.000,
        imagen: "https://marchelo.com.ar/wp-content/uploads/2019/04/Facturas-surtidas.jpg",
        alt: "",
        descripcion: "FACTURAS X DOCENA; SABORES A ELECCION."
      },
      {
        id: "",
        nombre: "Churros",
        precio: 5.000,
        imagen: "https://media.ambito.com/p/58e4f0b3908595d5ef951723768004b3/adjuntos/239/imagenes/040/424/0040424677/churrosjpg.jpg",
        alt: "",
        descripcion: "CHURROS X DOCENA O MEDIA; CON DULCE DE LECHE O SIN. <3"
      },

      {
        id: "",
        nombre: "Selva Negra",
        precio: 10.000,
        imagen: "https://content-cocina.lecturas.com/medio/2018/07/19/paso-a-paso-para-realizar-selva-negra-bizcocho-de-cacao-y-cerezas-resultado-final_d7f58c97_600x600.jpg",
        alt: "",
        descripcion: "SELVA NEGRA BIEN RICA."
      }

    ]
  }

}

