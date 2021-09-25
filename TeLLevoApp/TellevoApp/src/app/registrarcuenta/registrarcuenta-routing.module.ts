import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarcuentaPage } from './registrarcuenta.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarcuentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarcuentaPageRoutingModule {}
