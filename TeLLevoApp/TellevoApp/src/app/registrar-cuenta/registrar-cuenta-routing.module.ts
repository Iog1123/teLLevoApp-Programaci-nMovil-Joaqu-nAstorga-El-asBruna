import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarCuentaPage } from './registrar-cuenta.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarCuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarCuentaPageRoutingModule {}
