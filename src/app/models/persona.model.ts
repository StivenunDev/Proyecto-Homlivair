export class Persona {
    private _ID_personas: number = 0;
    private _DNI: string = '';
    private _nombre: string = '';
    private _apellido_paterno: string = '';
    private _apellido_materno: string = '';
    private _fecha_nacimiento: Date | null = null;
    private _sexo: string = '';
    private _direccion: string = '';
    private _estado_civil: 'soltero' | 'casado' | 'viudo' | 'divorciado' = 'soltero';
    private _celular: string = '';
    private _email: string = '';
    private _fecha_registro: Date | null = null;
    private _fecha_actualizacion: Date | null = null;
    private _observaciones: string = '';
    private _estado: boolean = true;
    private _descripcion: string = '';

    constructor(init?: Partial<Persona>) {
        if (init) {
        Object.assign(this, init);
        if (init.fecha_nacimiento) this._fecha_nacimiento = new Date(init.fecha_nacimiento);
        if (init.fecha_registro) this._fecha_registro = new Date(init.fecha_registro);
        if (init.fecha_actualizacion) this._fecha_actualizacion = new Date(init.fecha_actualizacion);
        }
    }

    get ID_personas(): number {
        return this._ID_personas;
    }

    get DNI(): string {
        return this._DNI;
    }

    set DNI(value: string) {
        if (value.length !== 8) {
        throw new Error('El DNI debe tener 8 caracteres.');
        }
        this._DNI = value;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        if (value.length < 2) {
        throw new Error('El nombre debe tener al menos 2 caracteres.');
        }
        this._nombre = value;
    }

    get apellido_paterno(): string {
        return this._apellido_paterno;
    }

    set apellido_paterno(value: string) {
        this._apellido_paterno = value;
    }

    get apellido_materno(): string {
        return this._apellido_materno;
    }

    set apellido_materno(value: string) {
        this._apellido_materno = value;
    }

    get fecha_nacimiento(): Date | null {
        return this._fecha_nacimiento;
    }

    set fecha_nacimiento(value: Date | null) {
        this._fecha_nacimiento = value;
    }

    get sexo(): string {
        return this._sexo;
    }

    set sexo(value: string) {
        if (value.length !== 1) {
        throw new Error('El sexo debe ser un único carácter.');
        }
        this._sexo = value;
    }

    get direccion(): string {
        return this._direccion;
    }

    set direccion(value: string) {
        this._direccion = value;
    }

    get estado_civil(): 'soltero' | 'casado' | 'viudo' | 'divorciado' {
        return this._estado_civil;
    }

    set estado_civil(value: 'soltero' | 'casado' | 'viudo' | 'divorciado') {
        this._estado_civil = value;
    }

    get celular(): string {
        return this._celular;
    }

    set celular(value: string) {
        this._celular = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
        throw new Error('Correo electrónico inválido.');
        }
        this._email = value;
    }

    get fecha_registro(): Date | null {
        return this._fecha_registro;
    }

    set fecha_registro(value: Date | null) {
        this._fecha_registro = value;
    }

    get fecha_actualizacion(): Date | null {
        return this._fecha_actualizacion;
    }

    set fecha_actualizacion(value: Date | null) {
        this._fecha_actualizacion = value;
    }

    get observaciones(): string {
        return this._observaciones;
    }

    set observaciones(value: string) {
        this._observaciones = value;
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