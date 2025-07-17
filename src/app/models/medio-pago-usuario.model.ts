import { Usuario } from './usuario.model';
import { MedioPago } from './medio-pago.model';

export class MedioPagoUsuario {
    ID_medio_pago_usuario: number = 0;
    ID_usuario: number | null = null;
    ID_medio_pago: number | null = null;
    codigo_medio_pago: string = '';
    estado: boolean = true;
    descripcion: string = '';

    // Relaciones
    usuario?: Usuario;
    medioPago?: MedioPago;
}