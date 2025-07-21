import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // Importamos Observable y 'of'

// 1. Importamos el servicio que CONTIENE la base de datos, no el modelo.
import { LocalDatabaseService } from './local-database.service';
import { Propiedad } from '../interfaces/propiedad.model';

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  
    /**
   * Obtiene todas las propiedades que pertenecen a un usuario específico.
   * @param userId El ID del usuario (anfitrión) cuyas propiedades queremos obtener.
   */
  // En lugar de crear una nueva BD, vamos a recibirla.
  // private db = new LocalDatabase(); <-- ESTO SE ELIMINA

  // 2. Usamos el constructor para "pedir prestado" el servicio de base de datos.
  // Angular se encarga de darnos la instancia única que ya fue inicializada.
  constructor(private databaseService: LocalDatabaseService) {}

  // 3. Los métodos ahora devuelven Observables. Esto es CRUCIAL para que Angular funcione
  // de forma reactiva y para que en el futuro puedas cambiar a una API real sin
  // modificar tus componentes.
  getAllPropiedades(): Observable<Propiedad[]> {
    // Accedemos a la base de datos a través del servicio inyectado.
    const propiedades = this.databaseService.db.propiedades;
    // La función 'of()' convierte el array en un Observable que emite ese array.
    return of([...propiedades]); 
  }

  getPropiedadById(id: number): Observable<Propiedad | undefined> {
    const propiedad = this.databaseService.db.getPropiedadById(id);
    return of(propiedad);
  }

  createPropiedad(propiedad: Partial<Propiedad>): Observable<Propiedad> {
    const nuevaPropiedad = this.databaseService.db.insertPropiedad(propiedad);
    return of(nuevaPropiedad);
  }

  updatePropiedad(id: number, propiedad: Partial<Propiedad>): Observable<boolean> {
    const resultado = this.databaseService.db.updatePropiedad(id, propiedad);
    return of(resultado);
  }

  deletePropiedad(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deletePropiedad(id);
    return of(resultado);
  }


    getPropertiesByUserId(userId: number): Observable<Propiedad[]> {
    const userProperties = this.databaseService.db.propiedades.filter(p => p.ID_usuario === userId);
    return of(userProperties);
  }

  /**
   * Cambia el estado de una propiedad (ej. de 'disponible' a 'inhabilitada').
   */
  updatePropertyStatus(propertyId: number, newStatus: 'disponible' | 'inhabilitado'): Observable<boolean> {
    const success = this.databaseService.db.updatePropiedad(propertyId, { estado_propiedades: newStatus });
    return of(success);
  }
}