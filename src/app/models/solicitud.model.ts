import { Usuario } from './usuario.model';
import { Propiedad } from './propiedad.model';


export class Solicitud {
    ID_solicitud: number = 0;
    ID_usuario: number | null = null;
    ID_propiedades: number | null = null;
    ID_solicitud_referencia: number | null = null;
    tipo_solicitud: 'alquiler' | 'cancelacion' | 'actualizacion' = 'alquiler';
    fecha_creacion: Date | null = null;
    fecha_actualizacion: Date | null = null;
    fecha_respuesta: Date | null = null;
    descripcion: string = '';
    estado_solicitud: 'Pendiente' | 'Aprobada' | 'Rechazada' | 'Cancelada' = 'Pendiente';
    respuesta_solicitud: string = '';
    estado: boolean = true;

    // Relaciones
    usuario?: Usuario;
    propiedad?: Propiedad;
    solicitudReferencia?: Solicitud;
}