import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { Solicitud } from '../interfaces/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertSolicitud({
      tipo_solicitud: 'alquiler',
      descripcion: 'Solicitud de alquiler de casa',
      estado_solicitud: 'Pendiente',
      estado: true
    });
  }

  getAllSolicitudes(): Solicitud[] {
    return [...this.db.solicitudes];
  }

  getSolicitudById(id: number): Solicitud | undefined {
    return this.db.getSolicitudById(id);
  }

  createSolicitud(solicitud: Partial<Solicitud>): Solicitud {
    return this.db.insertSolicitud(solicitud);
  }

  updateSolicitud(id: number, solicitud: Partial<Solicitud>): boolean {
    return this.db.updateSolicitud(id, solicitud);
  }

  deleteSolicitud(id: number): boolean {
    return this.db.deleteSolicitud(id);
  }
}