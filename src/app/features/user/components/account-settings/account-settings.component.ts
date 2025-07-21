import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
// Importamos la nueva interfaz y el servicio de Usuario
import { UserProfileViewModel, UsuarioService } from '../../../../core/services/usuario.service';

@Component({
  selector: 'app-account-settings',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  userProfile$!: Observable<UserProfileViewModel | undefined>;
  
  // ID del usuario logueado (simulado por ahora)
  private loggedInUserId = 2; 

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    // Obtenemos el perfil del usuario logueado
    this.userProfile$ = this.usuarioService.getUserProfileById(this.loggedInUserId);
  }
}