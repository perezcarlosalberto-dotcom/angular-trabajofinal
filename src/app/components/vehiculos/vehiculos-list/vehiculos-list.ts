import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AsyncPipe, TitleCasePipe } from '@angular/common';
import { VehiculoService } from '../../../services/vehiculos.service';
import { Vehiculo } from '../../../interfaces/vehiculos.interface';

@Component({
  selector: 'app-vehiculos-list',
  imports: [AsyncPipe, TitleCasePipe],
  templateUrl: './vehiculos-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class VehiculoList { 
private vehiculoService = inject(VehiculoService);
private router = inject(Router);

public vehiculo$: Observable<Vehiculo[]> = this.vehiculoService.getVehiculos().pipe(
  map((vehiculos: Vehiculo[]) => vehiculos.sort((a, b) => {
    const idA = typeof a.id === 'string' ? parseInt(a.id, 10) : a.id;
    const idB = typeof b.id === 'string' ? parseInt(b.id, 10) : b.id;
    return idA - idB;
  }
)));
public isDeleting = signal<number | null>(null);

onAddUser(): void {
  this.router.navigate(['/vehiculos/create-vehiculo']);
}

onEditVehiculo(id: number): void {
  this.router.navigate(['/vehiculos', id]);
}

onDeleteVehiculo(id: number): void {
  if (confirm('¿Está seguro que desea eliminar este vehiculo?')) {
    this.isDeleting.set(id);

    this.vehiculosService.DeleteVehiculo(id).subscribe({
      next: () => {
        // Reload vehiculos list
        this.vehiculo$ = this.vehiculosService.getVehiculos().pipe(
          map(vehiculos => vehiculos.sort((a, b) => {
            const idA = typeof a.id === 'string' ? parseInt(a.id, 10) : a.id;
            const idB = typeof b.id === 'string' ? parseInt(b.id, 10) : b.id;
            return idA - idB;
          }))
        );
        this.isDeleting.set(null);
      },
      error: (error) => {
        console.error('Error deleting vehiculo:', error);
        this.isDeleting.set(null);
        alert('Error al eliminar el vehiculo');
      }
    });
  }
}
}
