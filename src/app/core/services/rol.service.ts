import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importamos Observable y of

// 2. Importamos el SERVICIO central que contiene la base de datos
import { LocalDatabaseService } from './local-database.service';
import { Rol } from '../interfaces/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  // 3. Eliminamos la creación de una instancia privada de la base de datos
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central en el constructor
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor debe estar vacío.
  }

  // 5. Todos los métodos ahora devuelven Observables
  getAllRoles(): Observable<Rol[]> {
    const roles = this.databaseService.db.roles;
    return of([...roles]);
  }

  getRolById(id: number): Observable<Rol | undefined> {
    const rol = this.databaseService.db.getRolById(id);
    return of(rol);
  }

  createRol(rol: Partial<Rol>): Observable<Rol> {
    const nuevoRol = this.databaseService.db.insertRol(rol);
    return of(nuevoRol);
  }

  updateRol(id: number, rol: Partial<Rol>): Observable<boolean> {
    const resultado = this.databaseService.db.updateRol(id, rol);
    return of(resultado);
  }

  deleteRol(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deleteRol(id);
    return of(resultado);
  }
}