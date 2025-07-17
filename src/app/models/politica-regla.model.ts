export class PoliticaRegla {
    id_politica_regla: number = 0;
    nombre: string = '';
    tipo: string = '';
    descripcion: string = '';
    valor_1: string = '';
    valor_2: string = '';
    activa: boolean = true;
    fecha_inicio: Date | null = null;
    fecha_fin: Date | null = null;
}