import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VehiculosService } from '../../../services/vehiculos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-vehiculos-create',
  imports: [ReactiveFormsModule,  CommonModule],
  template: './vehiculos-create.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VehiculosCreate {
  private fb = inject(FormBuilder);
  private vehiculosService = inject(VehiculosService);
  private router = inject(Router);

  public vehiculoForm: FormGroup;
  public isSubmitting = false;

  constructor() {
    this.vehiculoForm = this.fb.group({
      id: [0],
      marca: ['', [Validators.required, Validators.minLength(3)]],
      modelo: ['', [Validators.required, Validators.minLength(3)]],
      año: [null, [Validators.required, Validators.min(1886)]],
      color: ['', [Validators.required, Validators.minLength(3)]]
    })
  }

  onSubmit(): void {
    if (this.vehiculoForm.valid) {
      this.isSubmitting = true;

      this.vehiculosService
        .CreateVehiculo(this.vehiculoForm.value)
        .subscribe({
          next: () => {
            this.router.navigate(['/vehiculos']);
          },
          error: (err) => {
            console.log('Error al crear vehiculo', err);
            this.isSubmitting = false;
          }})
    }
  }
}