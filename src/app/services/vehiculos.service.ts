import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vehiculo } from '../interfaces/vehiculos.interface';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private httprequest = inject(HttpClient);

  public url: string = 'http://localhost:3000/vehiculos';

  getVehiculos(): Observable<Vehiculo[]> {
    return this.httprequest.get<Vehiculo[]>(this.url);
  }

  getVehiculosById(id: number): Observable<Vehiculo> {
    return this.httprequest.get<Vehiculo>(`${this.url}/${id}`);
  }

  CreateVehiculo(vehiculos: Omit<Vehiculo, 'id'>): Observable<Vehiculo> {
    return this.httprequest.post<Vehiculo>(this.url,vehiculos)
  }

  UpdateVehiculo(id: number, vehiculos: Omit<Vehiculo, 'id'>): Observable<Vehiculo> {
    return this.httprequest.put<Vehiculo>(`${this.url}/${id}`, vehiculos);
  }

  DeleteVehiculo(id: number): Observable<void> {
    return this.httprequest.delete<void>(`${this.url}/${id}`);
  }
}

export default VehiculosService;