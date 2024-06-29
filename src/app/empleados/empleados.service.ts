import { Injectable } from '@angular/core';
import { IEmpleado } from './interfaces/empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  private _empleados: IEmpleado[] = [];

  get empleados(): IEmpleado[] {
    return this._empleados;
  }

  agregarEmpleado(Empleado: IEmpleado) {
    this._empleados.push(Empleado);
    console.log(Empleado);
    localStorage.setItem('empleado', JSON.stringify(this._empleados));
  }

  eliminarEmpleado(empleado: IEmpleado) {
    const index = this._empleados.findIndex((e) => e.numEmpleado === empleado.numEmpleado);
    if (index !== -1) {
      this._empleados.splice(index, 1);
      localStorage.setItem('empleado', JSON.stringify(this._empleados));
    }
  }

  constructor() {
    this._empleados = JSON.parse(localStorage.getItem('empleado')!) || [];
  }
}
