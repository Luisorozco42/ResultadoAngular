import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { Orden } from '../interface/orden';
import { Empleado } from '../interface/empleado';
import { Resultado } from 'src/app/resultado/interface/resultado';
import { ODetalle } from '../interface/odetalle';

@Injectable({ providedIn: 'root' })
export class OrdenService {
    private apiUrlO: string = "http://localhost:8080/api/orden";
    private apiUrlE: string = "http://localhost:8083/api/empleado";
    private apiUrlR: string = "http://localhost:8082/api/resultados";
    private apiUrlOD: string = "http://localhost:8080/api/ordendet";

    constructor(private http: HttpClient) { }

    listarODetalles(): Observable<ODetalle[]> {
        return this.http.get<ODetalle[]>(this.apiUrlOD);
    }

    listarOrdenes(): Observable<Orden[]> {
        return this.http.get<Orden[]>(this.apiUrlO);
    }

    listarEmpleados(): Observable<Empleado[]> {
        return this.http.get<Empleado[]>(this.apiUrlE);
    }

    listarResultados(): Observable<Resultado[]> {
        return this.http.get<Resultado[]>(this.apiUrlR);
    }

    buscarPorTipoOrden(id: number): Observable<Orden[]> {
        const url = `${this.apiUrlO}/idTipoOrden/${id}`;
        return this.http.get<Orden[]>(url)
    }

    buscarPorIdOrden(id: number): Observable<Orden[]> {
        const url = `${this.apiUrlO}/idOrden/${id}`;
        return this.http.get<Orden[]>(url);
    }
    guardarResultado(resultado: Resultado): Observable<Resultado> {
        const url = `${this.apiUrlR}/save`;
        return this.http.post<Resultado>(url, resultado);
    }

    obetenerOrdenPorId(id: number): Observable<Orden>{
        const url = `${this.apiUrlO}/${id}`;
        return this.http.get<Orden>(url);
    }
}