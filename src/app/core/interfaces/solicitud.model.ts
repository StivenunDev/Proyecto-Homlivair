import { Usuario } from './usuario.model';
import { Propiedad } from './propiedad.model';


export class Solicitud {
    private _ID_solicitud: number = 0;
    private _ID_usuario: number | null = null;
    private _ID_propiedades: number | null = null;
    private _ID_solicitud_referencia: number | null = null;
    private _tipo_solicitud: 'alquiler' | 'cancelacion' | 'actualizacion' = 'alquiler';
    private _fecha_creacion: Date | null = null;
    private _fecha_actualizacion: Date | null = null;
    private _fecha_respuesta: Date | null = null;
    private _descripcion: string = '';
    private _estado_solicitud: 'Pendiente' | 'Aprobada' | 'Rechazada' | 'Cancelada' = 'Pendiente';
    private _respuesta_solicitud: string = '';
    private _estado: boolean = true;

    // Relaciones
    private _usuario: Usuario | null = null;
    private _propiedad: Propiedad | null = null;
    private _solicitudReferencia: Solicitud | null = null;

    constructor(init?: Partial<Solicitud>) {
        if (init) {
        Object.assign(this, init);
        if (init.fecha_creacion) this._fecha_creacion = new Date(init.fecha_creacion);
        if (init.fecha_actualizacion) this._fecha_actualizacion = new Date(init.fecha_actualizacion);
        if (init.fecha_respuesta) this._fecha_respuesta = new Date(init.fecha_respuesta);
        }
    }

    get ID_solicitud(): number {
        return this._ID_solicitud;
    }

    get ID_usuario(): number | null {
        return this._ID_usuario;
    }

    set ID_usuario(value: number | null) {
        this._ID_usuario = value;
    }

    get ID_propiedades(): number | null {
        return this._ID_propiedades;
    }

    set ID_propiedades(value: number | null) {
        this._ID_propiedades = value;
    }

    get ID_solicitud_referencia(): number | null {
        return this._ID_solicitud_referencia;
    }

    set ID_solicitud_referencia(value: number | null) {
        this._ID_solicitud_referencia = value;
    }

    get tipo_solicitud(): 'alquiler' | 'cancelacion' | 'actualizacion' {
        return this._tipo_solicitud;
    }

    set tipo_solicitud(value: 'alquiler' | 'cancelacion' | 'actualizacion') {
        this._tipo_solicitud = value;
    }

    get fecha_creacion(): Date | null {
        return this._fecha_creacion;
    }

    set fecha_creacion(value: Date | null) {
        this._fecha_creacion = value;
    }

    get fecha_actualizacion(): Date | null {
        return this._fecha_actualizacion;
    }

    set fecha_actualizacion(value: Date | null) {
        this._fecha_actualizacion = value;
    }

    get fecha_respuesta(): Date | null {
        return this._fecha_respuesta;
    }

    set fecha_respuesta(value: Date | null) {
        this._fecha_respuesta = value;
    }

    get descripcion(): string {
        return this._descripcion;
    }

    set descripcion(value: string) {
        this._descripcion = value;
    }

    get estado_solicitud(): 'Pendiente' | 'Aprobada' | 'Rechazada' | 'Cancelada' {
        return this._estado_solicitud;
    }

    set estado_solicitud(value: 'Pendiente' | 'Aprobada' | 'Rechazada' | 'Cancelada') {
        this._estado_solicitud = value;
    }

    get respuesta_solicitud(): string {
        return this._respuesta_solicitud;
    }

    set respuesta_solicitud(value: string) {
        this._respuesta_solicitud = value;
    }

    get estado(): boolean {
        return this._estado;
    }

    set estado(value: boolean) {
        this._estado = value;
    }

    get usuario(): Usuario | null {
        return this._usuario;
    }

    set usuario(value: Usuario | null) {
        this._usuario = value;
        if (value) {
        this._ID_usuario = value.ID_usuario;
        }
    }

    get propiedad(): Propiedad | null {
        return this._propiedad;
    }

    set propiedad(value: Propiedad | null) {
        this._propiedad = value;
        if (value) {
        this._ID_propiedades = value.ID_propiedades;
        }
    }

    get solicitudReferencia(): Solicitud | null {
        return this._solicitudReferencia;
    }

    set solicitudReferencia(value: Solicitud | null) {
        this._solicitudReferencia = value;
        if (value) {
        this._ID_solicitud_referencia = value.ID_solicitud;
        }
    }
}