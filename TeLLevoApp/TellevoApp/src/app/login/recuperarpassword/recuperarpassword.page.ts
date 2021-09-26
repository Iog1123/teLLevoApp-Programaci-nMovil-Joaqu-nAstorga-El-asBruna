import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from '../registrarcuenta/usuario.service';

@Component({
  selector: 'app-recuperarpassword',
  templateUrl: './recuperarpassword.page.html',
  styleUrls: ['./recuperarpassword.page.scss'],
})
export class RecuperarpasswordPage implements OnInit {

  DataRecovery={
    nombre:'',
    email:'',
    password:''

  };
  campo: string;

  constructor(private router: Router,public toastController:ToastController,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
  }

 
  recuperarClave(){
    
    if(this.validateModel(this.DataRecovery)){
      this.usuarioService.addUsuario(this.DataRecovery.nombre.valueOf(),
      this.DataRecovery.email.valueOf(),
      this.DataRecovery.password.valueOf());
      this.presentToast('Su contraseña ha sido restablecida');
      this.router.navigate(['/login'])
    }
    else{
      this.presentToast('Falta ingresar:'+this.campo);
    }

   
  }

  async presentToast(message: string,duration?: number){
    const toast= await this.toastController.create(
    {
      message,
      duration:duration?duration:1000
    }
     
    );

    toast.present();
  }



  validateModel(model:any){

    for(var[key,value] of Object.entries(model)){

      if(value===''){
        this.campo=key;

        return false;
      }
    }
    return true
  }
}
