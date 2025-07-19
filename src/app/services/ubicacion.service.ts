import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { Ubicacion } from '../models/ubicacion.model';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertUbicacion({
      cod_pais: 'PE',
      cod_provincia: 'LIM',
      cod_ciudad: 'LIM',
      nombre_lugar: 'Lima',
      estado: true
    });
  }

  getAllUbicaciones(): Ubicacion[] {
    return [...this.db.ubicaciones];
  }

  getUbicacionById(id: number): Ubicacion | undefined {
    return this.db.getUbicacionById(id);
  }

  createUbicacion(ubicacion: Partial<Ubicacion>): Ubicacion {
    return this.db.insertUbicacion(ubicacion);
  }

  updateUbicacion(id: number, ubicacion: Partial<Ubicacion>): boolean {
    return this.db.updateUbicacion(id, ubicacion);
  }

  deleteUbicacion(id: number): boolean {
    return this.db.deleteUbicacion(id);
  }
}