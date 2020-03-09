import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JugadorService } from '../services/jugador.service';
import { Jugador } from '../models/jugador';

@Component({
  selector: 'app-jugador-detail',
  templateUrl: './jugador-detail.component.html',
  styleUrls: ['./jugador-detail.component.css'],
  providers: [JugadorService]
})
export class JugadorDetailComponent implements OnInit {
  public titulo: string;
  public Jugador: Jugador;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _jugadorService: JugadorService
  ) {
    this.titulo = 'Consultar detalle de un Jugador';
  }

  ngOnInit() {
    console.log('jugador-detail.component.ts cargado...');
    this.getJugador();
  }

  getJugador(){
    this._route.params.forEach((params: Params) => {
      let id = params['id'];
      this._jugadorService.getJugador(id).subscribe(
        (result : any) => {
          if(result.IsSuccess != true){
            console.log('Res Erro - ' + result);
            this._router.navigate(['/jugadores']);
          } else{
            this.Jugador=result.Data;
            console.log('Res OK - ' + result);
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }
}
