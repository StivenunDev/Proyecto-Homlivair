import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { MedioPago } from '../interfaces/medio-pago.model';

@Injectable({
  providedIn: 'root'
})
export class MedioPagoService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertMedioPago({
      nombre_medio_pago: 'Tarjeta de crédito',
      estado: true
    });
  }

  getAllMediosPago(): MedioPago[] {
    return [...this.db.mediosPago];
  }

  getMedioPagoById(id: number): MedioPago | undefined {
    return this.db.getMedioPagoById(id);
  }

  createMedioPago(medioPago: Partial<MedioPago>): MedioPago {
    return this.db.insertMedioPago(medioPago);
  }

  updateMedioPago(id: number, medioPago: Partial<MedioPago>): boolean {
    return this.db.updateMedioPago(id, medioPago);
  }

  deleteMedioPago(id: number): boolean {
    return this.db.deleteMedioPago(id);
  }
}