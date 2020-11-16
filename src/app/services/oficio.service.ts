import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Global } from './Global'
import { ThrowStmt } from '@angular/compiler';

@Injectable()
export class OficioService {

    public url: string;

    constructor(private _http: HttpClient) {
        this.url = Global.urlEmpleados;
    }

    buscarOficios(): Observable<any> {
        var request = "/api/Empleados/oficios";
        return this._http.get(this.url + request);
    }
}