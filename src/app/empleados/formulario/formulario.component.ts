import { Component } from '@angular/core';
import { IEmpleado } from '../interfaces/empleado';
import { EmpleadosService } from '../empleados.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent {
  nuevo: IEmpleado = {
    numEmpleado: 0,
    Nombre: '',
    Correo: '',
    Telefono: 0,
    fechaNacimiento: '',
    Sexo: 0,
  };

  constructor(private EmpleadosService: EmpleadosService) {}

  agregar() {
    if (this.nuevo.numEmpleado === null) return;
    if (this.nuevo.Nombre.trim().length === 0) return;
    if (this.nuevo.Correo.trim().length === 0) return;
    if (this.nuevo.Telefono === null) return;
    if (this.nuevo.fechaNacimiento.trim().length === 0) return;
    if (this.nuevo.Sexo === null) return;

    this.EmpleadosService.agregarEmpleado(this.nuevo);
    this.nuevo = {
      numEmpleado: 0,
      Nombre: '',
      Correo: '',
      Telefono: 0,
      fechaNacimiento: '',
      Sexo: 0,
    };
  }
}
