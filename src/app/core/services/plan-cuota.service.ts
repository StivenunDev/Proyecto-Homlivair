import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { PlanCuota } from '../interfaces/plan-cuota.model';

@Injectable({
  providedIn: 'root'
})
export class PlanCuotaService {
  private db = new LocalDatabase();

  constructor() {
    // Datos iniciales (opcional)
    this.db.insertPlanCuota({
      numero_cuota: 1,
      monto_cuota: 50,
      fecha_vencimiento: new Date('2025-08-01'),
      estado: 'pendiente'
    });
  }

  getAllPlanCuotas(): PlanCuota[] {
    return [...this.db.planCuotas];
  }

  getPlanCuotaById(id: number): PlanCuota | undefined {
    return this.db.getPlanCuotaById(id);
  }

  createPlanCuota(planCuota: Partial<PlanCuota>): PlanCuota {
    return this.db.insertPlanCuota(planCuota);
  }

  updatePlanCuota(id: number, planCuota: Partial<PlanCuota>): boolean {
    return this.db.updatePlanCuota(id, planCuota);
  }

  deletePlanCuota(id: number): boolean {
    return this.db.deletePlanCuota(id);
  }
}