import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { PoliticaRegla } from '../models/politica-regla.model';

@Injectable({
  providedIn: 'root'
})
export class PoliticaReglaService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertPoliticaRegla({
      nombre: 'Política de cancelación',
      tipo: 'cancelación',
      descripcion: 'Política de cancelación flexible',
      valor_1: '5 días antes',
      valor_2: '50%',
      activa: true
    });
  }

  getAllPoliticasReglas(): PoliticaRegla[] {
    return [...this.db.politicasReglas];
  }

  getPoliticaReglaById(id: number): PoliticaRegla | undefined {
    return this.db.getPoliticaReglaById(id);
  }

  createPoliticaRegla(politica: Partial<PoliticaRegla>): PoliticaRegla {
    return this.db.insertPoliticaRegla(politica);
  }

  updatePoliticaRegla(id: number, politica: Partial<PoliticaRegla>): boolean {
    return this.db.updatePoliticaRegla(id, politica);
  }

  deletePoliticaRegla(id: number): boolean {
    return this.db.deletePoliticaRegla(id);
  }
}