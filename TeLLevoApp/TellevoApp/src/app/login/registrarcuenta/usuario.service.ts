import { Injectable } from '@angular/core';
import { Usuario } from './usuario.model';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

listaUsuarios: Usuario []=[
{

  id:'1',
  nombre:'joaquin',
  email:'joa.iog11.23@gmail.com',
  password:'Hangar18'

}
  
];


  constructor() { }


  getUsuarios(){

    return[...this.listaUsuarios];
  }

  getUsuario(UsuarioEmail: string)
  {
    return{
      ...this.listaUsuarios.find(Usuario=>{return Usuario.nombre=== UsuarioEmail })
    }
    
  }

  addUsuario(nombre: string, email: string, password: string){

    this.listaUsuarios.push(
     {
      id:this.listaUsuarios.length+1+'',
      nombre, 
      email,
      password
     }
    );
  }

  deleteUsuario(UsuarioEmail: string){
    this.listaUsuarios=this.listaUsuarios.filter(Usuario=>{return Usuario.email!== UsuarioEmail})
  }


}
