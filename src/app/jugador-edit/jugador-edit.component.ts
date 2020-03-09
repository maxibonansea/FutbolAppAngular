import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JugadorService } from '../services/jugador.service';
import { Jugador } from '../models/jugador';

@Component({
  selector: 'app-jugador-edit',
  templateUrl: '../jugador-add/jugador-add.component.html',
  styleUrls: ['../jugador-add/jugador-add.component.css'],
  providers: [JugadorService]
})
export class JugadorEditComponent implements OnInit {

  public titulo: string;
  public Jugador: Jugador;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _jugadorService: JugadorService
    ) {
      this.titulo="Editar Jugador";
      this.Jugador = new Jugador(0, '', '', '', 0, '');
    }

  ngOnInit() {
    console.log('jugador-edit.component.ts cargado...');
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
