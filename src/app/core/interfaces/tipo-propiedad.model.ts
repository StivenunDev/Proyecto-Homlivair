export class TipoPropiedad {
    private _ID_tipo_propiedad: number = 0;
    private _nombre_tipo_propiedad: string = '';
    private _estado: boolean = true;

    constructor(init?: Partial<TipoPropiedad>) {
        if (init) {
        Object.assign(this, init);
        }
    }

    get ID_tipo_propiedad(): number {
        return this._ID_tipo_propiedad;
    }

    get nombre_tipo_propiedad(): string {
        return this._nombre_tipo_propiedad;
    }

    set nombre_tipo_propiedad(value: string) {
        if (value.length < 3) {
        throw new Error('El nombre del tipo de propiedad debe tener al menos 3 caracteres.');
        }
        this._nombre_tipo_propiedad = value;
    }

    get estado(): boolean {
        return this._estado;
    }

    set estado(value: boolean) {
        this._estado = value;
    }
}