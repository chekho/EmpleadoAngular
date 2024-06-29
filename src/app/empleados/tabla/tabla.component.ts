import { Component } from '@angular/core';
import { EmpleadosService } from '../empleados.service';
import { IEmpleado } from '../interfaces/empleado';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css',
})
export class TablaComponent {
  constructor(private EmpleadosService: EmpleadosService) {}

  get empleados(): IEmpleado[] {
    return this.EmpleadosService.empleados;
  }

  eliminarEmpleado(data: IEmpleado) {
    this.EmpleadosService.eliminarEmpleado(data);
  }
}
