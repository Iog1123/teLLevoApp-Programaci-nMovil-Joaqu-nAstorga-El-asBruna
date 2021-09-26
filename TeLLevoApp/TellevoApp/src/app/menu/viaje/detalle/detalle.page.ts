import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Viaje} from '../viaje.model';
import { ViajeService} from '../viaje.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
viaje: Viaje;

  constructor(private activateRoute: ActivatedRoute, 
    private viajeService: ViajeService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(
      paramMap=>{
        const idViajeRecibido=paramMap.get('viajeId');
        this.viaje=this.viajeService.getViaje(idViajeRecibido);
      }
    );
  }

}