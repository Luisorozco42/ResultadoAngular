import { Component, Input } from '@angular/core';
import { Resultado } from 'src/app/resultado/interface/resultado';
import { Empleado } from '../../interface/empleado';
import { Orden } from '../../interface/orden';

@Component({
  selector: 'orden-table-c',
  templateUrl: './orden-table-c.component.html',
  styles: [
  ]
})
export class OrdenTableCComponent {
  @Input()
    public ordenes:Orden[] = [];

    @Input()
    public empleados: Empleado[] = [];

    @Input()
    public resultados: Resultado[] = [];

    public ordenesALF: Orden[] = [];

    get ordenesConResultado(): Orden[] {
      return this.filtrarOrdenesConResultado();
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

    filtrarOrdenesConResultado(): Orden[] {
      if (this.ordenes.length > 0 && this.resultados.length > 0) {
        this.ordenesALF = this.ordenes.filter(orden => {
          return this.resultados.some(resultado => resultado.idOrden === orden.idOrden);
        });

        return this.ordenesALF;
      } else {
        return [];
      }
    }
}
