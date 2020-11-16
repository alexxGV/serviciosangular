import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Empleado } from './../../models/empleado';
import { EmpleadoService } from './../../services/empleado.service'


@Component({
  selector: 'app-empleariossalario',
  templateUrl: './empleariossalario.component.html',
  styleUrls: ['./empleariossalario.component.css'],
  providers: [EmpleadoService]
})
export class EmpleariossalarioComponent implements OnInit {
  public empleados: Array<Empleado>;
  @ViewChild("cajasalario") cajasalario: ElementRef;

  buscarEmpleados() {
    var salario = this.cajasalario.nativeElement.value;
    this._service.buscarEmpleadosSalario(salario).subscribe(response => {
      this.empleados = response;
    }, error => {
      console.log(error);

    })
  }

  constructor(private _service: EmpleadoService) {
    this.empleados = [];
  }

  ngOnInit(): void {
  }

}
