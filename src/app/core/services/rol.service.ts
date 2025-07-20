import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { Rol } from '../interfaces/rol.model';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertRol({
      nombre_rol: 'Administrador',
      estado: true
    });
  }

  getAllRoles(): Rol[] {
    return [...this.db.roles];
  }

  getRolById(id: number): Rol | undefined {
    return this.db.getRolById(id);
  }

  createRol(rol: Partial<Rol>): Rol {
    return this.db.insertRol(rol);
  }

  updateRol(id: number, rol: Partial<Rol>): boolean {
    return this.db.updateRol(id, rol);
  }

  deleteRol(id: number): boolean {
    return this.db.deleteRol(id);
  }
}