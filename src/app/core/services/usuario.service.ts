import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importamos Observable y of

// 2. Importamos el SERVICIO central que contiene la base de datos
import { LocalDatabaseService } from './local-database.service';
import { Usuario } from '../interfaces/usuario.model';
import { Persona } from '../interfaces/persona.model';

// ¡ASEGÚRATE DE QUE LA PALABRA 'export' ESTÉ AQUÍ!
export interface UserProfileViewModel {
  // Datos de Persona
  ID_personas: number;
  DNI: string;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  fecha_nacimiento: Date | null;
  sexo: string;
  direccion: string;
  estado_civil: string;
  celular: string;
  email: string;
  
  // Datos de Usuario
  ID_usuario: number;
  nombre_usuario: string;
  ID_rol: number | null;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  // 3. Eliminamos la creación de una instancia privada de la base de datos
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central en el constructor
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor debe estar vacío.
  }
  /**
   * Obtiene el perfil completo de un usuario combinando sus datos.
   */
  
    getUserProfileById(userId: number): Observable<UserProfileViewModel | undefined> {
      const usuario = this.databaseService.db.getUsuarioById(userId);
      const persona = this.databaseService.db.getPersonaById(userId); 

      if (usuario && persona) {
        // Creamos un objeto simple que coincide con la forma de nuestro View Model
        const viewModel: UserProfileViewModel = {
          // Leemos los datos de la instancia de Persona usando sus getters
          ID_personas: persona.ID_personas,
          DNI: persona.DNI,
          nombre: persona.nombre,
          apellido_paterno: persona.apellido_paterno,
          apellido_materno: persona.apellido_materno,
          fecha_nacimiento: persona.fecha_nacimiento,
          sexo: persona.sexo,
          direccion: persona.direccion,
          estado_civil: persona.estado_civil,
          celular: persona.celular,
          email: persona.email,

          // Leemos los datos de la instancia de Usuario usando sus getters
          ID_usuario: usuario.ID_usuario,
          nombre_usuario: usuario.nombre_usuario,
          ID_rol: usuario.ID_rol
        };
        
        return of(viewModel);
      }

    return of(undefined);
  }

  // 5. Todos los métodos ahora devuelven Observables
  getAllUsuarios(): Observable<Usuario[]> {
    const usuarios = this.databaseService.db.usuarios;
    return of([...usuarios]);
  }

  getUsuarioById(id: number): Observable<Usuario | undefined> {
    const usuario = this.databaseService.db.getUsuarioById(id);
    return of(usuario);
  }

  createUsuario(usuario: Partial<Usuario>): Observable<Usuario> {
    const nuevoUsuario = this.databaseService.db.insertUsuario(usuario);
    return of(nuevoUsuario);
  }

  updateUsuario(id: number, usuario: Partial<Usuario>): Observable<boolean> {
    const resultado = this.databaseService.db.updateUsuario(id, usuario);
    return of(resultado);
  }

  deleteUsuario(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deleteUsuario(id);
    return of(resultado);
  }
}