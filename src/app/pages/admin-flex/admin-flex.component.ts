import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-flex',
  templateUrl: './admin-flex.component.html',
  styleUrls: ['./admin-flex.component.scss']
})
export class AdminFlexComponent implements OnInit {

  width_contenedor:number = 0
  oculto: boolean = false
  constructor() { }


  ngOnInit(): void {
    this.width_contenedor = 0
  }

  ocultarContenedor() {
    if (this.oculto === false) {
      this.width_contenedor = -20
      this.oculto = true
    }else {
      this.width_contenedor = 0
      this.oculto = false
    }
  }
  

}
