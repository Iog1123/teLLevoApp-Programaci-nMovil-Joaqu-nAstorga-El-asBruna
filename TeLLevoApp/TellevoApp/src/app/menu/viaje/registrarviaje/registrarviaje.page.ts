import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras} from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ViajeService } from '../viaje.service';

@Component({
  selector: 'app-registrarviaje',
  templateUrl: './registrarviaje.page.html',
  styleUrls: ['./registrarviaje.page.scss'],
})
export class RegistrarviajePage implements OnInit {
  viaje={
    conductor:'',
    costo:'',
    capacidad:0,
    comuna:''
  };

  campo:string;

  constructor(private router: Router, public toastControler: ToastController,
    private viajeService: ViajeService) { }

  ngOnInit() {
  }
  
  registraViaje(){
    if(this.validateModel(this.viaje)){
      this.viajeService.addViaje(
        this.viaje.conductor.valueOf(),
        this.viaje.costo.valueOf(),
        this.viaje.capacidad.valueOf(),
        this.viaje.comuna.valueOf());
        this.presentToast('Viaje registrado correctamente');  
    }
    else
    {
      this.presentToast('Falta ingresar: '+ this.campo);
    }

  }


  async presentToast(message:string, duration?:number) {
    const toast = await this.toastControler.create(
      {
        message,
        duration: duration?duration:2000
      }
    );
    toast.present();
  }


  validateModel(model:any){
  for (var [key, value] of Object.entries(model)){
    if (value===''||value===0){
      this.campo=key;
      return false;
    }
  }
  return true;
  }
}



