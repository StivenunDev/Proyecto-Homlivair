import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importamos Observable y of

// 2. Importamos el SERVICIO central que contiene la base de datos
import { LocalDatabaseService } from './local-database.service';
import { Alquiler } from '../interfaces/alquiler.model';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  // 3. Eliminamos la creación de una instancia privada de la base de datos
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central en el constructor
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor debe estar vacío. La inicialización de datos
    // ya se maneja de forma centralizada al inicio de la app.
  }

  // 5. Todos los métodos ahora devuelven Observables
  getAllAlquileres(): Observable<Alquiler[]> {
    const alquileres = this.databaseService.db.alquileres;
    return of([...alquileres]);
  }

  getAlquilerById(id: number): Observable<Alquiler | undefined> {
    const alquiler = this.databaseService.db.getAlquilerById(id);
    return of(alquiler);
  }

  createAlquiler(alquiler: Partial<Alquiler>): Observable<Alquiler> {
    const nuevoAlquiler = this.databaseService.db.insertAlquiler(alquiler);
    return of(nuevoAlquiler);
  }

  updateAlquiler(id: number, alquiler: Partial<Alquiler>): Observable<boolean> {
    const resultado = this.databaseService.db.updateAlquiler(id, alquiler);
    return of(resultado);
  }

  deleteAlquiler(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deleteAlquiler(id);
    return of(resultado);
  }
}