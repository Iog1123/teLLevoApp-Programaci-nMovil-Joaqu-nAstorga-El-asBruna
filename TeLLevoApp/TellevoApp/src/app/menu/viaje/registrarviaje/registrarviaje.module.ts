import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarviajePageRoutingModule } from './registrarviaje-routing.module';

import { RegistrarviajePage } from './registrarviaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarviajePageRoutingModule
  ],
  declarations: [RegistrarviajePage]
})
export class RegistrarviajePageModule {}
