import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Persona } from './../models/persona';
import { Global } from './Global'

@Injectable()
export class PersonaService {
    public url: string;

    constructor(private _http: HttpClient) {
        this.url = Global.urlPersonas;
    }

    getPersonas(): Observable<any> {
        var request = "/api/personas";
        return this._http.get(this.url + request);
    }
    mostrarMensaje() {
        console.log("SERVICIO HTTP");
    }
}