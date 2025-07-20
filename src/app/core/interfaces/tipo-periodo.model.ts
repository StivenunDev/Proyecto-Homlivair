export class TipoPeriodo {
    private _ID_tipo_periodo: number = 0;
    private _nombre_tipo_periodo: string = '';
    private _valor: number | null = null;
    private _estado: boolean = true;

    constructor(init?: Partial<TipoPeriodo>) {
        if (init) {
        Object.assign(this, init);
        }
    }

    get ID_tipo_periodo(): number {
        return this._ID_tipo_periodo;
    }

    get nombre_tipo_periodo(): string {
        return this._nombre_tipo_periodo;
    }

    set nombre_tipo_periodo(value: string) {
        if (value.length < 3) {
        throw new Error('El nombre del tipo de periodo debe tener al menos 3 caracteres.');
        }
        this._nombre_tipo_periodo = value;
    }

    get valor(): number | null {
        return this._valor;
    }

    set valor(value: number | null) {
        this._valor = value;
    }

    get estado(): boolean {
        return this._estado;
    }

    set estado(value: boolean) {
        this._estado = value;
    }
}