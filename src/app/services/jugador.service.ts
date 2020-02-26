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
}
