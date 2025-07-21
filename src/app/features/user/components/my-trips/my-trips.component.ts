import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

// Importamos el nuevo View Model y el servicio
import { TripViewModel, BookingService } from '../../../../core/services/booking.service';

@Component({
  selector: 'app-my-trips',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './my-trips.component.html',
  styleUrls: ['./my-trips.component.css']
})
export class MyTripsComponent implements OnInit {

  trips$!: Observable<TripViewModel[]>;

  // ID del usuario logueado (simulado por ahora)
  private loggedInUserId = 3;

  constructor(private bookingService: BookingService) { }

  ngOnInit(): void {
    // Obtenemos los viajes del usuario logueado
    this.trips$ = this.bookingService.getTripsByUserId(this.loggedInUserId);
  }

}