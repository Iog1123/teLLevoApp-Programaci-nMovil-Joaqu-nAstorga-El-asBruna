import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'registrarcuenta',
    loadChildren: () => import('./registrarcuenta/registrarcuenta.module').then( m => m.RegistrarcuentaPageModule)
  },

  {
    path: 'recuperarpassword',
    loadChildren: () => import('./recuperarpassword/recuperarpassword.module').then( m => m.RecuperarpasswordPageModule)
  },
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
