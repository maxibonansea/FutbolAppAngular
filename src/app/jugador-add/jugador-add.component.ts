import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JugadorService } from '../services/jugador.service';
import { Jugador } from '../models/jugador';

@Component({
  selector: 'app-jugador-add',
  templateUrl: './jugador-add.component.html',
  styleUrls: ['./jugador-add.component.css'],
  providers: [JugadorService]
})
export class JugadorAddComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = 'Crear un nuevo Jugador';
   }

  ngOnInit() {
    console.log('jugador-add.component.ts cargado...');
  }

}
