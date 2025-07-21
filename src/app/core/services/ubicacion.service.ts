import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importa Observable y of

// 2. Importamos el SERVICIO que contiene la BD, no el modelo.
import { LocalDatabaseService } from './local-database.service';
import { Ubicacion } from '../interfaces/ubicacion.model';

@Injectable({ // <-- 2. AÑADE ESTE DECORADOR
  providedIn: 'root'
})
export class UbicacionService {
  // 3. Eliminamos la creación de una nueva base de datos.
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central de base de datos en el constructor.
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor ahora debe estar vacío. La inicialización de datos
    // se hace una sola vez en el APP_INITIALIZER.
  }

  // 5. Todos los métodos ahora devuelven Observables para ser consistentes.
  getAllUbicaciones(): Observable<Ubicacion[]> {
    // Usamos la instancia 'db' del servicio inyectado.
    const ubicaciones = this.databaseService.db.ubicaciones;
    return of([...ubicaciones]);
  }

  getUbicacionById(id: number): Observable<Ubicacion | undefined> {
    const ubicacion = this.databaseService.db.getUbicacionById(id);
    return of(ubicacion);
  }

  createUbicacion(ubicacion: Partial<Ubicacion>): Observable<Ubicacion> {
    const nuevaUbicacion = this.databaseService.db.insertUbicacion(ubicacion);
    return of(nuevaUbicacion);
  }

  updateUbicacion(id: number, ubicacion: Partial<Ubicacion>): Observable<boolean> {
    const resultado = this.databaseService.db.updateUbicacion(id, ubicacion);
    return of(resultado);
  }

  deleteUbicacion(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deleteUbicacion(id);
    return of(resultado);
  }
}