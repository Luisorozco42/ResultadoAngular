import { Component, Input, OnInit } from '@angular/core';
import { Orden } from '../../interface/orden';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdenService } from '../../services/orden.service';
import { switchMap} from 'rxjs';
import { Empleado } from '../../interface/empleado';

@Component({
  selector: 'shared-mostrar-orden-c',
  templateUrl: './mostrar-orden-c.component.html',
  styles: [
  ]
})
export class MostrarOrdenCComponent implements OnInit {
  public orden?: Orden;

    @Input()
    public empleados: Empleado[] = [];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private ordenService: OrdenService){}

  ngOnInit(): void{
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.ordenService.obetenerOrdenPorId(id)),
    ).subscribe(orden => {
      if (!orden){
        return this.router.navigateByUrl('');
      }
      return this.orden = orden;
    })

    this.ordenService.listarEmpleados().subscribe(response =>{this.listarEmpleados(response)});
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

  modificarDatosAL(orden: Orden): string {
    let datoModificado = "";

    return datoModificado;
  }

  listarEmpleados(empleado: Empleado[]): void {
    this.empleados = empleado
  }

}
