import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JugadorService } from '../services/jugador.service';
import { Jugador } from '../models/jugador';

@Component({
  selector: 'app-jugadores-list',
  templateUrl: './jugadores-list.component.html',
  styleUrls: ['./jugadores-list.component.css'],
  providers: [JugadorService]
})
export class JugadoresListComponent implements OnInit {
  public titulo: string;
  public jugadores: Jugador[];

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _jugadorService: JugadorService
  ) {
    this.titulo = 'Listado de jugadores';
  }

  ngOnInit() {
    console.log('Componente jugadores-list.component.ts cargando');

    this._jugadorService.getJugadores().subscribe(
      (result : any) => {
        console.log(result);
        if(result.IsSuccess != true){
          console.log(result.toString);
        } else{
          this.jugadores = result.Data;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }

}
