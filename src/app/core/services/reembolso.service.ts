import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importamos Observable y of

// 2. Importamos el SERVICIO central que contiene la base de datos
import { LocalDatabaseService } from './local-database.service';
import { Reembolso } from '../interfaces/reembolso.model';

@Injectable({
  providedIn: 'root'
})
export class ReembolsoService {
  // 3. Eliminamos la creación de una instancia privada de la base de datos
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central en el constructor
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor debe estar vacío.
  }

  // 5. Todos los métodos ahora devuelven Observables
  getAllReembolsos(): Observable<Reembolso[]> {
    const reembolsos = this.databaseService.db.reembolsos;
    return of([...reembolsos]);
  }

  getReembolsoById(id: number): Observable<Reembolso | undefined> {
    const reembolso = this.databaseService.db.getReembolsoById(id);
    return of(reembolso);
  }

  createReembolso(reembolso: Partial<Reembolso>): Observable<Reembolso> {
    const nuevoReembolso = this.databaseService.db.insertReembolso(reembolso);
    return of(nuevoReembolso);
  }

  updateReembolso(id: number, reembolso: Partial<Reembolso>): Observable<boolean> {
    const resultado = this.databaseService.db.updateReembolso(id, reembolso);
    return of(resultado);
  }

  deleteReembolso(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deleteReembolso(id);
    return of(resultado);
  }
}