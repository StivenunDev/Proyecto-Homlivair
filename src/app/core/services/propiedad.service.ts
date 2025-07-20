import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { Propiedad } from '../models/propiedad.model';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertPropiedad({
      tipo_moneda: 'USD',
      precio_base: 100,
      estado_propiedades: 'disponible',
      estado: true
    });
  }

  getAllPropiedades(): Propiedad[] {
    return [...this.db.propiedades];
  }

  getPropiedadById(id: number): Propiedad | undefined {
    return this.db.getPropiedadById(id);
  }

  createPropiedad(propiedad: Partial<Propiedad>): Propiedad {
    return this.db.insertPropiedad(propiedad);
  }

  updatePropiedad(id: number, propiedad: Partial<Propiedad>): boolean {
    return this.db.updatePropiedad(id, propiedad);
  }

  deletePropiedad(id: number): boolean {
    return this.db.deletePropiedad(id);
  }
}