import { Injectable } from '@angular/core';
import { LocalDatabase } from './local-database.service';
import { Alquiler } from '../interfaces/alquiler.model';
import { Propiedad } from '../interfaces/propiedad.model';
import { Pago } from '../interfaces/pago.model';

interface EstadisticaAlquileres {
  totalAlquileres: number;
  alquileresPorEstado: {
    pendiente: number;
    'en curso': number;
    finalizado: number;
  };
  ingresosTotales: number;
}

interface EstadisticaPropiedades {
  totalPropiedades: number;
  propiedadesPorEstado: {
    disponible: number;
    inhabilitado: number;
    alquilada: number;
  };
  promedioInquilinos: number;
}

interface EstadisticaPagos {
  totalPagos: number;
  pagosAprobados: number;
  pagosPendientes: number;
  montoTotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class EstadisticaService {
  private db = new LocalDatabase();

  // Estadísticas de alquileres
  getEstadisticaAlquileres(): EstadisticaAlquileres {
    const alquileres = this.db.alquileres;
    const total = alquileres.length;
    const pendiente = alquileres.filter(a => a.estado_alquiler === 'pendiente').length;
    const enCurso = alquileres.filter(a => a.estado_alquiler === 'en curso').length;
    const finalizado = alquileres.filter(a => a.estado_alquiler === 'finalizado').length;

    const ingresosTotales = alquileres
      .filter(a => a.estado_alquiler === 'finalizado')
      .reduce((acc, alquiler) => acc + (alquiler.monto_total_pago || 0), 0);

    return {
      totalAlquileres: total,
      alquileresPorEstado: { pendiente, 'en curso': enCurso, finalizado },
      ingresosTotales
    };
  }

  // Estadísticas de propiedades
  getEstadisticaPropiedades(): EstadisticaPropiedades {
    const propiedades = this.db.propiedades;
    const total = propiedades.length;
    const disponible = propiedades.filter(p => p.estado_propiedades === 'disponible').length;
    const inhabilitado = propiedades.filter(p => p.estado_propiedades === 'inhabilitado').length;
    const alquilada = propiedades.filter(p => p.estado_propiedades === 'alquilada').length;

    const totalInquilinos = propiedades.reduce((acc, p) => acc + (p.max_inquilino || 0), 0);
    const promedioInquilinos = total > 0 ? totalInquilinos / total : 0;

    return {
      totalPropiedades: total,
      propiedadesPorEstado: { disponible, inhabilitado, alquilada },
      promedioInquilinos
    };
  }

  // Estadísticas de pagos
  getEstadisticaPagos(): EstadisticaPagos {
    const pagos = this.db.pagos;
    const total = pagos.length;
    const aprobados = pagos.filter(p => p.estado_pago === 'aprobado').length;
    const pendientes = pagos.filter(p => p.estado_pago === 'pendiente').length;
    const montoTotal = pagos.reduce((acc, pago) => acc + (pago.monto_pago || 0), 0);

    return {
      totalPagos: total,
      pagosAprobados: aprobados,
      pagosPendientes: pendientes,
      montoTotal
    };
  }

  // Ejemplo de estadística personalizada: ingresos por mes
  getIngresosPorMes(): Map<string, number> {
    const alquileresFinalizados = this.db.alquileres.filter(a => a.estado_alquiler === 'finalizado');

    const ingresosPorMes = new Map<string, number>();

    alquileresFinalizados.forEach(alquiler => {
      if (alquiler.fecha_fin && alquiler.monto_total_pago) {
        const mes = new Date(alquiler.fecha_fin).toLocaleString('es-ES', { month: 'long', year: 'numeric' });
        const valor = alquiler.monto_total_pago;

        if (ingresosPorMes.has(mes)) {
          ingresosPorMes.set(mes, ingresosPorMes.get(mes)! + valor);
        } else {
          ingresosPorMes.set(mes, valor);
        }
      }
    });

    return ingresosPorMes;
  }
}