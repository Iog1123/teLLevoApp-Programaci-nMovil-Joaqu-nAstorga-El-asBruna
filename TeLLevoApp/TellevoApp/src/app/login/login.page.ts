import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Usuario } from './registrarcuenta/usuario.model';
import { UsuarioService } from './registrarcuenta/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user= 
  { 
  usuario:'',
  password:''
  };

  usuarioServices: Usuario;

  campo: string;


  constructor(private router: Router,private toastController: ToastController,
     private usuarioService: UsuarioService) { }

  ngOnInit() {
  }
  
  ingresar(){

    const navigationExtras: NavigationExtras= {

      state:{
        user: this.user
      }
    };

    if(this.validateModel(this.user)){
      this.usuarioServices=this.usuarioService.getUsuario(this.user.usuario);
      if(this.usuarioService.getUsuario(this.user.usuario).password=== this.user.password){
        this.router.navigate(['/menu'],navigationExtras);
      }

      else{
        this.presentToast('Usuario o password no válidos');
      }
    }

    else
    {
      this.presentToast('falta completart: '+this.campo);
    }


  }

  async presentToast(message: string, duration?: number){
    const toast= await this.toastController.create({
      message,
      duration:duration?duration:1000
    }
     
    );

    toast.present();
  }

  validateModel(model:any){

    for(const[key,value] of Object.entries(model)){

      if(value===''){
        this.campo=key;
      return false;
      
      }
    }
    return true;
  }

  }





