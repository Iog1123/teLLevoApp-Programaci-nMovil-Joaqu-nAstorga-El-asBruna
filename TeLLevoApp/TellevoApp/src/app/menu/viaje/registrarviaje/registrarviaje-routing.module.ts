import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarviajePage } from './registrarviaje.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarviajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarviajePageRoutingModule {}
