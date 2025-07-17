export class Persona {
    ID_personas: number = 0;
    DNI: string = '';
    nombre: string = '';
    apellido_paterno: string = '';
    apellido_materno: string = '';
    fecha_nacimiento: Date | null = null;
    sexo: string = '';
    direccion: string = '';
    estado_civil: 'soltero' | 'casado' | 'viudo' | 'divorciado' = 'soltero';
    celular: string = '';
    email: string = '';
    fecha_registro: Date | null = null;
    fecha_actualizacion: Date | null = null;
    observaciones: string = '';
    estado: boolean = true;
    descripcion: string = '';
    }