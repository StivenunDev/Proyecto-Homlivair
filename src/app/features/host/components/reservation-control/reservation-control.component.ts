import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Solicitud } from '../../../../core/interfaces/solicitud.model';
import { BookingService } from '../../../../core/services/booking.service';

@Component({
  selector: 'app-reservations-control',
  standalone: true, // <-- ¡Este componente es standalone!
  imports: [
    CommonModule // <-- 2. AÑÁDELO a los imports del componente
  ],
  templateUrl: './reservation-control.component.html',
  styleUrls: ['./reservation-control.component.css']
})
export class ReservationsControlComponent implements OnInit {

  requests$!: Observable<Solicitud[]>;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    this.requests$ = this.bookingService.getAllBookingRequests();
  }

  approveRequest(id: number): void {
    this.bookingService.updateRequestStatus(id, 'Aprobada').subscribe(() => {
      // Recargamos la lista para ver el cambio de estado
      this.requests$ = this.bookingService.getAllBookingRequests();
    });
  }

  rejectRequest(id: number): void {
    this.bookingService.updateRequestStatus(id, 'Rechazada').subscribe(() => {
      this.requests$ = this.bookingService.getAllBookingRequests();
    });
  }
}