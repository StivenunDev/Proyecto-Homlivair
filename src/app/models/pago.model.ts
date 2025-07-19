import { Alquiler } from './alquiler.model';
import { MedioPagoUsuario } from './medio-pago-usuario.model';

export class Pago {
    private _ID_pagos: number = 0;
    private _ID_alquiler: number | null = null;
    private _ID_medio_pago_usuario: number | null = null;
    private _tipo_moneda: string = '';
    private _fecha_pago: Date | null = null;
    private _monto_pago: number | null = null;
    private _estado_pago: 'pendiente' | 'aprobado' | 'rechazado' = 'pendiente';
    private _imagen_comprobante_pago: string = '';
    private _estado: boolean = true;
    private _es_cuota_vencida: boolean = false;
    private _monto_recargo: number | null = null;
    private _dias_retraso: number | null = null;

    // Relaciones
    private _alquiler: Alquiler | null = null;
    private _medioPagoUsuario: MedioPagoUsuario | null = null;

    constructor(init?: Partial<Pago>) {
        if (init) {
        Object.assign(this, init);
        if (init.fecha_pago) this._fecha_pago = new Date(init.fecha_pago);
        }
    }

    get ID_pagos(): number {
        return this._ID_pagos;
    }

    get ID_alquiler(): number | null {
        return this._ID_alquiler;
    }

    set ID_alquiler(value: number | null) {
        this._ID_alquiler = value;
    }

    get ID_medio_pago_usuario(): number | null {
        return this._ID_medio_pago_usuario;
    }

    set ID_medio_pago_usuario(value: number | null) {
        this._ID_medio_pago_usuario = value;
    }

    get tipo_moneda(): string {
        return this._tipo_moneda;
    }

    set tipo_moneda(value: string) {
        this._tipo_moneda = value;
    }

    get fecha_pago(): Date | null {
        return this._fecha_pago;
    }

    set fecha_pago(value: Date | null) {
        this._fecha_pago = value;
    }

    get monto_pago(): number | null {
        return this._monto_pago;
    }

    set monto_pago(value: number | null) {
        this._monto_pago = value;
    }

    get estado_pago(): 'pendiente' | 'aprobado' | 'rechazado' {
        return this._estado_pago;
    }

    set estado_pago(value: 'pendiente' | 'aprobado' | 'rechazado') {
        this._estado_pago = value;
    }

    get imagen_comprobante_pago(): string {
        return this._imagen_comprobante_pago;
    }

    set imagen_comprobante_pago(value: string) {
        this._imagen_comprobante_pago = value;
    }

    get estado(): boolean {
        return this._estado;
    }

    set estado(value: boolean) {
        this._estado = value;
    }

    get es_cuota_vencida(): boolean {
        return this._es_cuota_vencida;
    }

    set es_cuota_vencida(value: boolean) {
        this._es_cuota_vencida = value;
    }

    get monto_recargo(): number | null {
        return this._monto_recargo;
    }

    set monto_recargo(value: number | null) {
        this._monto_recargo = value;
    }

    get dias_retraso(): number | null {
        return this._dias_retraso;
    }

    set dias_retraso(value: number | null) {
        this._dias_retraso = value;
    }

    get alquiler(): Alquiler | null {
        return this._alquiler;
    }

    set alquiler(value: Alquiler | null) {
        this._alquiler = value;
        if (value) {
        this._ID_alquiler = value.ID_alquiler;
        }
    }

    get medioPagoUsuario(): MedioPagoUsuario | null {
        return this._medioPagoUsuario;
    }

    set medioPagoUsuario(value: MedioPagoUsuario | null) {
        this._medioPagoUsuario = value;
        if (value) {
        this._ID_medio_pago_usuario = value.ID_medio_pago_usuario;
        }
    }
}