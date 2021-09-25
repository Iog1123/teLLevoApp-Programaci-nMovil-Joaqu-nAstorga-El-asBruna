import { Component, OnInit } from '@angular/core';
import { ViajeService } from './viaje.service';
import {Viaje} from './viaje.model';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {
  listaViajes =[];

  constructor(private viajeService: ViajeService) { }

  ngOnInit() {
    this.listaViajes=this.viajeService.getViajes();
  }

}
