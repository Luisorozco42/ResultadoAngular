import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { Resultado } from '../interface/resultado';
import { Orden } from '../interface/orden';
import { Examen } from '../interface/examen';
import { Usuario } from '../interface/usuario';

@Injectable({ providedIn: 'root' })
export class ResultadoService {
    private apiUrlR: string = "http://localhost:8082/api/resultados";
    private apiUrlO: string = "http://localhost:8080/api/orden";
    private apiUrlE: string = "http://localhost:8081/api/examen";
    private apiUrlU: string = "http://localhost:8084/api/usuario";

    constructor(private http: HttpClient) { }

    listarResultados(): Observable<Resultado[]> {
        return this.http.get<Resultado[]>(this.apiUrlR);
    }

    listarOrdenes(): Observable<Orden[]> {
        return this.http.get<Orden[]>(this.apiUrlO);
    }

    listaExamen(): Observable<Examen[]> {
        return this.http.get<Examen[]>(this.apiUrlE);
    }

    listaUsuario(): Observable<Usuario[]> {
        return this.http.get<Usuario[]>(this.apiUrlU);
    }

    eliminarResultado(idResultado: number) {
        const url = `${this.apiUrlR}/delete/${idResultado}`;
        return this.http.delete(url).toPromise()
            .then(() => {
                console.log('Resultado eliminado correctamente');
            })
            .catch((error) => {
                console.error('Se ha producido un error en la petición DELETE:', error);
            });
    }
}