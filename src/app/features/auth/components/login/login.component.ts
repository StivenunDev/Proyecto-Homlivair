import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
// 1. Asegúrate de que ReactiveFormsModule esté en esta línea de importación
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      nombre_usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.errorMessage = null;
    const { nombre_usuario, password } = this.loginForm.value;

    this.authService.login(nombre_usuario, password).subscribe({
      next: (response) => {
        if (response.success) {
          this.router.navigate(['/']);
        } else {
          this.errorMessage = response.message;
        }
      },
      error: (err) => {
        console.error('Error en el servidor durante el login', err);
        this.errorMessage = 'Ocurrió un error inesperado. Por favor, inténtalo de nuevo.';
      }
    });
  }
}