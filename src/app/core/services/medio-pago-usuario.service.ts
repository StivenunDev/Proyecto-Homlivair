import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { MedioPagoUsuario } from '../models/medio-pago-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class MedioPagoUsuarioService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertMedioPagoUsuario({
      codigo_medio_pago: '1234567890',
      estado: true
    });
  }

  getAllMediosPagoUsuario(): MedioPagoUsuario[] {
    return [...this.db.mediosPagoUsuario];
  }

  getMedioPagoUsuarioById(id: number): MedioPagoUsuario | undefined {
    return this.db.getMedioPagoUsuarioById(id);
  }

  createMedioPagoUsuario(medioPagoUsuario: Partial<MedioPagoUsuario>): MedioPagoUsuario {
    return this.db.insertMedioPagoUsuario(medioPagoUsuario);
  }

  updateMedioPagoUsuario(id: number, medioPagoUsuario: Partial<MedioPagoUsuario>): boolean {
    return this.db.updateMedioPagoUsuario(id, medioPagoUsuario);
  }

  deleteMedioPagoUsuario(id: number): boolean {
    return this.db.deleteMedioPagoUsuario(id);
  }
}