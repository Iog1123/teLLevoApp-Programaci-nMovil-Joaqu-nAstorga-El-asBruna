import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarcuentaPageRoutingModule } from './registrarcuenta-routing.module';

import { RegistrarcuentaPage } from './registrarcuenta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarcuentaPageRoutingModule
  ],
  declarations: [RegistrarcuentaPage]
})
export class RegistrarcuentaPageModule {}
