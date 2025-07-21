import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importamos Observable y of

// 2. Importamos el SERVICIO central que contiene la base de datos
import { LocalDatabaseService } from './local-database.service';
import { Ambiente } from '../interfaces/ambiente.model';

@Injectable({
  providedIn: 'root'
})
export class AmbienteService {
  // 3. Eliminamos la creación de una instancia privada de la base de datos
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central en el constructor
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor debe estar vacío.
  }

  // 5. Todos los métodos ahora devuelven Observables
  getAllAmbientes(): Observable<Ambiente[]> {
    const ambientes = this.databaseService.db.ambientes;
    return of([...ambientes]);
  }

  getAmbienteById(id: number): Observable<Ambiente | undefined> {
    const ambiente = this.databaseService.db.getAmbienteById(id);
    return of(ambiente);
  }

  createAmbiente(ambiente: Partial<Ambiente>): Observable<Ambiente> {
    const nuevoAmbiente = this.databaseService.db.insertAmbiente(ambiente);
    return of(nuevoAmbiente);
  }

  updateAmbiente(id: number, ambiente: Partial<Ambiente>): Observable<boolean> {
    const resultado = this.databaseService.db.updateAmbiente(id, ambiente);
    return of(resultado);
  }

  deleteAmbiente(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deleteAmbiente(id);
    return of(resultado);
  }
}