import { Alquiler } from '../interfaces/alquiler.model';
import { Ambiente } from '../interfaces/ambiente.model';
import { MedioPago } from '../interfaces/medio-pago.model';
import { MedioPagoUsuario } from '../interfaces/medio-pago-usuario.model';
import { Pago } from '../interfaces/pago.model';
import { Persona } from '../interfaces/persona.model';
import { PlanCuota } from '../interfaces/plan-cuota.model';
import { PoliticaRegla } from '../interfaces/politica-regla.model';
import { Propiedad } from '../interfaces/propiedad.model';
import { Reembolso } from '../interfaces/reembolso.model';
import { Rol } from '../interfaces/rol.model';
import { Solicitud } from '../interfaces/solicitud.model';
import { TipoPeriodo } from '../interfaces/tipo-periodo.model';
import { TipoPropiedad } from '../interfaces/tipo-propiedad.model';
import { Ubicacion } from '../interfaces/ubicacion.model';
import { Usuario } from '../interfaces/usuario.model';

export class LocalDatabase {
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
    usuario: 1
  };

  // CRUD Alquiler
  insertAlquiler(alquiler: Partial<Alquiler>): Alquiler {
    const newAlquiler = { ID_alquiler: this.ids.alquiler++, ...alquiler } as Alquiler;
    this.alquileres.push(newAlquiler);
    return newAlquiler;
  }

  getAlquilerById(id: number): Alquiler | undefined {
    return this.alquileres.find(a => a.ID_alquiler === id);
  }

  updateAlquiler(id: number, alquiler: Partial<Alquiler>): boolean {
    const index = this.alquileres.findIndex(a => a.ID_alquiler === id);
    if (index !== -1) {
      Object.assign(this.alquileres[index], alquiler);
      return true;
    }
    return false;
  }

  deleteAlquiler(id: number): boolean {
    const index = this.alquileres.findIndex(a => a.ID_alquiler === id);
    if (index !== -1) {
      this.alquileres.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD Ambiente
  insertAmbiente(ambiente: Partial<Ambiente>): Ambiente {
    const newAmbiente = { ID_ambientes: this.ids.ambiente++, ...ambiente } as Ambiente;
    this.ambientes.push(newAmbiente);
    return newAmbiente;
  }

  getAmbienteById(id: number): Ambiente | undefined {
    return this.ambientes.find(a => a.ID_ambientes === id);
  }

  updateAmbiente(id: number, ambiente: Partial<Ambiente>): boolean {
    const index = this.ambientes.findIndex(a => a.ID_ambientes === id);
    if (index !== -1) {

      Object.assign(this.ambientes[index],ambiente);
      return true;
    }
    return false;
  }

  deleteAmbiente(id: number): boolean {
    const index = this.ambientes.findIndex(a => a.ID_ambientes === id);
    if (index !== -1) {
      this.ambientes.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD MedioPago
  insertMedioPago(medioPago: Partial<MedioPago>): MedioPago {
    const newMedioPago = { ID_medio_pago: this.ids.medioPago++, ...medioPago } as MedioPago;
    this.mediosPago.push(newMedioPago);
    return newMedioPago;
  }

  getMedioPagoById(id: number): MedioPago | undefined {
    return this.mediosPago.find(m => m.ID_medio_pago === id);
  }

  updateMedioPago(id: number, medioPago: Partial<MedioPago>): boolean {
    const index = this.mediosPago.findIndex(m => m.ID_medio_pago === id);
    if (index !== -1) {

      
      Object.assign(this.mediosPago[index],medioPago);
      return true;
    }
    return false;
  }

  deleteMedioPago(id: number): boolean {
    const index = this.mediosPago.findIndex(m => m.ID_medio_pago === id);
    if (index !== -1) {
      this.mediosPago.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD MedioPagoUsuario
  insertMedioPagoUsuario(medioPagoUsuario: Partial<MedioPagoUsuario>): MedioPagoUsuario {
    const newMedioPagoUsuario = { ID_medio_pago_usuario: this.ids.medioPagoUsuario++, ...medioPagoUsuario } as MedioPagoUsuario;
    this.mediosPagoUsuario.push(newMedioPagoUsuario);
    return newMedioPagoUsuario;
  }

  getMedioPagoUsuarioById(id: number): MedioPagoUsuario | undefined {
    return this.mediosPagoUsuario.find(m => m.ID_medio_pago_usuario === id);
  }

  updateMedioPagoUsuario(id: number, medioPagoUsuario: Partial<MedioPagoUsuario>): boolean {
    const index = this.mediosPagoUsuario.findIndex(m => m.ID_medio_pago_usuario === id);
    if (index !== -1) {

      Object.assign(this.mediosPagoUsuario[index], medioPagoUsuario);
      return true;
    }
    return false;
  }

  deleteMedioPagoUsuario(id: number): boolean {
    const index = this.mediosPagoUsuario.findIndex(m => m.ID_medio_pago_usuario === id);
    if (index !== -1) {
      this.mediosPagoUsuario.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD Pago
  insertPago(pago: Partial<Pago>): Pago {
    const newPago = { ID_pagos: this.ids.pago++, ...pago } as Pago;
    this.pagos.push(newPago);
    return newPago;
  }

  getPagoById(id: number): Pago | undefined {
    return this.pagos.find(p => p.ID_pagos === id);
  }

  updatePago(id: number, pago: Partial<Pago>): boolean {
    const index = this.pagos.findIndex(p => p.ID_pagos === id);
    if (index !== -1) {

      Object.assign(this.pagos[index], pago);
      return true;
    }
    return false;
  }

  deletePago(id: number): boolean {
    const index = this.pagos.findIndex(p => p.ID_pagos === id);
    if (index !== -1) {
      this.pagos.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD Persona
  insertPersona(persona: Partial<Persona>): Persona {
    const newPersona = { ID_personas: this.ids.persona++, ...persona } as Persona;
    this.personas.push(newPersona);
    return newPersona;
  }

  getPersonaById(id: number): Persona | undefined {
    return this.personas.find(p => p.ID_personas === id);
  }

  updatePersona(id: number, persona: Partial<Persona>): boolean {
    const index = this.personas.findIndex(p => p.ID_personas === id);
    if (index !== -1) {

      Object.assign(this.personas[index], persona);
      return true;
    }
    return false;
  }

  deletePersona(id: number): boolean {
    const index = this.personas.findIndex(p => p.ID_personas === id);
    if (index !== -1) {
      this.personas.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD PlanCuota
  insertPlanCuota(planCuota: Partial<PlanCuota>): PlanCuota {
    const newPlanCuota = { ID_cuota: this.ids.planCuota++, ...planCuota } as PlanCuota;
    this.planCuotas.push(newPlanCuota);
    return newPlanCuota;
  }

  getPlanCuotaById(id: number): PlanCuota | undefined {
    return this.planCuotas.find(c => c.ID_cuota === id);
  }

  updatePlanCuota(id: number, planCuota: Partial<PlanCuota>): boolean {
    const index = this.planCuotas.findIndex(c => c.ID_cuota === id);
    if (index !== -1) {

      Object.assign(this.planCuotas[index], planCuota);
      return true;
    }
    return false;
  }

  deletePlanCuota(id: number): boolean {
    const index = this.planCuotas.findIndex(c => c.ID_cuota === id);
    if (index !== -1) {
      this.planCuotas.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD PoliticaRegla
  insertPoliticaRegla(politicaRegla: Partial<PoliticaRegla>): PoliticaRegla {
    const newPoliticaRegla = { id_politica_regla: this.ids.politicaRegla++, ...politicaRegla } as PoliticaRegla;
    this.politicasReglas.push(newPoliticaRegla);
    return newPoliticaRegla;
  }

  getPoliticaReglaById(id: number): PoliticaRegla | undefined {
    return this.politicasReglas.find(r => r.id_politica_regla === id);
  }

  updatePoliticaRegla(id: number, politicaRegla: Partial<PoliticaRegla>): boolean {
    const index = this.politicasReglas.findIndex(r => r.id_politica_regla === id);
    if (index !== -1) {

      Object.assign(this.politicasReglas[index], politicaRegla);
      return true;
    }
    return false;
  }

  deletePoliticaRegla(id: number): boolean {
    const index = this.politicasReglas.findIndex(r => r.id_politica_regla === id);
    if (index !== -1) {
      this.politicasReglas.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD Propiedad
  insertPropiedad(propiedad: Partial<Propiedad>): Propiedad {
    const newPropiedad = { ID_propiedades: this.ids.propiedad++, ...propiedad } as Propiedad;
    this.propiedades.push(newPropiedad);
    return newPropiedad;
  }

  getPropiedadById(id: number): Propiedad | undefined {
    return this.propiedades.find(p => p.ID_propiedades === id);
  }

  updatePropiedad(id: number, propiedad: Partial<Propiedad>): boolean {
    const index = this.propiedades.findIndex(p => p.ID_propiedades === id);
    if (index !== -1) {

      Object.assign(this.propiedades[index], propiedad);
      return true;
    }
    return false;
  }

  deletePropiedad(id: number): boolean {
    const index = this.propiedades.findIndex(p => p.ID_propiedades === id);
    if (index !== -1) {
      this.propiedades.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD Reembolso
  insertReembolso(reembolso: Partial<Reembolso>): Reembolso {
    const newReembolso = { id_reembolso: this.ids.reembolso++, ...reembolso } as Reembolso;
    this.reembolsos.push(newReembolso);
    return newReembolso;
  }

  getReembolsoById(id: number): Reembolso | undefined {
    return this.reembolsos.find(r => r.id_reembolso === id);
  }

  updateReembolso(id: number, reembolso: Partial<Reembolso>): boolean {
    const index = this.reembolsos.findIndex(r => r.id_reembolso === id);
    if (index !== -1) {

      Object.assign(this.reembolsos[index], reembolso);
      return true;
    }
    return false;
  }

  deleteReembolso(id: number): boolean {
    const index = this.reembolsos.findIndex(r => r.id_reembolso === id);
    if (index !== -1) {
      this.reembolsos.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD Rol
  insertRol(rol: Partial<Rol>): Rol {
    const newRol = { ID_rol: this.ids.rol++, ...rol } as Rol;
    this.roles.push(newRol);
    return newRol;
  }

  getRolById(id: number): Rol | undefined {
    return this.roles.find(r => r.ID_rol === id);
  }

  updateRol(id: number, rol: Partial<Rol>): boolean {
    const index = this.roles.findIndex(r => r.ID_rol === id);
    if (index !== -1) {

      Object.assign(this.roles[index], rol);
      return true;
    }
    return false;
  }

  deleteRol(id: number): boolean {
    const index = this.roles.findIndex(r => r.ID_rol === id);
    if (index !== -1) {
      this.roles.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD TipoPeriodo
  insertTipoPeriodo(tipoPeriodo: Partial<TipoPeriodo>): TipoPeriodo {
    const newTipoPeriodo = { ID_tipo_periodo: this.ids.tipoPeriodo++, ...tipoPeriodo } as TipoPeriodo;
    this.tiposPeriodo.push(newTipoPeriodo);
    return newTipoPeriodo;
  }

  getTipoPeriodoById(id: number): TipoPeriodo | undefined {
    return this.tiposPeriodo.find(t => t.ID_tipo_periodo === id);
  }

  updateTipoPeriodo(id: number, tipoPeriodo: Partial<TipoPeriodo>): boolean {
    const index = this.tiposPeriodo.findIndex(t => t.ID_tipo_periodo === id);
    if (index !== -1) {
      Object.assign(this.tiposPeriodo[index], tipoPeriodo);
      return true;
    }
    return false;
  }

  deleteTipoPeriodo(id: number): boolean {
    const index = this.tiposPeriodo.findIndex(t => t.ID_tipo_periodo === id);
    if (index !== -1) {
      this.tiposPeriodo.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD TipoPropiedad
  insertTipoPropiedad(tipoPropiedad: Partial<TipoPropiedad>): TipoPropiedad {
    const newTipoPropiedad = { ID_tipo_propiedad: this.ids.tipoPropiedad++, ...tipoPropiedad } as TipoPropiedad;
    this.tiposPropiedad.push(newTipoPropiedad);
    return newTipoPropiedad;
  }

  getTipoPropiedadById(id: number): TipoPropiedad | undefined {
    return this.tiposPropiedad.find(t => t.ID_tipo_propiedad === id);
  }

  updateTipoPropiedad(id: number, tipoPropiedad: Partial<TipoPropiedad>): boolean {
    const index = this.tiposPropiedad.findIndex(t => t.ID_tipo_propiedad === id);
    if (index !== -1) {
      Object.assign(this.tiposPropiedad[index], tipoPropiedad);
      return true;
    }
    return false;
  }

  deleteTipoPropiedad(id: number): boolean {
    const index = this.tiposPropiedad.findIndex(t => t.ID_tipo_propiedad === id);
    if (index !== -1) {
      this.tiposPropiedad.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD Ubicacion
  insertUbicacion(ubicacion: Partial<Ubicacion>): Ubicacion {
    const newUbicacion = { ID_ubicacion: this.ids.ubicacion++, ...ubicacion } as Ubicacion;
    this.ubicaciones.push(newUbicacion);
    return newUbicacion;
  }

  getUbicacionById(id: number): Ubicacion | undefined {
    return this.ubicaciones.find(u => u.ID_ubicacion === id);
  }

  updateUbicacion(id: number, ubicacion: Partial<Ubicacion>): boolean {
    const index = this.ubicaciones.findIndex(u => u.ID_ubicacion === id);
    if (index !== -1) {
      Object.assign(this.ubicaciones[index], ubicacion);
      return true;
    }
    return false;
  }

  deleteUbicacion(id: number): boolean {
    const index = this.ubicaciones.findIndex(u => u.ID_ubicacion === id);
    if (index !== -1) {
      this.ubicaciones.splice(index, 1);
      return true;
    }
    return false;
  }

  // ✅ CRUD para Solicitud
  insertSolicitud(solicitud: Partial<Solicitud>): Solicitud {
    const newSolicitud = { ID_solicitud: this.ids.solicitud++, ...solicitud } as Solicitud;
    this.solicitudes.push(newSolicitud);
    return newSolicitud;
  }

  getSolicitudById(id: number): Solicitud | undefined {
    return this.solicitudes.find(s => s.ID_solicitud === id);
  }

  updateSolicitud(id: number, solicitud: Partial<Solicitud>): boolean {
    const index = this.solicitudes.findIndex(s => s.ID_solicitud === id);
    if (index !== -1) {

      Object.assign(this.solicitudes[index], solicitud);
      return true;
    }
    return false;
  }

  deleteSolicitud(id: number): boolean {
    const index = this.solicitudes.findIndex(s => s.ID_solicitud === id);
    if (index !== -1) {
      this.solicitudes.splice(index, 1);
      return true;
    }
    return false;
  }

  // CRUD para Usuario
  insertUsuario(usuario: Partial<Usuario>): Usuario {
    const newUsuario = { ID_usuario: this.ids.usuario++, ...usuario } as Usuario;
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
}