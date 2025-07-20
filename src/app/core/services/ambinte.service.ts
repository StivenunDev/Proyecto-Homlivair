import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { Ambiente } from '../models/ambiente.model';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertAmbiente({
      nombre_ambiente: 'Sala de estar',
      descripcion: 'Ambiente amplio y luminoso',
      estado: true
    });
  }

  getAllAmbientes(): Ambiente[] {
    return [...this.db.ambientes];
  }

  getAmbienteById(id: number): Ambiente | undefined {
    return this.db.getAmbienteById(id);
  }

  createAmbiente(ambiente: Partial<Ambiente>): Ambiente {
    return this.db.insertAmbiente(ambiente);
  }

  updateAmbiente(id: number, ambiente: Partial<Ambiente>): boolean {
    return this.db.updateAmbiente(id, ambiente);
  }

  deleteAmbiente(id: number): boolean {
    return this.db.deleteAmbiente(id);
  }
}