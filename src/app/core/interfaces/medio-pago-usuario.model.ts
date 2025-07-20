import { Usuario } from './usuario.model';
import { MedioPago } from './medio-pago.model';

export class MedioPagoUsuario {
    private _ID_medio_pago_usuario: number = 0;
    private _ID_usuario: number | null = null;
    private _ID_medio_pago: number | null = null;
    private _codigo_medio_pago: string = '';
    private _estado: boolean = true;
    private _descripcion: string = '';

    // Relaciones
    private _usuario: Usuario | null = null;
    private _medioPago: MedioPago | null = null;

    constructor(init?: Partial<MedioPagoUsuario>) {
        if (init) {
        Object.assign(this, init);
        }
    }

    get ID_medio_pago_usuario(): number {
        return this._ID_medio_pago_usuario;
    }

    get ID_usuario(): number | null {
        return this._ID_usuario;
    }

    set ID_usuario(value: number | null) {
        this._ID_usuario = value;
    }

    get ID_medio_pago(): number | null {
        return this._ID_medio_pago;
    }

    set ID_medio_pago(value: number | null) {
        this._ID_medio_pago = value;
    }

    get codigo_medio_pago(): string {
        return this._codigo_medio_pago;
    }

    set codigo_medio_pago(value: string) {
        if (value.length < 5) {
        throw new Error('El código del medio de pago debe tener al menos 5 caracteres.');
        }
        this._codigo_medio_pago = value;
    }

    get estado(): boolean {
        return this._estado;
    }

    set estado(value: boolean) {
        this._estado = value;
    }

    get descripcion(): string {
        return this._descripcion;
    }

    set descripcion(value: string) {
        this._descripcion = value;
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

    get medioPago(): MedioPago | null {
        return this._medioPago;
    }

    set medioPago(value: MedioPago | null) {
        this._medioPago = value;
        if (value) {
        this._ID_medio_pago = value.ID_medio_pago;
        }
    }
}