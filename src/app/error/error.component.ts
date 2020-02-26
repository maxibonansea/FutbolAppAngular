import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  public titulo: string;

  constructor() {
    this.titulo = 'Error! Página no encontrada.';
  }

  ngOnInit() {
    console.log('Componente: error.componente.ts - Cargado');
  }

}
