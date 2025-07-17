import { PlanCuota } from './plan-cuota.model';
import { Pago } from './pago.model';
import { Usuario } from './usuario.model';
import { TipoPeriodo } from './tipo-periodo.model';

export class Alquiler {
    ID_alquiler: number = 0;
    ID_usuario: number | null = null;
    ID_tipo_periodo: number | null = null;
    valor_periodo: number | null = null;
    fecha_creacion: Date | null = null;
    fecha_inicio: Date | null = null;
    fecha_fin: Date | null = null;
    fecha_actualizacion: Date | null = null;
    monto_total_pago: number | null = null;
    descripcion: string = '';
    estado_alquiler: 'pendiente' | 'en curso' | 'finalizado' = 'pendiente';
    estado: boolean = true;

    // Relaciones
    usuario?: Usuario;
    tipoPeriodo?: TipoPeriodo;
    pagos?: Pago[];
    cuotas?: PlanCuota[];
}