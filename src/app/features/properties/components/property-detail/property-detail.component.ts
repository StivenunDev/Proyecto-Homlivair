import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

// Importamos TU modelo y TU servicio
import { Propiedad } from '../../../../core/interfaces/propiedad.model';
import { PropiedadService } from '../../../../core/services/propiedad.service';

@Component({
  selector: 'app-property-detail',
    standalone: false,
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  // Un observable para contener la propiedad que estamos viendo
  propiedad$!: Observable<Propiedad | undefined>;

  constructor(
    private route: ActivatedRoute, // Inyectamos ActivatedRoute para leer la URL
    private propiedadService: PropiedadService,
    private router: Router // Inyectamos Router para poder redirigir si algo sale mal
  ) { }

  ngOnInit(): void {
    // Creamos un flujo reactivo:
    // 1. Escuchamos los cambios en los parámetros de la URL (paramMap).
    this.propiedad$ = this.route.paramMap.pipe(
      // 2. Usamos switchMap para tomar el ID y cambiar a un nuevo observable.
      switchMap(params => {
        const id = params.get('id'); // Obtenemos el 'id' de la URL.
        
        if (id) {
          // 3. Si hay un ID, llamamos a nuestro servicio para obtener esa propiedad.
          // El '+' convierte el id (que es un string) a un número.
          return this.propiedadService.getPropiedadById(+id);
        }
        
        // 4. Si no hay ID en la URL, redirigimos a la página de inicio y devolvemos un observable vacío.
        this.router.navigate(['/']);
        return [];
      })
    );
  }
}