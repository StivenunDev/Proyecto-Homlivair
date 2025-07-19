import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { TipoPeriodo } from '../models/tipo-periodo.model';

@Injectable({
  providedIn: 'root'
})
export class TipoPeriodoService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertTipoPeriodo({
      nombre_tipo_periodo: 'Mensual',
      valor: 30,
      estado: true
    });
  }

  getAllTiposPeriodo(): TipoPeriodo[] {
    return [...this.db.tiposPeriodo];
  }

  getTipoPeriodoById(id: number): TipoPeriodo | undefined {
    return this.db.getTipoPeriodoById(id);
  }

  createTipoPeriodo(tipoPeriodo: Partial<TipoPeriodo>): TipoPeriodo {
    return this.db.insertTipoPeriodo(tipoPeriodo);
  }

  updateTipoPeriodo(id: number, tipoPeriodo: Partial<TipoPeriodo>): boolean {
    return this.db.updateTipoPeriodo(id, tipoPeriodo);
  }

  deleteTipoPeriodo(id: number): boolean {
    return this.db.deleteTipoPeriodo(id);
  }
}