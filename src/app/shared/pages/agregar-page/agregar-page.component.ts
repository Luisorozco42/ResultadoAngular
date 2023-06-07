import { Component, OnInit } from '@angular/core';
import { OrdenService } from '../../services/orden.service';
import { ResultadoService } from 'src/app/resultado/services/resultado.service';
import { Orden } from '../../interface/orden';
import { Examen } from 'src/app/resultado/interface/examen';
import { Resultado } from 'src/app/resultado/interface/resultado';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'share-agregar-page',
  templateUrl: './agregar-page.component.html',
  styles: [
  ]
})
export class AgregarPageComponent implements OnInit {
  public orden?: Orden;

  public ordenes: Orden[] = [];
  public resultados: Resultado[] = [];
  public examenes: Examen[] = [];

  constructor(private ordenService: OrdenService, private resultadoService: ResultadoService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.ordenService.obetenerOrdenPorId(id)),
    ).subscribe(orden => {
      if (!orden){
        return this.router.navigateByUrl('');
      }
      return this.orden = orden;
    })


    this.ordenService.listarResultados().subscribe(response =>{this.listarResultados(response)});
    this.ordenService.listarOrdenes().subscribe(response => {this.listarOrdenes(response)});
    this.resultadoService.listaExamen().subscribe(response =>{this.listarExamenes(response)});
  }

  listarExamenes(examen: Examen[]): void {
    this.examenes = examen;
  }

  listarOrdenes(orden: Orden[]): void {
    this.ordenes = orden;    
  }

  listarResultados(resultado: Resultado[]): void {
    this.resultados = resultado
  }
}
