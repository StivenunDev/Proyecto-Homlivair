import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importamos Observable y of

// 2. Importamos el SERVICIO central que contiene la base de datos
import { LocalDatabaseService } from './local-database.service';
import { PoliticaRegla } from '../interfaces/politica-regla.model';

@Injectable({
  providedIn: 'root'
})
export class PoliticaReglaService {
  // 3. Eliminamos la creación de una instancia privada de la base de datos
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central en el constructor
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor debe estar vacío.
  }

  // 5. Todos los métodos ahora devuelven Observables
  getAllPoliticasReglas(): Observable<PoliticaRegla[]> {
    const politicasReglas = this.databaseService.db.politicasReglas;
    return of([...politicasReglas]);
  }

  getPoliticaReglaById(id: number): Observable<PoliticaRegla | undefined> {
    const politicaRegla = this.databaseService.db.getPoliticaReglaById(id);
    return of(politicaRegla);
  }

  createPoliticaRegla(politica: Partial<PoliticaRegla>): Observable<PoliticaRegla> {
    const nuevaPoliticaRegla = this.databaseService.db.insertPoliticaRegla(politica);
    return of(nuevaPoliticaRegla);
  }

  updatePoliticaRegla(id: number, politica: Partial<PoliticaRegla>): Observable<boolean> {
    const resultado = this.databaseService.db.updatePoliticaRegla(id, politica);
    return of(resultado);
  }

  deletePoliticaRegla(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deletePoliticaRegla(id);
    return of(resultado);
  }
}