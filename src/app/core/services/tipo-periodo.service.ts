import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importamos Observable y of

// 2. Importamos el SERVICIO central que contiene la base de datos
import { LocalDatabaseService } from './local-database.service';
import { TipoPeriodo } from '../interfaces/tipo-periodo.model';

@Injectable({
  providedIn: 'root'
})
export class TipoPeriodoService {
  // 3. Eliminamos la creación de una instancia privada de la base de datos
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central en el constructor
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor debe estar vacío.
  }

  // 5. Todos los métodos ahora devuelven Observables
  getAllTiposPeriodo(): Observable<TipoPeriodo[]> {
    const tiposPeriodo = this.databaseService.db.tiposPeriodo;
    return of([...tiposPeriodo]);
  }

  getTipoPeriodoById(id: number): Observable<TipoPeriodo | undefined> {
    const tipoPeriodo = this.databaseService.db.getTipoPeriodoById(id);
    return of(tipoPeriodo);
  }

  createTipoPeriodo(tipoPeriodo: Partial<TipoPeriodo>): Observable<TipoPeriodo> {
    const nuevoTipoPeriodo = this.databaseService.db.insertTipoPeriodo(tipoPeriodo);
    return of(nuevoTipoPeriodo);
  }

  updateTipoPeriodo(id: number, tipoPeriodo: Partial<TipoPeriodo>): Observable<boolean> {
    const resultado = this.databaseService.db.updateTipoPeriodo(id, tipoPeriodo);
    return of(resultado);
  }

  deleteTipoPeriodo(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deleteTipoPeriodo(id);
    return of(resultado);
  }
}