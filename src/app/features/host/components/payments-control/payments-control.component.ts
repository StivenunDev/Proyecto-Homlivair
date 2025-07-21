import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // <-- 1. Importa el operador 'map'
import { Pago } from '../../../../core/interfaces/pago.model';
import { PagoService } from '../../../../core/services/pago.service'; // Asegúrate de que el nombre del servicio sea correcto

@Component({
  selector: 'app-payments-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payments-control.component.html',
  styleUrls: ['./payments-control.component.css']
})
export class PaymentsControlComponent implements OnInit {

  pendingPayments$!: Observable<Pago[]>;

  // Asegúrate de que el nombre del servicio inyectado sea el correcto
  constructor(private pagoService: PagoService) { }

  ngOnInit(): void {
    this.loadPendingPayments();
  }

  loadPendingPayments(): void {
    // 2. Usamos el método que SÍ existe: getAllPagos()
    this.pendingPayments$ = this.pagoService.getAllPagos().pipe(
      // 3. Filtramos los pagos para quedarnos solo con los pendientes
      map(pagos => pagos.filter(p => p.estado_pago === 'pendiente'))
    );
  }

  verifyPayment(id: number): void {
    // 4. Usamos el método que SÍ existe: updatePago()
    this.pagoService.updatePago(id, { estado_pago: 'aprobado' }).subscribe(() => {
      alert('¡Pago verificado!');
      this.loadPendingPayments();
    });
  }

  rejectPayment(id: number): void {
    // 5. Y aquí también usamos updatePago()
    this.pagoService.updatePago(id, { estado_pago: 'rechazado' }).subscribe(() => {
      alert('Pago rechazado.');
      this.loadPendingPayments();
    });
  }
}