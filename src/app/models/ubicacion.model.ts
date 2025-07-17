export class Ubicacion {
    ID_ubicacion: number = 0;
    cod_pais: string = '';
    cod_provincia: string = '';
    cod_ciudad: string = '';
    nombre_lugar: string = '';
    codigo_postal: string = '';
    latitud: number | null = null;
    longitud: number | null = null;
    estado: boolean = true;
    descripcion: string = '';
}