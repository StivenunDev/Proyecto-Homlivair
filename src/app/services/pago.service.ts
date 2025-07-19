import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { Pago } from '../models/pago.model';

@Injectable({
  providedIn: 'root'
})
export class PagoService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertPago({
      tipo_moneda: 'USD',
      monto_pago: 100,
      estado_pago: 'pendiente',
      estado: true
    });
  }

  getAllPagos(): Pago[] {
    return [...this.db.pagos];
  }

  getPagoById(id: number): Pago | undefined {
    return this.db.getPagoById(id);
  }

  createPago(pago: Partial<Pago>): Pago {
    return this.db.insertPago(pago);
  }

  updatePago(id: number, pago: Partial<Pago>): boolean {
    return this.db.updatePago(id, pago);
  }

  deletePago(id: number): boolean {
    return this.db.deletePago(id);
  }
}