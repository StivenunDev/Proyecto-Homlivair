import { Pago } from './pago.model';
import { Solicitud } from './solicitud.model';

export class Reembolso {
    id_reembolso: number = 0;
    id_pago: number = 0;
    id_solicitud: number = 0;
    monto_original: number = 0;
    monto_reembolsado: number = 0;
    porcentaje_aplicado: number | null = null;
    motivo: string = '';
    validado_por_anfitrion: boolean = false;
    confirmado_por_huesped: boolean = false;
    estado: 'pendiente' | 'validado' | 'confirmado' | 'rechazado' = 'pendiente';
    fecha_generado: Date | null = null;
    fecha_validacion: Date | null = null;
    fecha_confirmacion: Date | null = null;
    observaciones_validacion: string = '';
    observaciones_confirmacion: string = '';
}