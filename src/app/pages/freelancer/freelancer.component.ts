import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-freelancer',
  templateUrl: './freelancer.component.html',
  styleUrls: ['./freelancer.component.scss']
})
export class FreelancerComponent implements OnInit {

  // Datos que usaremos:
datos:any[] = [
      {
          "id" : 1,
          "nombre" : "Sitio Web",
          "desc" : "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      },
      {
          "id" : 2,
          "nombre" : "App",
          "desc" : "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      },
      {
          "id" : 3,
          "nombre" : "App",
          "desc" : "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      },
      {
          "id" : 4,
          "nombre" : "Aplicación Web",
          "desc" : "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      },
      {
          "id" : 5,
          "nombre" : "App",
          "desc" : "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      },
      {
          "id" : 6,
          "nombre" : "App",
          "desc" : "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      },
      {
          "id" : 7,
          "nombre" : "App",
          "desc" : "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      },
      {
          "id" : 8,
          "nombre" : "App",
          "desc" : "Molestias quam iure quia. Magni accusamus, itaque alias ipsa."
      }
  ]
;

  constructor() { }

  ngOnInit(): void {
    console.log(this.datos);
  }

}
