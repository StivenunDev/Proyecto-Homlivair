import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PropiedadService } from '../../../../core/services/propiedad.service';
import { Propiedad } from '../../../../core/interfaces/propiedad.model';


@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  public propiedades$!: Observable<Propiedad[]>;

  // Inyectamos el servicio que ya sabe cómo obtener los datos
  constructor(private propiedadService: PropiedadService) { }

  ngOnInit(): void {
    // Le pedimos al servicio que nos dé todas las propiedades
    this.propiedades$ = this.propiedadService.getAllPropiedades();
  }

}
