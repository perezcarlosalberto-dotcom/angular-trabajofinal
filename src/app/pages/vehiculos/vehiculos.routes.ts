import { Routes } from "@angular/router";    

export const vehiculosRoutes: Routes = [
   
   {
    path: '',
    loadComponent: () => import('../../pages/vehiculos/vehiculos')
   }, 
   {
    path: ':id',
    loadComponent: () => import('../../components/vehiculos/vehiculo-by-id/vehiculo-by-id')
   },
   {
    path: 'create-vehiculo',
    loadComponent: () => import('../../components/vehiculos/vehiculos-create/vehiculos-create')
   },
   {
    path: '**',
    redirectTo: ''
  }
]

export default vehiculosRoutes;