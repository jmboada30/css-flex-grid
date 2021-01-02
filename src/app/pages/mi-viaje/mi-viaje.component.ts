import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-viaje',
  templateUrl: './mi-viaje.component.html',
  styleUrls: ['./mi-viaje.component.scss']
})
export class MiViajeComponent implements OnInit {

  footerActivo:boolean = false
  textoBotonFooter:string = 'Idioma y Moneda'

  constructor() { }

  ngOnInit(): void {
  }

  activarFooter() {
    if (this.footerActivo) {
      this.footerActivo = false
      this.textoBotonFooter = 'Idioma y Moneda'
    }else {
      this.footerActivo = true
      this.textoBotonFooter = 'X Cerrar'
    }
  }
}
