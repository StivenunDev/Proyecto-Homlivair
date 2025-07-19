import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { Alquiler } from '../models/alquiler.model';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertAlquiler({
      valor_periodo: 30,
      estado_alquiler: 'en curso',
      estado: true
    });
  }

  getAllAlquileres(): Alquiler[] {
    return [...this.db.alquileres];
  }

  getAlquilerById(id: number): Alquiler | undefined {
    return this.db.getAlquilerById(id);
  }

  createAlquiler(alquiler: Partial<Alquiler>): Alquiler {
    return this.db.insertAlquiler(alquiler);
  }

  updateAlquiler(id: number, alquiler: Partial<Alquiler>): boolean {
    return this.db.updateAlquiler(id, alquiler);
  }

  deleteAlquiler(id: number): boolean {
    return this.db.deleteAlquiler(id);
  }
} 