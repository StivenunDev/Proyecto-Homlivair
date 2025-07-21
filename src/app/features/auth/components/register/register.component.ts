import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm!: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido_paterno: ['', Validators.required],
      apellido_materno: [''],
      fecha_nacimiento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmarPassword: ['', Validators.required]
      // Aquí puedes añadir los demás campos como DNI, celular, etc.
    }, {
      // Validador personalizado para asegurar que las contraseñas coincidan
      validator: this.mustMatch('password', 'confirmarPassword')
    });
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.errorMessage = null;
    const { confirmarPassword, ...payload } = this.registerForm.value;

    // El AuthService espera un objeto Usuario, así que lo adaptamos
    const userPayload = {
        nombre_usuario: payload.email, // Usamos el email como nombre de usuario
        password: payload.password,
        ID_rol: 2 // Rol de usuario estándar
    };

    // Aquí también crearíamos la Persona asociada, pero por ahora solo creamos el Usuario
    this.authService.register(userPayload).subscribe({
      next: (newUser) => {
        alert(`¡Cuenta para ${newUser.nombre_usuario} creada con éxito!`);
        // Idealmente, después de registrar, también se inicia sesión.
        // Por ahora, lo redirigimos al login.
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.error('Error en el registro', err);
        this.errorMessage = 'No se pudo crear la cuenta. Inténtalo de nuevo.';
      }
    });
  }

  // Validador para confirmar contraseñas
  private mustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}