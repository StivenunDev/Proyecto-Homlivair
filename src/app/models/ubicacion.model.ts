export class Ubicacion {
    private _ID_ubicacion: number = 0;
    private _cod_pais: string = '';
    private _cod_provincia: string = '';
    private _cod_ciudad: string = '';
    private _nombre_lugar: string = '';
    private _codigo_postal: string = '';
    private _latitud: number | null = null;
    private _longitud: number | null = null;
    private _estado: boolean = true;
    private _descripcion: string = '';

    constructor(init?: Partial<Ubicacion>) {
        if (init) {
        Object.assign(this, init);
        }
    }

    get ID_ubicacion(): number {
        return this._ID_ubicacion;
    }

    get cod_pais(): string {
        return this._cod_pais;
    }

    set cod_pais(value: string) {
        if (value.length !== 2) {
        throw new Error('El código de país debe tener 2 caracteres.');
        }
        this._cod_pais = value;
    }

    get cod_provincia(): string {
        return this._cod_provincia;
    }

    set cod_provincia(value: string) {
        if (value.length !== 2) {
        throw new Error('El código de provincia debe tener 2 caracteres.');
        }
        this._cod_provincia = value;
    }

    get cod_ciudad(): string {
        return this._cod_ciudad;
    }

    set cod_ciudad(value: string) {
        if (value.length !== 2) {
        throw new Error('El código de ciudad debe tener 2 caracteres.');
        }
        this._cod_ciudad = value;
    }

    get nombre_lugar(): string {
        return this._nombre_lugar;
    }

    set nombre_lugar(value: string) {
        this._nombre_lugar = value;
    }

    get codigo_postal(): string {
        return this._codigo_postal;
    }

    set codigo_postal(value: string) {
        this._codigo_postal = value;
    }

    get latitud(): number | null {
        return this._latitud;
    }

    set latitud(value: number | null) {
        this._latitud = value;
    }

    get longitud(): number | null {
        return this._longitud;
    }

    set longitud(value: number | null) {
        this._longitud = value;
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
}