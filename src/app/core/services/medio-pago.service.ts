import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importamos Observable y of

// 2. Importamos el SERVICIO central que contiene la base de datos
import { LocalDatabaseService } from './local-database.service';
import { MedioPago } from '../interfaces/medio-pago.model';

@Injectable({
  providedIn: 'root'
})
export class MedioPagoService {
  // 3. Eliminamos la creación de una instancia privada de la base de datos
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central en el constructor
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor debe estar vacío.
  }

  // 5. Todos los métodos ahora devuelven Observables
  getAllMediosPago(): Observable<MedioPago[]> {
    const mediosPago = this.databaseService.db.mediosPago;
    return of([...mediosPago]);
  }

  getMedioPagoById(id: number): Observable<MedioPago | undefined> {
    const medioPago = this.databaseService.db.getMedioPagoById(id);
    return of(medioPago);
  }

  createMedioPago(medioPago: Partial<MedioPago>): Observable<MedioPago> {
    const nuevoMedioPago = this.databaseService.db.insertMedioPago(medioPago);
    return of(nuevoMedioPago);
  }

  updateMedioPago(id: number, medioPago: Partial<MedioPago>): Observable<boolean> {
    const resultado = this.databaseService.db.updateMedioPago(id, medioPago);
    return of(resultado);
  }

  deleteMedioPago(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deleteMedioPago(id);
    return of(resultado);
  }
}