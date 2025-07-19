import { Rol } from './rol.model';
import { Persona } from './persona.model';

export class Usuario {
    private _ID_usuario: number = 0;
    private _ID_personas: number | null = null;
    private _ID_rol: number | null = null;
    private _nombre_usuario: string = '';
    private _password: string = '';
    private _fecha_creacion: Date | null = null;
    private _fecha_actualizacion: Date | null = null;
    private _estado: boolean = true;
    private _imagen: string = '';

    // Relaciones
    private _persona: Persona | null = null;
    private _rol: Rol | null = null;

    constructor(init?: Partial<Usuario>) {
        if (init) {
        Object.assign(this, init);
        if (init.fecha_creacion) this._fecha_creacion = new Date(init.fecha_creacion);
        if (init.fecha_actualizacion) this._fecha_actualizacion = new Date(init.fecha_actualizacion);
        }
    }

    get ID_usuario(): number {
        return this._ID_usuario;
    }

    get ID_personas(): number | null {
        return this._ID_personas;
    }

    set ID_personas(value: number | null) {
        this._ID_personas = value;
    }

    get ID_rol(): number | null {
        return this._ID_rol;
    }

    set ID_rol(value: number | null) {
        this._ID_rol = value;
    }

    get nombre_usuario(): string {
        return this._nombre_usuario;
    }

    set nombre_usuario(value: string) {
        if (value.length < 3) {
        throw new Error('El nombre de usuario debe tener al menos 3 caracteres.');
        }
        this._nombre_usuario = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        if (value.length < 6) {
        throw new Error('La contraseña debe tener al menos 6 caracteres.');
        }
        this._password = value;
    }

    get fecha_creacion(): Date | null {
        return this._fecha_creacion;
    }

    set fecha_creacion(value: Date | null) {
        this._fecha_creacion = value;
    }

    get fecha_actualizacion(): Date | null {
        return this._fecha_actualizacion;
    }

    set fecha_actualizacion(value: Date | null) {
        this._fecha_actualizacion = value;
    }

    get estado(): boolean {
        return this._estado;
    }

    set estado(value: boolean) {
        this._estado = value;
    }

    get imagen(): string {
        return this._imagen;
    }

    set imagen(value: string) {
        this._imagen = value;
    }

    get persona(): Persona | null {
        return this._persona;
    }

    set persona(value: Persona | null) {
        this._persona = value;
        if (value) {
        this._ID_personas = value.ID_personas;
        }
    }

    get rol(): Rol | null {
        return this._rol;
    }

    set rol(value: Rol | null) {
        this._rol = value;
        if (value) {
        this._ID_rol = value.ID_rol;
        }
    }
}