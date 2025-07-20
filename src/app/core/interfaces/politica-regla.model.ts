export class PoliticaRegla {
    private _id_politica_regla: number = 0;
    private _nombre: string = '';
    private _tipo: string = '';
    private _descripcion: string = '';
    private _valor_1: string = '';
    private _valor_2: string = '';
    private _activa: boolean = true;
    private _fecha_inicio: Date | null = null;
    private _fecha_fin: Date | null = null;

    constructor(init?: Partial<PoliticaRegla>) {
        if (init) {
        Object.assign(this, init);
        if (init.fecha_inicio) this._fecha_inicio = new Date(init.fecha_inicio);
        if (init.fecha_fin) this._fecha_fin = new Date(init.fecha_fin);
        }
    }

    get id_politica_regla(): number {
        return this._id_politica_regla;
    }

    get nombre(): string {
        return this._nombre;
    }

    set nombre(value: string) {
        if (value.length < 3) {
        throw new Error('El nombre de la política debe tener al menos 3 caracteres.');
        }
        this._nombre = value;
    }

    get tipo(): string {
        return this._tipo;
    }

    set tipo(value: string) {
        this._tipo = value;
    }

    get descripcion(): string {
        return this._descripcion;
    }

    set descripcion(value: string) {
        this._descripcion = value;
    }

    get valor_1(): string {
        return this._valor_1;
    }

    set valor_1(value: string) {
        this._valor_1 = value;
    }

    get valor_2(): string {
        return this._valor_2;
    }

    set valor_2(value: string) {
        this._valor_2 = value;
    }

    get activa(): boolean {
        return this._activa;
    }

    set activa(value: boolean) {
        this._activa = value;
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
}