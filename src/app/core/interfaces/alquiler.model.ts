import { TipoPeriodo } from './tipo-periodo.model';
import { Usuario } from './usuario.model';
import { Pago } from './pago.model';
import { PlanCuota } from './plan-cuota.model';

export class Alquiler {
    private _ID_alquiler: number = 0;
    private _ID_usuario: number | null = null;
    private _ID_solicitud: number | null = null;
    private _ID_tipo_periodo: number | null = null;
    private _valor_periodo: number | null = null;
    private _fecha_creacion: Date | null = null;
    private _fecha_inicio: Date | null = null;
    private _fecha_fin: Date | null = null;
    private _fecha_actualizacion: Date | null = null;
    private _monto_total_pago: number | null = null;
    private _descripcion: string = '';
    private _estado_alquiler: 'pendiente' | 'en curso' | 'finalizado' = 'pendiente';
    private _estado: boolean = true;

    // Relaciones
    private _usuario: Usuario | null = null;
    private _tipoPeriodo: TipoPeriodo | null = null;
    private _pagos: Pago[] = [];
    private _cuotas: PlanCuota[] = [];

    constructor(init?: Partial<Alquiler>) {
        if (init) {
        Object.assign(this, init);
        if (init.fecha_creacion) this._fecha_creacion = new Date(init.fecha_creacion);
        if (init.fecha_inicio) this._fecha_inicio = new Date(init.fecha_inicio);
        if (init.fecha_fin) this._fecha_fin = new Date(init.fecha_fin);
        if (init.fecha_actualizacion) this._fecha_actualizacion = new Date(init.fecha_actualizacion);
        }
    }

    get ID_alquiler(): number {
        return this._ID_alquiler;
    }

    get ID_usuario(): number | null {
        return this._ID_usuario;
    }

    set ID_usuario(value: number | null) {
        this._ID_usuario = value;
    }


    get ID_solicitud(): number | null {
        return this._ID_solicitud;
    }

    set ID_solicitud(value: number | null) {
        this._ID_solicitud= value;
    }



    get ID_tipo_periodo(): number | null {
        return this._ID_tipo_periodo;
    }

    set ID_tipo_periodo(value: number | null) {
        this._ID_tipo_periodo = value;
    }

    get valor_periodo(): number | null {
        return this._valor_periodo;
    }

    set valor_periodo(value: number | null) {
        this._valor_periodo = value;
    }

    get fecha_creacion(): Date | null {
        return this._fecha_creacion;
    }

    set fecha_creacion(value: Date | null) {
        this._fecha_creacion = value;
    }

    get fecha_inicio(): Date | null {
        return this._fecha_inicio;
    }

    set fecha_inicio(value: Date | null) {
        this._fecha_inicio = value;
    }

    get fecha_fin(): Date | null {
        return this._fecha_fin;
    }

    set fecha_fin(value: Date | null) {
        this._fecha_fin = value;
    }

    get fecha_actualizacion(): Date | null {
        return this._fecha_actualizacion;
    }

    set fecha_actualizacion(value: Date | null) {
        this._fecha_actualizacion = value;
    }

    get monto_total_pago(): number | null {
        return this._monto_total_pago;
    }

    set monto_total_pago(value: number | null) {
        this._monto_total_pago = value;
    }

    get descripcion(): string {
        return this._descripcion;
    }

    set descripcion(value: string) {
        this._descripcion = value;
    }

    get estado_alquiler(): 'pendiente' | 'en curso' | 'finalizado' {
        return this._estado_alquiler;
    }

    set estado_alquiler(value: 'pendiente' | 'en curso' | 'finalizado') {
        this._estado_alquiler = value;
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

    get tipoPeriodo(): TipoPeriodo | null {
        return this._tipoPeriodo;
    }

    set tipoPeriodo(value: TipoPeriodo | null) {
        this._tipoPeriodo = value;
        if (value) {
        this._ID_tipo_periodo = value.ID_tipo_periodo;
        }
    }

    get pagos(): Pago[] {
        return this._pagos;
    }

    set pagos(value: Pago[]) {
        this._pagos = value;
    }

    addPago(pago: Pago): void {
        this._pagos.push(pago);
    }

    get cuotas(): PlanCuota[] {
        return this._cuotas;
    }

    set cuotas(value: PlanCuota[]) {
        this._cuotas = value;
    }

    addCuota(cuota: PlanCuota): void {
        this._cuotas.push(cuota);
    }
}