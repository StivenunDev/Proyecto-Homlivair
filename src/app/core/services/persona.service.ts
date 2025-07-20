import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertPersona({
      DNI: '12345678',
      nombre: 'Carlos',
      apellido_paterno: 'Lopez',
      apellido_materno: 'Perez',
      estado: true
    });
  }

  getAllPersonas(): Persona[] {
    return [...this.db.personas];
  }

  getPersonaById(id: number): Persona | undefined {
    return this.db.getPersonaById(id);
  }

  createPersona(persona: Partial<Persona>): Persona {
    return this.db.insertPersona(persona);
  }

  updatePersona(id: number, persona: Partial<Persona>): boolean {
    return this.db.updatePersona(id, persona);
  }

  deletePersona(id: number): boolean {
    return this.db.deletePersona(id);
  }
}