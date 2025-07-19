import { Usuario } from './usuario.model';
import { Ubicacion } from './ubicacion.model';
import { TipoPropiedad } from './tipo-propiedad.model';
import { TipoPeriodo } from './tipo-periodo.model';

export class Propiedad {
    private _ID_propiedades: number = 0;
    private _ID_usuario: number | null = null;
    private _ID_ubicacion: number | null = null;
    private _ID_tipo_propiedad: number | null = null;
    private _ID_tipo_periodo: number | null = null;
    private _tipo_moneda: string = '';
    private _precio_base: number | null = null;
    private _fecha_creacion: Date | null = null;
    private _fecha_actualizacion: Date | null = null;
    private _descripcion: string = '';
    private _estado_propiedades: 'disponible' | 'inhabilitado' | 'alquilada' = 'disponible';
    private _titulo_anuncio: string = '';
    private _reglas: string = '';
    private _max_inquilino: number | null = null;
    private _imagen: string = '';
    private _estado: boolean = true;

    // Relaciones
    private _usuario: Usuario | null = null;
    private _ubicacion: Ubicacion | null = null;
    private _tipoPropiedad: TipoPropiedad | null = null;
    private _tipoPeriodo: TipoPeriodo | null = null;

    constructor(init?: Partial<Propiedad>) {
        if (init) {
        Object.assign(this, init);
        if (init.fecha_creacion) this._fecha_creacion = new Date(init.fecha_creacion);
        if (init.fecha_actualizacion) this._fecha_actualizacion = new Date(init.fecha_actualizacion);
        }
    }

    get ID_propiedades(): number {
        return this._ID_propiedades;
    }

    get ID_usuario(): number | null {
        return this._ID_usuario;
    }

    set ID_usuario(value: number | null) {
        this._ID_usuario = value;
    }

    get ID_ubicacion(): number | null {
        return this._ID_ubicacion;
    }

    set ID_ubicacion(value: number | null) {
        this._ID_ubicacion = value;
    }

    get ID_tipo_propiedad(): number | null {
        return this._ID_tipo_propiedad;
    }

    set ID_tipo_propiedad(value: number | null) {
        this._ID_tipo_propiedad = value;
    }

    get ID_tipo_periodo(): number | null {
        return this._ID_tipo_periodo;
    }

    set ID_tipo_periodo(value: number | null) {
        this._ID_tipo_periodo = value;
    }

    get tipo_moneda(): string {
        return this._tipo_moneda;
    }

    set tipo_moneda(value: string) {
        this._tipo_moneda = value;
    }

    get precio_base(): number | null {
        return this._precio_base;
    }

    set precio_base(value: number | null) {
        this._precio_base = value;
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

    get descripcion(): string {
        return this._descripcion;
    }

    set descripcion(value: string) {
        this._descripcion = value;
    }

    get estado_propiedades(): 'disponible' | 'inhabilitado' | 'alquilada' {
        return this._estado_propiedades;
    }

    set estado_propiedades(value: 'disponible' | 'inhabilitado' | 'alquilada') {
        this._estado_propiedades = value;
    }

    get titulo_anuncio(): string {
        return this._titulo_anuncio;
    }

    set titulo_anuncio(value: string) {
        this._titulo_anuncio = value;
    }

    get reglas(): string {
        return this._reglas;
    }

    set reglas(value: string) {
        this._reglas = value;
    }

    get max_inquilino(): number | null {
        return this._max_inquilino;
    }

    set max_inquilino(value: number | null) {
        this._max_inquilino = value;
    }

    get imagen(): string {
        return this._imagen;
    }

    set imagen(value: string) {
        this._imagen = value;
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

    get ubicacion(): Ubicacion | null {
        return this._ubicacion;
    }

    set ubicacion(value: Ubicacion | null) {
        this._ubicacion = value;
        if (value) {
        this._ID_ubicacion = value.ID_ubicacion;
        }
    }

    get tipoPropiedad(): TipoPropiedad | null {
        return this._tipoPropiedad;
    }

    set tipoPropiedad(value: TipoPropiedad | null) {
        this._tipoPropiedad = value;
        if (value) {
        this._ID_tipo_propiedad = value.ID_tipo_propiedad;
        }
    }

    get tipoPeriodo(): TipoPeriodo | null {
        return this._tipoPeriodo;
    }

    set tipoPeriodo(value: TipoPeriodo | null) {
        this._tipoPeriodo = value;
        if (value) {
        this._ID_tipo_periodo = value.ID_tipo_periodo;
        }
    }
}