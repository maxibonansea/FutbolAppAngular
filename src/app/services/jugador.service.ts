import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { Jugador } from '../models/jugador';
import { GLOBAL } from './global';

@Injectable()
export class JugadorService{

  public url: string;

    constructor(
        public _http: HttpClient
    ){
        this.url = GLOBAL.url;
    }

    getJugadores(){
        return this._http.get(this.url+'Jugador/GetAll').map(res => res);
    }

    getJugador(id){
      return this._http.get(this.url+'Jugador/Get/'+id).map(res => res);
  }

    addJugador(jugador: Jugador){
      let json = JSON.stringify(jugador);
      //let params = 'json='+json;
      let headers = new HttpHeaders({'Content-Type': 'application/json'});
      //let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});

      return this._http.post(this.url+'Jugador/Insert', json, {headers: headers}).map(res => res);
    }
}
