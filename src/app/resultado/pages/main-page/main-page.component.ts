import { Component, OnInit } from '@angular/core';
import { Resultado } from '../../interface/resultado';
import { ResultadoService } from '../../services/resultado.service';
import { Orden } from '../../interface/orden';
import { Examen } from '../../interface/examen';
import { Usuario } from '../../interface/usuario';

@Component({
    selector: 'resultado-main-page',
    templateUrl: './main-page.component.html',
    styles: [
    ]
})

export class MainPageComponent implements OnInit {
    public resultados: Resultado[] = [];
    public ordenes: Orden[] = [];
    public examenes: Examen[] = [];
    public usuarios: Usuario[] = [];

    constructor(private resultadoService: ResultadoService) {}
    
    ngOnInit(): void {
        this.resultadoService.listarResultados().subscribe(response => this.listarResultados(response));
        this.resultadoService.listarOrdenes().subscribe(response => this.listarOrdenes(response));
        this.resultadoService.listaExamen().subscribe(response => this.listarExamenes(response));
        this.resultadoService.listaUsuario().subscribe(response => this.listarUsuario(response));

    }

    listarResultados(response: Resultado[]):void {
            this.resultados = response
    }

    listarOrdenes(orden: Orden[]):void {
        this.ordenes = orden
    }

    listarExamenes(examen: Examen[]):void {
        this.examenes = examen
    }

    listarUsuario(usuario: Usuario[]):void {
        this.usuarios = usuario
    }
}