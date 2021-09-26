import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajePage } from './viaje.page';

const routes: Routes = [
  {
    path: '',
    component: ViajePage
  },
  {
    path: 'registrarviaje',
    loadChildren: () => import('./registrarviaje/registrarviaje.module').then( m => m.RegistrarviajePageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./detalle/detalle.module').then( m => m.DetallePageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajePageRoutingModule {}
