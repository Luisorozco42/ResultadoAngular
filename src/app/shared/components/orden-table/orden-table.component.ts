import { Component, Input } from '@angular/core';
import { Orden } from '../../interface/orden';
import { Empleado } from '../../interface/empleado';
import { Resultado } from 'src/app/resultado/interface/resultado';

@Component({
    selector: 'orden-table',
    templateUrl: './orden-table.component.html',
    styles: [
    ]
  })
  export class OrdenTableComponent {
    @Input()
    public ordenes:Orden[] = [];

    @Input()
    public empleados: Empleado[] = [];

    @Input()
    public resultados: Resultado[] = [];

    get ordenesSinResultado(): Orden[] {
      return this.filtrarOrdenesSinResultado();
    }

    modificarDatoE(orden: Orden): string {
      let datoModificado = "";
  
      const empleado = this.empleados.find(e => e.idEmpleado === orden.idEmpleado);
  
      if (empleado != null) {
        datoModificado = empleado.primerNombre + " " + empleado.primerApellido; 
      } else {
        datoModificado = "Dato no existe";
      }
  
      return datoModificado;
    }

    modificarDatosTO(orden: Orden): string {
      let datoModificado = "";
  
      if (orden.idTipoOrden === 1) {
        datoModificado = "Cita"; 
      } else if (orden.idTipoOrden === 2) {
        datoModificado = "Emergencia";
      }else{
        datoModificado = "Rutina";
      }
      return datoModificado;
    }

    filtrarOrdenesSinResultado(): Orden[] {
      if (this.ordenes.length > 0 && this.resultados.length > 0) {
        return this.ordenes.filter(orden => {
          return this.resultados.some(resultado => resultado.idOrden != orden.idOrden);
        });
      } else {
        return [];
      }
    }
  }