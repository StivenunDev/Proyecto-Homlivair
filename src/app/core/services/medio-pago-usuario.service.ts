import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importamos Observable y of

// 2. Importamos el SERVICIO central que contiene la base de datos
import { LocalDatabaseService } from './local-database.service';
import { MedioPagoUsuario } from '../interfaces/medio-pago-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class MedioPagoUsuarioService {
  // 3. Eliminamos la creación de una instancia privada de la base de datos
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central en el constructor
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor debe estar vacío.
  }

  // 5. Todos los métodos ahora devuelven Observables
  getAllMediosPagoUsuario(): Observable<MedioPagoUsuario[]> {
    const medios = this.databaseService.db.mediosPagoUsuario;
    return of([...medios]);
  }

  getMedioPagoUsuarioById(id: number): Observable<MedioPagoUsuario | undefined> {
    const medio = this.databaseService.db.getMedioPagoUsuarioById(id);
    return of(medio);
  }

  createMedioPagoUsuario(medioPagoUsuario: Partial<MedioPagoUsuario>): Observable<MedioPagoUsuario> {
    const nuevoMedio = this.databaseService.db.insertMedioPagoUsuario(medioPagoUsuario);
    return of(nuevoMedio);
  }

  updateMedioPagoUsuario(id: number, medioPagoUsuario: Partial<MedioPagoUsuario>): Observable<boolean> {
    const resultado = this.databaseService.db.updateMedioPagoUsuario(id, medioPagoUsuario);
    return of(resultado);
  }

  deleteMedioPagoUsuario(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deleteMedioPagoUsuario(id);
    return of(resultado);
  }
}