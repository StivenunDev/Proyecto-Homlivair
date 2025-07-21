import { LocalDatabase } from '../core/interfaces/LocalDatabase.model';

export function seedDatabase(db: LocalDatabase): void {
    // Insertar roles
    db.insertRol({ ID_rol: 1, nombre_rol: 'Administrador' });
    db.insertRol({ ID_rol: 2, nombre_rol: 'usuario' });

    // Insertar usuarios
    db.insertUsuario({
        ID_usuario: 1,
        nombre_usuario: 'Admin User',
        password: '123456789',
        ID_rol: 1
    });
    db.insertUsuario({
        ID_usuario: 2,
        nombre_usuario: 'Juan Pérez',
        password: '123456789',
        ID_rol: 2
    });

    db.insertUsuario({
        ID_usuario: 3,
        nombre_usuario: 'Nick Aguilar',
        password: '123456789',
        ID_rol: 2
    });
        db.insertUsuario({
        ID_usuario: 4,
        nombre_usuario: 'Nick Aguilar',
        password: '123456789',
        ID_rol: 2
    });



    // Insertar tipos de propiedad
    db.insertTipoPropiedad({ ID_tipo_propiedad: 1, nombre_tipo_propiedad: 'Apartamento' });
    db.insertTipoPropiedad({ ID_tipo_propiedad: 2, nombre_tipo_propiedad: 'Casa' });

    // Insertar ubicaciones
    db.insertUbicacion({ ID_ubicacion: 1, cod_pais: 'PE', cod_provincia: '01', cod_ciudad: '0101', nombre_lugar: 'Lima', codigo_postal: '15001', latitud: -12.0464, longitud: -77.0427, estado: true, descripcion: 'Capital del Perú' });
    db.insertUbicacion({ ID_ubicacion: 2, cod_pais: 'PE', cod_provincia: '08', cod_ciudad: '0209', nombre_lugar: 'Cusco', codigo_postal: '08000', latitud: -13.5167, longitud: -71.9667, estado: true, descripcion: 'Antigua capital del Imperio Inca' });
    db.insertUbicacion({ ID_ubicacion: 3, cod_pais: 'PE', cod_provincia: '12', cod_ciudad: '0107', nombre_lugar: 'Huancayo', codigo_postal: '15700', latitud: -12.0667, longitud: -75.2167, estado: true, descripcion: 'Capital de la Sierra Central' });
    db.insertUbicacion({ ID_ubicacion: 4, cod_pais: 'PE', cod_provincia: '15', cod_ciudad: '0110', nombre_lugar: 'Callao', codigo_postal: '15001', latitud: -12.0667, longitud: -77.1167, estado: true, descripcion: 'Puerto principal del Perú' });
    db.insertUbicacion({ ID_ubicacion: 5, cod_pais: 'PE', cod_provincia: '14', cod_ciudad: '0101', nombre_lugar: 'Arequipa', codigo_postal: '04000', latitud: -16.4092, longitud: -71.5375, estado: true, descripcion: 'Ciudad blanca del Perú' });
    db.insertUbicacion({ ID_ubicacion: 6, cod_pais: 'PE', cod_provincia: '06', cod_ciudad: '0101', nombre_lugar: 'Chiclayo', codigo_postal: '14001', latitud: -6.7703, longitud: -79.8417, estado: true, descripcion: 'Capital de Lambayeque' });
    db.insertUbicacion({ ID_ubicacion: 7, cod_pais: 'PE', cod_provincia: '09', cod_ciudad: '0206', nombre_lugar: 'Huamanga', codigo_postal: '05000', latitud: -13.1575, longitud: -74.2372, estado: true, descripcion: 'Capital del departamento de Ayacucho' });
    db.insertUbicacion({ ID_ubicacion: 8, cod_pais: 'PE', cod_provincia: '21', cod_ciudad: '0106', nombre_lugar: 'Puno', codigo_postal: '21001', latitud: -15.8400, longitud: -69.5600, estado: true, descripcion: 'Al pie del lago Titicaca' });
    
    // Insertar propiedades
    db.insertPropiedad({
    ID_propiedades: 1,
    ID_usuario: 2,
    ID_ubicacion: 1,
    ID_tipo_propiedad: 2,
    ID_tipo_periodo: 1,
    tipo_moneda: 'PEN',
    precio_base: 2500,
    fecha_creacion: new Date('2024-09-15'),
    fecha_actualizacion: new Date('2024-09-20'),
    descripcion: 'Casa amplia con 3 habitaciones, sala, comedor, cocina y jardín. Ideal para familia.',
    estado_propiedades: 'disponible',
    titulo_anuncio: 'Casa en alquiler en Surco',
    reglas: 'No mascotas, no fumar dentro de la casa',
    max_inquilino: 5,
    imagen: 'propiedad_02.webp',
    estado: true
    });

    db.insertPropiedad({
    ID_propiedades: 2,
    ID_usuario: 3,
    ID_ubicacion: 5,
    ID_tipo_propiedad: 1,
    ID_tipo_periodo: 2,
    tipo_moneda: 'sol',
    precio_base: 1200,
    fecha_creacion: new Date('2024-08-10'),
    fecha_actualizacion: new Date('2024-09-05'),
    descripcion: 'Departamento moderno en el centro de Arequipa, cerca de plaza de armas.',
    estado_propiedades: 'alquilada',
    titulo_anuncio: 'Departamento en alquiler en Arequipa',
    reglas: 'Solo adultos, no se permiten fiestas',
    max_inquilino: 3,
    imagen: 'propiedad_01.webp',
    estado: true
    });

    // Insertar ambiente 

    db.insertAmbiente({
        ID_ambientes: 1,
        ID_propiedades: 1,
        nombre_ambiente: 'Sala',
        descripcion: 'Espacio amplio y luminoso con acceso al jardín',
        imagen: 'https://ejemplo.com/imagenes/ambiente1_sala.jpg ',
        estado: true
    });

    db.insertAmbiente({
        ID_ambientes: 2,
        ID_propiedades: 1,
        nombre_ambiente: 'Cuarto de lavado',
        descripcion: 'Área de lavado techada con espacio para lavadora y secadora',
        imagen: 'https://ejemplo.com/imagenes/ambiente2_lavado.jpg ',
        estado: true
    });




    // Insertar personas

    db.insertPersona({
        ID_personas: 1,
        DNI: '71234567',
        nombre: 'Carlos',
        apellido_paterno: 'González',
        apellido_materno: 'Rodríguez',
        fecha_nacimiento: new Date('1990-05-15'),
        sexo: 'Masculino',
        direccion: 'Av. Principal 123, Lima',
        estado_civil: 'soltero',
        celular: '987654321',
        email: 'carlos.gonzalez@example.com',
        fecha_registro: new Date('2024-01-10'),
        fecha_actualizacion: new Date('2024-03-05'),
        observaciones: 'Cliente frecuente, preferencia por alquileres en zona residencial',
        estado: true,
        descripcion: 'Persona natural, interesada en alquileres'
    });

    db.insertPersona({
        ID_personas: 2,
        DNI: '72345678',
        nombre: 'María',
        apellido_paterno: 'López',
        apellido_materno: 'Sánchez',
        fecha_nacimiento: new Date('1985-11-22'),
        sexo: 'Femenino',
        direccion: 'Calle Las Flores 456, Arequipa',
        estado_civil: 'casado',
        celular: '976543210',
        email: 'maria.lopez@example.com',
        fecha_registro: new Date('2023-11-18'),
        fecha_actualizacion: new Date('2024-09-01'),
        observaciones: 'Dueña de varias propiedades, interesada en gestión de alquileres',
        estado: true,
        descripcion: 'Propietaria y arrendadora de inmuebles'
    });

    // insertar medio de pago
    db.insertMedioPago({
        ID_medio_pago: 1,
        nombre_medio_pago: 'Transferencia Bancaria',
        estado: true
    });

    db.insertMedioPago({
        ID_medio_pago: 2,
        nombre_medio_pago: 'Yape',
        estado: true
    });


    // Insertar medio de pago usuario

    db.insertMedioPagoUsuario({
        ID_medio_pago_usuario: 1,
        ID_usuario: 101,
        ID_medio_pago: 1,
        codigo_medio_pago: 'CTA-1234-5678-9012',
        estado: true,
        descripcion: 'Cuenta de ahorros - Banco de Crédito del Perú'
    });

    db.insertMedioPagoUsuario({
        ID_medio_pago_usuario: 2,
        ID_usuario: 102,
        ID_medio_pago: 2,
        codigo_medio_pago: 'YOP-9876-5432-1098',
        estado: true,
        descripcion: 'Cuenta de Yape - Registrada a nombre de María López'
    });




    // Insertar tipo periodo
    db.insertTipoPeriodo({
        ID_tipo_periodo: 1,
        nombre_tipo_periodo: 'Diario',
        valor: 1,
        estado: true
    });

    db.insertTipoPeriodo({
        ID_tipo_periodo: 2,
        nombre_tipo_periodo: 'Mensual',
        valor: 30,
        estado: true
    });


    // instertar solicitud

    db.insertSolicitud({
        ID_solicitud: 2,
        ID_usuario: 3,
        ID_propiedades: 1,
        tipo_solicitud: 'alquiler',
        fecha_creacion: new Date('2025-07-05'),
        estado_solicitud: 'Pendiente',
        estado: true
    });

    db.insertSolicitud({
        ID_solicitud: 1,
        ID_usuario: 4,
        ID_propiedades: 2,
        tipo_solicitud: 'alquiler',
        fecha_creacion: new Date('2025-06-05'),
        estado_solicitud: 'Aprobada',
        estado: true
    });

    // insertar alquiler
    db.insertAlquiler({
        ID_alquiler: 1,
        ID_usuario: 4,
        ID_tipo_periodo: 2,
        valor_periodo: 60,
        fecha_creacion: new Date('2025-06-05'),
        fecha_inicio: new Date('2025-06-15'),
        fecha_fin: new Date('2025-08-15'),
        monto_total_pago: 2400,
        estado_alquiler: 'en curso',
        estado: true
    });

    db.insertAlquiler({
        ID_alquiler: 2,
        ID_usuario: 3,
        ID_tipo_periodo: 2,
        valor_periodo: 60,
        fecha_creacion: new Date('2025-07-05'),
        fecha_inicio: new Date('2025-10-15'),
        fecha_fin: new Date('2025-12-15'),
        monto_total_pago: 5000,
        descripcion: 'Alquiler mensual de casa en Surco para familia de 4 personas',
        estado_alquiler: 'pendiente',
        estado: true
    });

    // insertar pago
    db.insertPago({
        ID_pagos: 1,
        ID_alquiler: 1,
        ID_medio_pago_usuario: 2,
        tipo_moneda: 'soles',
        fecha_pago: new Date('2025-07-15'),
        monto_pago: 1200,
        estado_pago: 'aprobado',
        imagen_comprobante_pago: 'https://ejemplo.com/comprobantes/pago1.jpg ',
        estado: true,
        es_cuota_vencida: false,
        monto_recargo: null,
        dias_retraso: null
    });

    db.insertPago({
        ID_pagos: 2,
        ID_alquiler: 1,
        fecha_pago: new Date('2025-08-15'),
        monto_pago: 1200,
        estado_pago: 'pendiente',
        estado: true,
        es_cuota_vencida: false,
        monto_recargo: null,
        dias_retraso: null
    });

    // insertar plan cuotas

    db.insertPlanCuota

}