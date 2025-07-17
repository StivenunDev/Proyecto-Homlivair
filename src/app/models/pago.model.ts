import { Alquiler } from './alquiler.model';
import { MedioPagoUsuario } from './medio-pago-usuario.model';

export class Pago {
    ID_pagos: number = 0;
    ID_alquiler: number | null = null;
    ID_medio_pago_usuario: number | null = null;
    tipo_moneda: string = '';
    fecha_pago: Date | null = null;
    monto_pago: number | null = null;
    estado_pago: 'pendiente' | 'aprobado' | 'rechazado' = 'pendiente';
    imagen_comprobante_pago: string = '';
    estado: boolean = true;
    es_cuota_vencida: boolean = false;
    monto_recargo: number | null = null;
    dias_retraso: number | null = null;

    // Relaciones
    alquiler?: Alquiler;
    medioPagoUsuario?: MedioPagoUsuario;
}