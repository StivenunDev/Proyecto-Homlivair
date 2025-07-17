import { Persona } from './persona.model';
import { Rol } from './rol.model';

export class Usuario {
    ID_usuario: number = 0;
    ID_personas: number | null = null;
    ID_rol: number | null = null;
    nombre_usuario: string = '';
    password: string = '';
    fecha_creacion: Date | null = null;
    fecha_actualizacion: Date | null = null;
    estado: boolean = true;
    imagen: string = '';

    // Relaciones
    persona?: Persona;
    rol?: Rol;
    }