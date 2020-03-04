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
  public Jugador: Jugador;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _jugadorService: JugadorService
  ) {
    this.titulo = 'Crear un nuevo Jugador';
    this.Jugador = new Jugador(0, '', '', '', 0, '');
   }

  ngOnInit() {
    console.log('jugador-add.component.ts cargado...');
  }

  onSubmit() {
    console.log(this.Jugador);

    this._jugadorService.addJugador(this.Jugador).subscribe(
      (result : any) => {
        if(result.IsSuccess != true){
          console.log('Res Erro - ' + result);
        } else{
          this._router.navigate(['/home']);
          console.log('Res OK - ' + result);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
