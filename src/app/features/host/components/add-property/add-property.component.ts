import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

// Importamos todos los modelos y servicios que necesitamos
import { PropiedadService } from '../../../../core/services/propiedad.service';

import { TipoPropiedadService } from '../../../../core/services/tipo-propiedad.service';
import { UbicacionService } from '../../../../core/services/ubicacion.service';
import { TipoPropiedad } from '../../../../core/interfaces/tipo-propiedad.model';
import { Ubicacion } from '../../../../core/interfaces/ubicacion.model';

@Component({
  selector: 'app-add-property',
  standalone: true, // <-- 1. AÑADE standalone: true
  imports: [
    CommonModule,
    ReactiveFormsModule, // <-- 2. AÑADE ReactiveFormsModule para [formGroup]
    RouterModule       // <-- 3. AÑADE RouterModule para routerLink
  ],
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  propertyForm!: FormGroup;
  
  // Observables para poblar los menús desplegables
  tiposPropiedad$!: Observable<TipoPropiedad[]>;
  ubicaciones$!: Observable<Ubicacion[]>;

  constructor(
    private fb: FormBuilder,
    private propiedadService: PropiedadService,
    private tipoPropiedadService: TipoPropiedadService,
    private ubicacionService: UbicacionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // 1. Cargamos los datos para los menús desplegables
    this.loadDropdownData();

    // 2. Creamos el formulario completo basado en tu modelo `Propiedad`
    this.propertyForm = this.fb.group({
      titulo_anuncio: ['', Validators.required],
      descripcion: ['', Validators.required],
      ID_tipo_propiedad: [null, Validators.required], // El usuario seleccionará de una lista
      ID_ubicacion: [null, Validators.required],     // El usuario seleccionará de una lista
      precio_base: [null, [Validators.required, Validators.min(1)]],
      tipo_moneda: ['PEN', Validators.required],
      max_inquilino: [1, [Validators.required, Validators.min(1)]],
      reglas: [''],
      imagen: ['https://via.placeholder.com/400x300', Validators.required],
      // ... puedes añadir más campos aquí si es necesario
    });
  }

  private loadDropdownData(): void {
    // Usamos los servicios para obtener los catálogos
    this.tiposPropiedad$ = this.tipoPropiedadService.getAllTiposPropiedad();
    this.ubicaciones$ = this.ubicacionService.getAllUbicaciones();
  }

  onSubmit(): void {
    if (this.propertyForm.invalid) {
      this.propertyForm.markAllAsTouched();
      return;
    }

    // Simulamos que el anfitrión es el usuario con ID 2
    const newPropertyData = {
      ...this.propertyForm.value,
      ID_usuario: 2,
      estado_propiedades: 'disponible', // Estado por defecto
      estado: true,
      fecha_creacion: new Date()
    };
    
    this.propiedadService.createPropiedad(newPropertyData).subscribe({
      next: (propiedadCreada) => {
        alert(`¡Propiedad "${propiedadCreada.titulo_anuncio}" creada con éxito!`);
        this.router.navigate(['/host/properties']);
      },
      error: (err) => {
        console.error('Error al crear la propiedad', err);
        alert('Hubo un error al crear la propiedad.');
      }
    });
  }
}