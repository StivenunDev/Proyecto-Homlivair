import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LocalDatabaseService } from './local-database.service'; // Importamos el SERVICIO central
import { TipoPropiedad } from '../interfaces/tipo-propiedad.model';

@Injectable({
  providedIn: 'root'
})
export class TipoPropiedadService {
  
  // El servicio ya no crea su propia 'db'. La recibe.
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor AHORA ESTÁ VACÍO.
  }

  // Los métodos acceden a la base de datos a través del servicio inyectado
  // y devuelven Observables.
  getAllTiposPropiedad(): Observable<TipoPropiedad[]> {
    const tipos = this.databaseService.db.tiposPropiedad;
    return of([...tipos]);
  }

  getTipoPropiedadById(id: number): Observable<TipoPropiedad | undefined> {
    const tipo = this.databaseService.db.getTipoPropiedadById(id);
    return of(tipo);
  }

  createTipoPropiedad(tipoPropiedad: Partial<TipoPropiedad>): Observable<TipoPropiedad> {
    const nuevoTipo = this.databaseService.db.insertTipoPropiedad(tipoPropiedad);
    return of(nuevoTipo);
  }

  updateTipoPropiedad(id: number, tipoPropiedad: Partial<TipoPropiedad>): Observable<boolean> {
    const resultado = this.databaseService.db.updateTipoPropiedad(id, tipoPropiedad);
    return of(resultado);
  }

  deleteTipoPropiedad(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deleteTipoPropiedad(id);
    return of(resultado);
  }
}