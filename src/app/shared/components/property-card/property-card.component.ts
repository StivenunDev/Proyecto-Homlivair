import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

import { Propiedad } from '../../../core/interfaces/propiedad.model';

@Component({
  selector: 'app-property-card',
  standalone: false,
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Optimización de rendimiento
})
export class PropertyCardComponent {

    @Input() propiedad!: Propiedad;
}
