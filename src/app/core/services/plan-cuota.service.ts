import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'; // 1. Importamos Observable y of

// 2. Importamos el SERVICIO central que contiene la base de datos
import { LocalDatabaseService } from './local-database.service';
import { PlanCuota } from '../interfaces/plan-cuota.model';

@Injectable({
  providedIn: 'root'
})
export class PlanCuotaService {
  // 3. Eliminamos la creación de una instancia privada de la base de datos
  // private db = new LocalDatabase(); <-- SE ELIMINA

  // 4. Inyectamos el servicio central en el constructor
  constructor(private databaseService: LocalDatabaseService) {
    // El constructor debe estar vacío.
  }

  // 5. Todos los métodos ahora devuelven Observables
  getAllPlanCuotas(): Observable<PlanCuota[]> {
    const planCuotas = this.databaseService.db.planCuotas;
    return of([...planCuotas]);
  }

  getPlanCuotaById(id: number): Observable<PlanCuota | undefined> {
    const planCuota = this.databaseService.db.getPlanCuotaById(id);
    return of(planCuota);
  }

  createPlanCuota(planCuota: Partial<PlanCuota>): Observable<PlanCuota> {
    const nuevoPlanCuota = this.databaseService.db.insertPlanCuota(planCuota);
    return of(nuevoPlanCuota);
  }

  updatePlanCuota(id: number, planCuota: Partial<PlanCuota>): Observable<boolean> {
    const resultado = this.databaseService.db.updatePlanCuota(id, planCuota);
    return of(resultado);
  }

  deletePlanCuota(id: number): Observable<boolean> {
    const resultado = this.databaseService.db.deletePlanCuota(id);
    return of(resultado);
  }
}