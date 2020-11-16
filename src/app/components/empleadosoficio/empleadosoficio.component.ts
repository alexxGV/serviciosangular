import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';
import { Oficio } from './../../models/oficio';
import { OficioService } from './../../services/oficio.service';
@Component({
  selector: 'app-empleadosoficio',
  templateUrl: './empleadosoficio.component.html',
  styleUrls: ['./empleadosoficio.component.css'],
  providers: [OficioService]
})
export class EmpleadosoficioComponent implements OnInit {

  public oficios: Array<Oficio>;

  public of: string;
  public empleados: Array<Empleado>;

  constructor(private _servicio: OficioService) {
    this.oficios = [];
    this.empleados = [];
  }

  ngOnInit(): void {
    this._servicio.buscarOficios().subscribe(response => {
      for (var i = 0; i < response.length; i++) {
        this.oficios.push(response[i]);
      }
      console.log("OFICIOS ARRAY: " + this.oficios);
    }, error => {
      console.log(error);
    });
  }

  //AL MOMENTO DEL CAMBIO RECIBO EL EVENTO QUE NECESITO
  onChange(oficio) {
    //DEBEMOS OBTENER EL STRING DEL EVENTO CON .target.value
    this.of = oficio.target.value;

    //LLAMAREMOS AL METODO DEL SERVICIO PARA OBTENER LOS EMPLEADOS CON EL OFICIO RECIBIDO
    this._servicio.buscarEmpleadosOficio(this.of).subscribe(res => {
      this.empleados = res;
      console.log(this.empleados);
    });
  }
}
