import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importamos Observable y of

// 2. Importamos el SERVICIO central que contiene la base de datos
import { LocalDatabaseService } from './local-database.service';
import { Persona } from '../interfaces/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  // 3. Eliminamos la creación de una instancia privada de la base de datos
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central en el constructor
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor debe estar vacío.
  }

  // 5. Todos los métodos ahora devuelven Observables
  getAllPersonas(): Observable<Persona[]> {
    const personas = this.databaseService.db.personas;
    return of([...personas]);
  }

  getPersonaById(id: number): Observable<Persona | undefined> {
    const persona = this.databaseService.db.getPersonaById(id);
    return of(persona);
  }

  createPersona(persona: Partial<Persona>): Observable<Persona> {
    const nuevaPersona = this.databaseService.db.insertPersona(persona);
    return of(nuevaPersona);
  }

  updatePersona(id: number, persona: Partial<Persona>): Observable<boolean> {
    const resultado = this.databaseService.db.updatePersona(id, persona);
    return of(resultado);
  }

  deletePersona(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deletePersona(id);
    return of(resultado);
  }
}