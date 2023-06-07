import { Component, OnInit } from '@angular/core';
import { Orden } from '../../interface/orden';
import { OrdenService } from '../../services/orden.service';
import { Empleado } from '../../interface/empleado';
import { Resultado } from 'src/app/resultado/interface/resultado';
import { Examen } from 'src/app/resultado/interface/examen';
import { ODetalle } from '../../interface/odetalle';
import { ResultadoService } from 'src/app/resultado/services/resultado.service';

type TipoOrden = 1 | 2 | 3
type AreaLab = 1 | 2

@Component({
  selector: 'shared-ordensin-page',
  templateUrl: './ordensin-page.component.html',
  styles: [
  ]
})
export class OrdensinPageComponent implements OnInit{
  public ordenes: Orden[] = [];
  public ordenes2: Orden[] = [];
  public ordenes3: Orden[] = [];
  public empleados: Empleado[] = [];
  public resultados: Resultado[] = [];
  public examenes: Examen[] = [];
  public oDetalle: ODetalle[] = [];


  public tipoOrdenes: TipoOrden[] = [1, 2, 3];
  public areaLab: AreaLab[] = [1, 2];
  public seleccionAL?: AreaLab;
  public seleccionTO?: TipoOrden;

  constructor(private ordenService: OrdenService, private resultadoService: ResultadoService) {}

  ngOnInit(): void {
    this.buscarPorTipoOrden(3);
    this.ordenService.listarEmpleados().subscribe(response =>{this.listarEmpleados(response)});
    this.ordenService.listarResultados().subscribe(response =>{this.listarResultados(response)});
    this.ordenService.listarOrdenes().subscribe(response => {this.listarOrdenes(response)});
    this.resultadoService.listaExamen().subscribe(response =>{this.listarExamenes(response)});
    this.ordenService.listarODetalles().subscribe(response =>{this.listarODetalles(response)});
  }

  listarExamenes(examen: Examen[]): void {
    this.examenes = examen;
  }

  listarOrdenes(orden: Orden[]): void {
    this.ordenes2 = orden;
    this.ordenes3 = this.ordenes2;
}

listarODetalles(ordenDet: ODetalle[]): void {
  this.oDetalle = ordenDet;
}

  listarEmpleados(empleado: Empleado[]): void {
    this.empleados = empleado
  }

  listarResultados(resultado: Resultado[]): void {
    this.resultados = resultado
  }

  buscarPorTipoOrden(tipoOrden: TipoOrden): void {
    this.seleccionTO = tipoOrden;
    this.ordenService.buscarPorTipoOrden(tipoOrden)
    .subscribe(ordene => {
      this.ordenes = ordene
    });
  }

  modificarTipoOrden(id: number): string {
    let nombreOrden = "";

    if (id === 1){
      nombreOrden = "Citas";
    }else if (id === 2){
      nombreOrden = "Emergencia";
    }else{
      nombreOrden = "Rutina";
    }
    return nombreOrden;
  }

  modificarAreaLab(id: number): string {
    let areaLaboratorio = "";

    if (id === 1){
      areaLaboratorio = "hematología";
    }else{
      areaLaboratorio = "quimica";
    }
    return areaLaboratorio;
  }

  filtrarPorIdOrden(id: number): void {
    this.ordenes2 = this.ordenes3;
    if(id === 1){
      let examenesF = this.examenes.filter(examenes => examenes.idAreaLabServicio === id);
      let idExamenesFiltrados = examenesF.map(examen => examen.idExamen);

      let oDetallesF = this.oDetalle.filter(oDetalles => {
        return idExamenesFiltrados.some(idExamenes => oDetalles.idexamen === idExamenes);
      });

      let idODetalles = oDetallesF.map(oDetalle => oDetalle.idOrden);
      let ordenesF = this.ordenes3.filter(orden => {
        return idODetalles.some(idOrden => orden.idOrden === idOrden);
      });

      this.ordenes2 = ordenesF
      this.ordenes = this.ordenes2;
      this.ordenes2 = this.ordenes3;
    }else{
      let examenesF = this.examenes.filter(examenes => examenes.idAreaLabServicio === id);
      let idExamenesFiltrados = examenesF.map(examen => examen.idExamen);

      let oDetallesF = this.oDetalle.filter(oDetalles => {
        return idExamenesFiltrados.some(idExamenes => oDetalles.idexamen === idExamenes);
      });

      let idODetalles = oDetallesF.map(oDetalle => oDetalle.idOrden);
      let ordenesF = this.ordenes3.filter(orden => {
        return idODetalles.some(idOrden => orden.idOrden === idOrden);
      })

      this.ordenes2 = ordenesF
      this.ordenes = this.ordenes2;
      this.ordenes2 = this.ordenes3;
    }
  }
}
