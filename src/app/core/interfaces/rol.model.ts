export class Rol {
    private _ID_rol: number = 0;
    private _nombre_rol: string = '';
    private _estado: boolean = true;

    constructor(init?: Partial<Rol>) {
        if (init) {
        Object.assign(this, init);
        }
    }

    get ID_rol(): number {
        return this._ID_rol;
    }

    get nombre_rol(): string {
        return this._nombre_rol;
    }

    set nombre_rol(value: string) {
        if (value.length < 3) {
        throw new Error('El nombre del rol debe tener al menos 3 caracteres.');
        }
        this._nombre_rol = value;
    }

    get estado(): boolean {
        return this._estado;
    }

    set estado(value: boolean) {
        this._estado = value;
    }
}