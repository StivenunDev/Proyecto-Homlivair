import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importa Observable y of

// 2. Importa el SERVICIO central, no el modelo
import { LocalDatabaseService } from './local-database.service';
import { Pago } from '../interfaces/pago.model';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  // 3. Eliminamos la creación de una nueva base de datos
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central en el constructor
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor debe estar vacío. La inserción de datos de prueba
    // ya se maneja de forma centralizada al inicio de la app.
  }

  // 5. Todos los métodos ahora devuelven Observables
  getAllPagos(): Observable<Pago[]> {
    const pagos = this.databaseService.db.pagos;
    return of([...pagos]);
  }

  getPagoById(id: number): Observable<Pago | undefined> {
    const pago = this.databaseService.db.getPagoById(id);
    return of(pago);
  }

  createPago(pago: Partial<Pago>): Observable<Pago> {
    const nuevoPago = this.databaseService.db.insertPago(pago);
    return of(nuevoPago);
  }

  updatePago(id: number, pago: Partial<Pago>): Observable<boolean> {
    const resultado = this.databaseService.db.updatePago(id, pago);
    return of(resultado);
  }

  deletePago(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deletePago(id);
    return of(resultado);
  }
}