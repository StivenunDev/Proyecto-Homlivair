import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Propiedad } from '../../../../core/interfaces/propiedad.model';
import { PropiedadService } from '../../../../core/services/propiedad.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-manage-properties',
  standalone : true,
  imports : [CommonModule, RouterModule],
  templateUrl: './manage-properties.component.html',
  styleUrls: ['./manage-properties.component.css']
})
export class ManagePropertiesComponent implements OnInit {

  properties$!: Observable<Propiedad[]>;
  hostUserId = 2; // ID del anfitrión simulado

  constructor(private propiedadService: PropiedadService) { }

  ngOnInit(): void {
    this.loadProperties();
  }

  loadProperties(): void {
    this.properties$ = this.propiedadService.getPropertiesByUserId(this.hostUserId);
  }

  togglePropertyStatus(property: Propiedad, event: any): void {
    const newStatus = event.target.checked ? 'disponible' : 'inhabilitado';
    this.propiedadService.updatePropertyStatus(property.ID_propiedades, newStatus).subscribe(() => {
      // Recargamos la lista para que se vea el cambio, aunque en una app real
      // podríamos solo actualizar el objeto localmente para mejor rendimiento.
      this.loadProperties();
    });
  }
}