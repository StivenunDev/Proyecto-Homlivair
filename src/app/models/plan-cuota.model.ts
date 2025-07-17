import { Alquiler } from './alquiler.model';
import { Pago } from './pago.model';

export class PlanCuota {
    ID_cuota: number = 0;
    ID_alquiler: number = 0;
    numero_cuota: number = 0;
    monto_cuota: number = 0;
    fecha_vencimiento: Date | null = null;
    estado: 'pendiente' | 'pagada' | 'vencida' = 'pendiente';
    ID_pago: number | null = null;

    // Relaciones
    alquiler?: Alquiler;
    pago?: Pago;
}