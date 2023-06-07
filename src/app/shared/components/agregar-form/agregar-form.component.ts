import { Component, Input } from '@angular/core';
import { Resultado } from 'src/app/resultado/interface/resultado';
import { OrdenService } from '../../services/orden.service';
import { Orden } from '../../interface/orden';
import { Examen } from 'src/app/resultado/interface/examen';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'shared-agregar-form',
  templateUrl: './agregar-form.component.html',
  styles: [
  ]
})
export class AgregarFormComponent {
  public resultado: Resultado = new Resultado();

  resultadoform: FormGroup;

  @Input()
  public ordenEnviada: Orden = new Orden();

  @Input()
  public ordenes: Orden[] = [];

  @Input()
  public examenes: Examen[] = [];

  @Input()
  public resultados:Resultado[] = [];

  get ordenesSinResultado(): Orden[] {
    return this.filtrarOrdenesSinResultado();
  }


  // Función para enviar el formulario

  constructor(public formBuilder: FormBuilder, private ordenService: OrdenService) {
    this.resultadoform = this.formBuilder.group({
      idResultados: [0],
      idExamen: [],
      idOrden: [],
      resultado: [],
      observaciones: [],
      procesado: [],
      fechaProcesa: [new Date("2023-05-22 00:00:00.000000")],
      idUsuarioProcesa: [1],
      validado: [],
      fechaValida: [new Date("2023-05-22 00:00:00.000000")],
      idUsuarioValida: [1]
    })
   }

  onSubmit():void{
    this.ordenService.guardarResultado(this.resultadoform.value).subscribe(result => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }

  public formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const milliseconds = String(date.getMilliseconds()).padStart(3, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  }

  agregarResultado() {
    const fechaActual: Date = new Date();
    const fechaProcesar: string = this.formatDate(fechaActual);
    this.resultado.idExamen = 1;
    this.resultado.idOrden = 1;
    this.resultado.resultado = "sa";
    this.resultado.observaciones = "s";
    this.resultado.procesado = "s";
    this.resultado.validado = "s";
    this.resultado.fechaProcesa = new Date(fechaProcesar);
    this.resultado.fechaValida = new Date(fechaProcesar);
    this.resultado.idUsuarioValida = 1;
    this.resultado.idUsuarioProcesa = 1;
    this.resultado.idResultados = 0;

    this.ordenService.guardarResultado(this.resultado);
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
