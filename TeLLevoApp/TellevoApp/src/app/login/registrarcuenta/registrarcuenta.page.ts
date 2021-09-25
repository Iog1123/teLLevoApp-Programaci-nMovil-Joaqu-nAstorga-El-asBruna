import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from './usuario.service';


@Component({
  selector: 'app-registrarcuenta',
  templateUrl: './registrarcuenta.page.html',
  styleUrls: ['./registrarcuenta.page.scss'],
})
export class RegistrarcuentaPage implements OnInit {
   
  Usuarios={
    nombre:'',
    email:'',
    password:''

  };
  
  campo: string;

  constructor(private router: Router,public toastController:ToastController,
    private usuarioService: UsuarioService) { }

  ngOnInit() {
  }


  registrarUsuarios(){
   
    if(this.validateModel(this.Usuarios)){
      this.usuarioService.addUsuario(this.Usuarios.nombre.valueOf(),
      this.Usuarios.email.valueOf(),
      this.Usuarios.password.valueOf());
      this.presentToast('Los datos han sido guardados correctamente');
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
