import { Propiedad } from './propiedad.model';

export class Ambiente {
    ID_ambientes: number = 0;
    ID_propiedades: number | null = null;
    nombre_ambiente: string = '';
    descripcion: string = '';
    imagen: string = '';
    estado: boolean = true;

    // Relación
    propiedad?: Propiedad;
}