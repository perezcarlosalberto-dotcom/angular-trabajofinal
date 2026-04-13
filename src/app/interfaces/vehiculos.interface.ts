export interface VehiculosResponse {
    vehiculos: Vehiculo[];
}

export interface Vehiculo {
    id:     number;
    marca:  string;
    modelo: string;
    anio:   number;
    color:  string;
    precio: number;
}



