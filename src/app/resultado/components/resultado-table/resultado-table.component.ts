import { Component, Input } from '@angular/core';
import { Resultado } from '../../interface/resultado';
import { Examen } from '../../interface/examen';
import { Orden } from '../../interface/orden';
import { Usuario } from '../../interface/usuario';
import { ResultadoService } from '../../services/resultado.service';

@Component({
  selector: 'resultado-table',
  templateUrl: './resultado-table.component.html',
  styles: [
  ]
})
export class ResultadoTableComponent {
  @Input()
  public resultados: Resultado[] = [];

  @Input()
  public examenes: Examen[] = [];

  @Input()
  public ordenes: Orden[] = [];

  @Input()
  public usuarios: Usuario[] = [];

  constructor(private resultadoService: ResultadoService) {}

  modificarDatoE(resultado: Resultado): string {
    let datoModificado = "";

    const examenes = this.examenes.find(e => e.idExamen === resultado.idExamen);

    if (examenes?.idAreaLabServicio === 1) {
      datoModificado = "Hematología";
    } else {
      datoModificado = "Química";
    }

    return datoModificado;
  }
  
  modificarDatoO(resultado: Resultado): string {
    let datoModificado = "";

    const orden = this.ordenes.find(o => o.idOrden === resultado.idOrden);

    if (orden != null) {
      datoModificado = orden.numeroOrden; 
    } else {
      datoModificado = "Dato no existe";
    }

    return datoModificado;
  }

  modificarDatoUP(resultado: Resultado): string {
    let datoModificado = "";

    const usuario = this.usuarios.find(u => u.idUsuario === resultado.idUsuarioProcesa);
    
    if (usuario != null) {
      datoModificado = usuario.login; 
    } else {
      datoModificado = "Dato no existe";
    }

    return datoModificado;
  }

  modificarDatoUV(resultado: Resultado): string {
    let datoModificado = "";

    const usuario = this.usuarios.find(u => u.idUsuario === resultado.idUsuarioValida);
    
    if (usuario != null) {
      datoModificado = usuario.login; 
    } else {
      datoModificado = "Dato no existe";
    }

    return datoModificado;
  }

  eliminarResultadoPorId(idResultado: number): void {
    this.resultadoService.eliminarResultado(idResultado);
  }

}
