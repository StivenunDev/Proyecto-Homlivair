import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <-- PASO 1: ASEGÚRATE DE QUE ESTO ESTÉ IMPORTADO
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Propiedad } from '../../../../core/interfaces/propiedad.model';
import { PropiedadService } from '../../../../core/services/propiedad.service';
import { BookingService } from '../../../../core/services/booking.service';

@Component({
  selector: 'app-request-reservation',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule // <-- PASO 2: ASEGÚRATE DE QUE ESTÉ AQUÍ, EN EL ARRAY DE IMPORTS
  ],
  templateUrl: './request-reservation.component.html',
  styleUrls: ['./request-reservation.component.css']
})
export class RequestReservationComponent implements OnInit {
  
  propiedad$!: Observable<Propiedad | undefined>;
  propertyId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private propiedadService: PropiedadService,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    this.propiedad$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id');
        if (!id) {
          this.router.navigate(['/']);
          return [];
        }
        this.propertyId = +id;
        return this.propiedadService.getPropiedadById(this.propertyId);
      })
    );
  }

  submitRequest(): void {
    const requestData = {
      ID_usuario: 2,
      ID_propiedades: this.propertyId,
      fecha_inicio: new Date('2025-08-01'),
      fecha_fin: new Date('2025-08-31')
    };

    this.bookingService.createBookingRequest(requestData).subscribe({
      next: (solicitud) => {
        alert(`¡Solicitud enviada con éxito! ID: ${solicitud.ID_solicitud}`);
        this.router.navigate(['/properties', this.propertyId]);
      },
      error: (err) => {
        alert('Hubo un error al enviar la solicitud.');
        console.error(err);
      }
    });
  }
}