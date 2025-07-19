

import { Alquiler } from './alquiler.model';
import { Ambiente } from './ambiente.model';
import { MedioPago } from './medio-pago.model';
import { MedioPagoUsuario } from './medio-pago-usuario.model';
import { Pago } from './pago.model';
import { Persona } from './persona.model';
import { PlanCuota } from './plan-cuota.model';
import { PoliticaRegla } from './politica-regla.model';
import { Propiedad } from './propiedad.model';
import { Reembolso } from './reembolso.model';
import { Rol } from './rol.model';
import { Solicitud } from './solicitud.model';
import { TipoPeriodo } from './tipo-periodo.model';
import { TipoPropiedad } from './tipo-propiedad.model';
import { Ubicacion } from './ubicacion.model';
import { Usuario } from './usuario.model';


export class LocalDatabase {

    // Colecciones de entidades
    alquileres: Alquiler[] = [];
    ambientes: Ambiente[] = [];
    mediosPago: MedioPago[] = [];
    mediosPagoUsuario: MedioPagoUsuario[] = [];
    pagos: Pago[] = [];
    personas: Persona[] = [];
    planCuotas: PlanCuota[] = [];
    politicasReglas: PoliticaRegla[] = [];
    propiedades: Propiedad[] = [];
    reembolsos: Reembolso[] = [];
    roles: Rol[] = [];
    solicitudes: Solicitud[] = [];
    tiposPeriodo: TipoPeriodo[] = [];
    tiposPropiedad: TipoPropiedad[] = [];
    ubicaciones: Ubicacion[] = [];
    usuarios: Usuario[] = [];

    // IDs automáticos
    private ids = {
        alquiler: 1,
        ambiente: 1,
        medioPago: 1,
        medioPagoUsuario: 1,
        pago: 1,
        persona: 1,
        planCuota: 1,
        politicaRegla: 1,
        propiedad: 1,
        reembolso: 1,
        rol: 1,
        solicitud: 1,
        tipoPeriodo: 1,
        tipoPropiedad: 1,
        ubicacion: 1,
        usuario: 1,
    };
    insertUsuario(usuario: Partial<Usuario>): Usuario {
        const newUsuario = new Usuario(usuario);
        newUsuario['_ID_usuario'] = this.ids.usuario++;
        this.usuarios.push(newUsuario);
        return newUsuario;
    }

    getUsuarioById(id: number): Usuario | undefined {
        return this.usuarios.find(u => u.ID_usuario === id);
    }

    updateUsuario(id: number, usuario: Partial<Usuario>): boolean {
        const index = this.usuarios.findIndex(u => u.ID_usuario === id);
        if (index !== -1) {
        Object.assign(this.usuarios[index], usuario);
        return true;
        }
        return false;
    }

    deleteUsuario(id: number): boolean {
        const index = this.usuarios.findIndex(u => u.ID_usuario === id);
        if (index !== -1) {
        this.usuarios.splice(index, 1);
        return true;
        }
        return false;
    }

    // ... otros métodos de búsqueda por ID o filtros

    // Métodos para limpiar (opcional)
    clearAll() {
        this.alquileres = [];
        this.ambientes = [];
        this.mediosPago = [];
        this.mediosPagoUsuario = [];
        this.pagos = [];
        this.personas = [];
        this.planCuotas = [];
        this.politicasReglas = [];
        this.propiedades = [];
        this.reembolsos = [];
        this.roles = [];
        this.solicitudes = [];
        this.tiposPeriodo = [];
        this.tiposPropiedad = [];
        this.ubicaciones = [];
        this.usuarios = [];
    }
}