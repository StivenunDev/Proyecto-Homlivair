import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importamos Observable y of

// 2. Importamos el SERVICIO central que contiene la base de datos
import { LocalDatabaseService } from './local-database.service';
import { Solicitud } from '../interfaces/solicitud.model';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  // 3. Eliminamos la creación de una instancia privada de la base de datos
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central en el constructor
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor debe estar vacío.
  }

  // 5. Todos los métodos ahora devuelven Observables
  getAllSolicitudes(): Observable<Solicitud[]> {
    const solicitudes = this.databaseService.db.solicitudes;
    return of([...solicitudes]);
  }

  getSolicitudById(id: number): Observable<Solicitud | undefined> {
    const solicitud = this.databaseService.db.getSolicitudById(id);
    return of(solicitud);
  }

  createSolicitud(solicitud: Partial<Solicitud>): Observable<Solicitud> {
    const nuevaSolicitud = this.databaseService.db.insertSolicitud(solicitud);
    return of(nuevaSolicitud);
  }

  updateSolicitud(id: number, solicitud: Partial<Solicitud>): Observable<boolean> {
    const resultado = this.databaseService.db.updateSolicitud(id, solicitud);
    return of(resultado);
  }

  deleteSolicitud(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deleteSolicitud(id);
    return of(resultado);
  }
}