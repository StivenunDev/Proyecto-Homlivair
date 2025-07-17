import { Usuario } from './usuario.model';
import { Ubicacion } from './ubicacion.model';
import { TipoPropiedad } from './tipo-propiedad.model';
import { TipoPeriodo } from './tipo-periodo.model';

export class Propiedad {
    ID_propiedades: number = 0;
    ID_usuario: number | null = null;
    ID_ubicacion: number | null = null;
    ID_tipo_propiedad: number | null = null;
    ID_tipo_periodo: number | null = null;
    tipo_moneda: string = '';
    precio_base: number | null = null;
    fecha_creacion: Date | null = null;
    fecha_actualizacion: Date | null = null;
    descripcion: string = '';
    estado_propiedades: 'disponible' | 'inhabilitado' | 'alquilada' = 'disponible';
    titulo_anuncio: string = '';
    reglas: string = '';
    max_inquilino: number | null = null;
    imagen: string = '';
    estado: boolean = true;

    // Relaciones
    usuario?: Usuario;
    ubicacion?: Ubicacion;
    tipoPropiedad?: TipoPropiedad;
    tipoPeriodo?: TipoPeriodo;
}