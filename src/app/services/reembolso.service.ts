import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { Reembolso } from '../models/reembolso.model';

@Injectable({
  providedIn: 'root'
})
export class ReembolsoService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertReembolso({
      monto_original: 100,
      monto_reembolsado: 80,
      estado: 'pendiente'
    });
  }

  getAllReembolsos(): Reembolso[] {
    return [...this.db.reembolsos];
  }

  getReembolsoById(id: number): Reembolso | undefined {
    return this.db.getReembolsoById(id);
  }

  createReembolso(reembolso: Partial<Reembolso>): Reembolso {
    return this.db.insertReembolso(reembolso);
  }

  updateReembolso(id: number, reembolso: Partial<Reembolso>): boolean {
    return this.db.updateReembolso(id, reembolso);
  }

  deleteReembolso(id: number): boolean {
    return this.db.deleteReembolso(id);
  }
}