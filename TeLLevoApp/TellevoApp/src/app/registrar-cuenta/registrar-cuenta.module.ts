import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarCuentaPageRoutingModule } from './registrar-cuenta-routing.module';

import { RegistrarCuentaPage } from './registrar-cuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarCuentaPageRoutingModule
  ],
  declarations: [RegistrarCuentaPage]
})
export class RegistrarCuentaPageModule {}
