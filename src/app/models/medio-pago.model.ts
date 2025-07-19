export class MedioPago {
    private _ID_medio_pago: number = 0;
    private _nombre_medio_pago: string = '';
    private _estado: boolean = true;

    constructor(init?: Partial<MedioPago>) {
        if (init) {
        Object.assign(this, init);
        }
    }

    get ID_medio_pago(): number {
        return this._ID_medio_pago;
    }

    get nombre_medio_pago(): string {
        return this._nombre_medio_pago;
    }

    set nombre_medio_pago(value: string) {
        if (value.length < 3) {
        throw new Error('El nombre del medio de pago debe tener al menos 3 caracteres.');
        }
        this._nombre_medio_pago = value;
    }

    get estado(): boolean {
        return this._estado;
    }

    set estado(value: boolean) {
        this._estado = value;
    }
}