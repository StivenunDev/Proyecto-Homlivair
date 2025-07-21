import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalDatabaseService } from './local-database.service';
import { Solicitud } from '../interfaces/solicitud.model';
import { Alquiler } from '../interfaces/alquiler.model';

// Interface para definir los datos que necesitamos para crear una solicitud
export interface BookingRequestData {
  ID_usuario: number;
  ID_propiedades: number;
  fecha_inicio: Date;
  fecha_fin: Date;
}

export interface TripViewModel {
  ID_solicitud: number;
  ID_propiedades: number | null;
  estado_solicitud: string;
  fecha_creacion: Date | null;
  // Propiedades opcionales del alquiler asociado
  fecha_inicio?: Date | null;
  fecha_fin?: Date | null;
}

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private dbService: LocalDatabaseService) { }
  

  /**
   * Orquesta la creación de una nueva solicitud de alquiler.
   */
  createBookingRequest(data: BookingRequestData): Observable<Solicitud> {
    console.log('Creando solicitud con los siguientes datos:', data);

    // 1. Creamos la solicitud en la base de datos
    const nuevaSolicitud = this.dbService.db.insertSolicitud({
      ID_usuario: data.ID_usuario,
      ID_propiedades: data.ID_propiedades,
      tipo_solicitud: 'alquiler',
      fecha_creacion: new Date(), // La fecha actual
      estado_solicitud: 'Pendiente', // Estado inicial
      estado: true
    });

    // 2. Creamos el alquiler asociado en estado 'pendiente'
    //    (Aquí podrías añadir cálculos más complejos de precios)
    this.dbService.db.insertAlquiler({
      ID_solicitud: nuevaSolicitud.ID_solicitud, // Vinculamos con la solicitud
      ID_usuario: data.ID_usuario,
      fecha_inicio: data.fecha_inicio,
      fecha_fin: data.fecha_fin,
      estado_alquiler: 'pendiente',
      estado: true
    });

    console.log('Base de datos actualizada:', this.dbService.db);
    return of(nuevaSolicitud);
  }


  getTripsByUserId(userId: number): Observable<TripViewModel[]> {
    const userRequests = this.dbService.db.solicitudes.filter(s => s.ID_usuario === userId);

    // --- 2. Construimos el View Model manualmente ---
    const trips: TripViewModel[] = userRequests.map(solicitud => {
      const alquiler = this.dbService.db.alquileres.find(a => a.ID_solicitud === solicitud.ID_solicitud);
      
      // Creamos un objeto simple que coincide con la forma de TripViewModel
      return {
        // Leemos los datos de la instancia de Solicitud usando sus getters
        ID_solicitud: solicitud.ID_solicitud,
        ID_propiedades: solicitud.ID_propiedades,
        estado_solicitud: solicitud.estado_solicitud,
        fecha_creacion: solicitud.fecha_creacion,
        // Leemos los datos del alquiler (si existe)
        fecha_inicio: alquiler ? alquiler.fecha_inicio : null,
        fecha_fin: alquiler ? alquiler.fecha_fin : null
      };
    });

    return of(trips);
  }


    getAllBookingRequests(): Observable<Solicitud[]> {
    // Obtenemos todas las solicitudes de la base de datos en memoria
    const solicitudes = this.dbService.db.solicitudes;
    // Devolvemos una copia como un Observable
    return of([...solicitudes]);
  }

  /**
   * Actualiza el estado de una solicitud (Aprobar/Rechazar).
   */
  updateRequestStatus(requestId: number, newStatus: 'Aprobada' | 'Rechazada'): Observable<boolean> {
    const success = this.dbService.db.updateSolicitud(requestId, { estado_solicitud: newStatus });
    console.log('Base de datos tras actualizar solicitud:', this.dbService.db);
    return of(success);
  }
}