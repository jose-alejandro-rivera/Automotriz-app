import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nextprod',
  templateUrl: './nextprod.component.html'
})
export class NextprodComponent {

  listaProducto: string[] = ['tubo pvc', 'sellante', 'fuerza media pegante'];

  habilitar: boolean = true;

  constructor() { }

  setHabilitar(): void {
    this.habilitar = (this.habilitar==true)? false: true;
  }

}
