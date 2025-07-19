import { Pago } from './pago.model';
import { Solicitud } from './solicitud.model';

export class Reembolso {
    private _id_reembolso: number = 0;
    private _id_pago: number = 0;
    private _id_solicitud: number = 0;
    private _monto_original: number = 0;
    private _monto_reembolsado: number = 0;
    private _porcentaje_aplicado: number | null = null;
    private _motivo: string = '';
    private _validado_por_anfitrion: boolean = false;
    private _confirmado_por_huesped: boolean = false;
    private _estado: 'pendiente' | 'validado' | 'confirmado' | 'rechazado' = 'pendiente';
    private _fecha_generado: Date | null = null;
    private _fecha_validacion: Date | null = null;
    private _fecha_confirmacion: Date | null = null;
    private _observaciones_validacion: string = '';
    private _observaciones_confirmacion: string = '';

    // Relaciones
    private _pago: Pago | null = null;
    private _solicitud: Solicitud | null = null;

    constructor(init?: Partial<Reembolso>) {
        if (init) {
        Object.assign(this, init);
        if (init.fecha_generado) this._fecha_generado = new Date(init.fecha_generado);
        if (init.fecha_validacion) this._fecha_validacion = new Date(init.fecha_validacion);
        if (init.fecha_confirmacion) this._fecha_confirmacion = new Date(init.fecha_confirmacion);
        }
    }

    get id_reembolso(): number {
        return this._id_reembolso;
    }

    get id_pago(): number {
        return this._id_pago;
    }

    set id_pago(value: number) {
        this._id_pago = value;
    }

    get id_solicitud(): number {
        return this._id_solicitud;
    }

    set id_solicitud(value: number) {
        this._id_solicitud = value;
    }

    get monto_original(): number {
        return this._monto_original;
    }

    set monto_original(value: number) {
        this._monto_original = value;
    }

    get monto_reembolsado(): number {
        return this._monto_reembolsado;
    }

    set monto_reembolsado(value: number) {
        this._monto_reembolsado = value;
    }

    get porcentaje_aplicado(): number | null {
        return this._porcentaje_aplicado;
    }

    set porcentaje_aplicado(value: number | null) {
        this._porcentaje_aplicado = value;
    }

    get motivo(): string {
        return this._motivo;
    }

    set motivo(value: string) {
        this._motivo = value;
    }

    get validado_por_anfitrion(): boolean {
        return this._validado_por_anfitrion;
    }

    set validado_por_anfitrion(value: boolean) {
        this._validado_por_anfitrion = value;
    }

    get confirmado_por_huesped(): boolean {
        return this._confirmado_por_huesped;
    }

    set confirmado_por_huesped(value: boolean) {
        this._confirmado_por_huesped = value;
    }

    get estado(): 'pendiente' | 'validado' | 'confirmado' | 'rechazado' {
        return this._estado;
    }

    set estado(value: 'pendiente' | 'validado' | 'confirmado' | 'rechazado') {
        this._estado = value;
    }

    get fecha_generado(): Date | null {
        return this._fecha_generado;
    }

    set fecha_generado(value: Date | null) {
        this._fecha_generado = value;
    }

    get fecha_validacion(): Date | null {
        return this._fecha_validacion;
    }

    set fecha_validacion(value: Date | null) {
        this._fecha_validacion = value;
    }

    get fecha_confirmacion(): Date | null {
        return this._fecha_confirmacion;
    }

    set fecha_confirmacion(value: Date | null) {
        this._fecha_confirmacion = value;
    }

    get observaciones_validacion(): string {
        return this._observaciones_validacion;
    }

    set observaciones_validacion(value: string) {
        this._observaciones_validacion = value;
    }

    get observaciones_confirmacion(): string {
        return this._observaciones_confirmacion;
    }

    set observaciones_confirmacion(value: string) {
        this._observaciones_confirmacion = value;
    }

    get pago(): Pago | null {
        return this._pago;
    }

    set pago(value: Pago | null) {
        this._pago = value;
        if (value) {
        this._id_pago = value.ID_pagos;
        }
    }

    get solicitud(): Solicitud | null {
        return this._solicitud;
    }

    set solicitud(value: Solicitud | null) {
        this._solicitud = value;
        if (value) {
        this._id_solicitud = value.ID_solicitud;
        }
    }
}