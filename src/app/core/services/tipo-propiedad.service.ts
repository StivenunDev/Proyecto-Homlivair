import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { TipoPropiedad } from '../interfaces/tipo-propiedad.model';

@Injectable({
  providedIn: 'root'
})
export class TipoPropiedadService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertTipoPropiedad({
      nombre_tipo_propiedad: 'Casa',
      estado: true
    });
  }

  getAllTiposPropiedad(): TipoPropiedad[] {
    return [...this.db.tiposPropiedad];
  }

  getTipoPropiedadById(id: number): TipoPropiedad | undefined {
    return this.db.getTipoPropiedadById(id);
  }

  createTipoPropiedad(tipoPropiedad: Partial<TipoPropiedad>): TipoPropiedad {
    return this.db.insertTipoPropiedad(tipoPropiedad);
  }

  updateTipoPropiedad(id: number, tipoPropiedad: Partial<TipoPropiedad>): boolean {
    return this.db.updateTipoPropiedad(id, tipoPropiedad);
  }

  deleteTipoPropiedad(id: number): boolean {
    return this.db.deleteTipoPropiedad(id);
  }
}