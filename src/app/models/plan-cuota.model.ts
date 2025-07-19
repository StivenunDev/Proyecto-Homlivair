import { Alquiler } from './alquiler.model';
import { Pago } from './pago.model';

export class PlanCuota {
    private _ID_cuota: number = 0;
    private _ID_alquiler: number = 0;
    private _numero_cuota: number = 0;
    private _monto_cuota: number = 0;
    private _fecha_vencimiento: Date | null = null;
    private _estado: 'pendiente' | 'pagada' | 'vencida' = 'pendiente';
    private _ID_pago: number | null = null;

    // Relaciones
    private _alquiler: Alquiler | null = null;
    private _pago: Pago | null = null;

    constructor(init?: Partial<PlanCuota>) {
        if (init) {
        Object.assign(this, init);
        if (init.fecha_vencimiento) this._fecha_vencimiento = new Date(init.fecha_vencimiento);
        }
    }

    get ID_cuota(): number {
        return this._ID_cuota;
    }

    get ID_alquiler(): number {
        return this._ID_alquiler;
    }

    set ID_alquiler(value: number) {
        this._ID_alquiler = value;
    }

    get numero_cuota(): number {
        return this._numero_cuota;
    }

    set numero_cuota(value: number) {
        this._numero_cuota = value;
    }

    get monto_cuota(): number {
        return this._monto_cuota;
    }

    set monto_cuota(value: number) {
        this._monto_cuota = value;
    }

    get fecha_vencimiento(): Date | null {
        return this._fecha_vencimiento;
    }

    set fecha_vencimiento(value: Date | null) {
        this._fecha_vencimiento = value;
    }

    get estado(): 'pendiente' | 'pagada' | 'vencida' {
        return this._estado;
    }

    set estado(value: 'pendiente' | 'pagada' | 'vencida') {
        this._estado = value;
    }

    get ID_pago(): number | null {
        return this._ID_pago;
    }

    set ID_pago(value: number | null) {
        this._ID_pago = value;
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

    get pago(): Pago | null {
        return this._pago;
    }

    set pago(value: Pago | null) {
        this._pago = value;
        if (value) {
        this._ID_pago = value.ID_pagos;
        }
    }
}