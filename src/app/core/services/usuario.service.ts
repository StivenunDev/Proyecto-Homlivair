import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { Usuario } from '../interfaces/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertUsuario({
      nombre_usuario: 'carlos',
      password: '123456',
      estado: true
    });
  }

  getAllUsuarios(): Usuario[] {
    return [...this.db.usuarios];
  }

  getUsuarioById(id: number): Usuario | undefined {
    return this.db.getUsuarioById(id);
  }

  createUsuario(usuario: Partial<Usuario>): Usuario {
    return this.db.insertUsuario(usuario);
  }

  updateUsuario(id: number, usuario: Partial<Usuario>): boolean {
    return this.db.updateUsuario(id, usuario);
  }

  deleteUsuario(id: number): boolean {
    return this.db.deleteUsuario(id);
  }
}