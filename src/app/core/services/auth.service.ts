import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

// Importamos el servicio central de base de datos
import { LocalDatabaseService } from './local-database.service';
import { Usuario } from '../interfaces/usuario.model';

// Creamos una interfaz para la respuesta de login
export interface AuthResponse {
  success: boolean;
  message: string;
  user?: Usuario;
  token?: string; // Simularemos un token
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // Un BehaviorSubject mantiene el estado actual de la autenticación.
  // Inicia sabiendo si ya existe un token en el localStorage.
  private authStatus = new BehaviorSubject<boolean>(this.isLoggedIn());

  constructor(
    private dbService: LocalDatabaseService,
    private router: Router
  ) { }

  /**
   * Intenta iniciar sesión con un nombre de usuario y contraseña.
   */
  login(nombre_usuario: string, contrasena: string): Observable<AuthResponse> {
    const user = this.dbService.db.usuarios.find(
      u => u.nombre_usuario === nombre_usuario && u.password === contrasena
    );

    if (user) {
      // Éxito: Guardamos un token simulado y notificamos a la app.
      const token = `simulated-jwt-token-for-${user.ID_usuario}`;
      localStorage.setItem('authToken', token);
      this.authStatus.next(true);
      return of({ success: true, message: 'Inicio de sesión exitoso', user, token });
    } else {
      // Fracaso:
      return of({ success: false, message: 'Usuario o contraseña incorrectos' });
    }
  }

  /**
   * Cierra la sesión del usuario.
   */
  logout(): void {
    localStorage.removeItem('authToken');
    this.authStatus.next(false); // Notifica a la app que el usuario ha salido.
    this.router.navigate(['/auth/login']);
  }

  /**
   * Registra un nuevo usuario.
   * (Este es un ejemplo simple, se podría expandir para crear una Persona asociada).
   */
  register(usuario: Partial<Usuario>): Observable<Usuario> {
    const nuevoUsuario = this.dbService.db.insertUsuario(usuario);
    return of(nuevoUsuario);
  }

  /**
   * Verifica si hay un token en el almacenamiento local.
   */
  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  /**
   * Devuelve un Observable para que otros componentes (como el Navbar)
   * puedan reaccionar cuando el estado de autenticación cambia.
   */
  getAuthStatus(): Observable<boolean> {
    return this.authStatus.asObservable();
  }
}