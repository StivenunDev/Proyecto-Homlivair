import { Propiedad } from './propiedad.model';

export class Ambiente {
    private _ID_ambientes: number = 0;
    private _ID_propiedades: number | null = null;
    private _nombre_ambiente: string = '';
    private _descripcion: string = '';
    private _imagen: string = '';
    private _estado: boolean = true;

    // Relación
    private _propiedad: Propiedad | null = null;

    constructor(init?: Partial<Ambiente>) {
        if (init) {
        Object.assign(this, init);
        }
    }

    get ID_ambientes(): number {
        return this._ID_ambientes;
    }

    get ID_propiedades(): number | null {
        return this._ID_propiedades;
    }

    set ID_propiedades(value: number | null) {
        this._ID_propiedades = value;
    }

    get nombre_ambiente(): string {
        return this._nombre_ambiente;
    }

    set nombre_ambiente(value: string) {
        if (value.length < 3) {
        throw new Error('El nombre del ambiente debe tener al menos 3 caracteres.');
        }
        this._nombre_ambiente = value;
    }

    get descripcion(): string {
        return this._descripcion;
    }

    set descripcion(value: string) {
        this._descripcion = value;
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

    get propiedad(): Propiedad | null {
        return this._propiedad;
    }

    set propiedad(value: Propiedad | null) {
        this._propiedad = value;
        if (value) {
        this._ID_propiedades = value.ID_propiedades;
        }
    }
}