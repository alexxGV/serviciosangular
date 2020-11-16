import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './Global'

@Injectable()
export class EmpleadoService {

    private url: string;

    //USAMOS LA BARRA BAJA DADO DE ES UNA INYECCCION
    constructor(private _http: HttpClient) {
        this.url = Global.urlEmpleados;
    }

    buscarEmpleadosSalario(salario: string): Observable<any> {
        var request = "/api/empleados/empleadossalario/" + salario;
        return this._http.get(this.url + request);
    }

}