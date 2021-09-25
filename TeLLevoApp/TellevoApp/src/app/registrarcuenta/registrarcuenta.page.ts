import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrarcuenta',
  templateUrl: './registrarcuenta.page.html',
  styleUrls: ['./registrarcuenta.page.scss'],
})
export class RegistrarcuentaPage implements OnInit {
  
  usuario: Array<any> = [
    {
      nombre: "Juan cantillana",
      email:"juancho45@gmail.com",
      password:"juan4545"
    },

    {
      nombre: "byron casanova",
      email:"elbyron@gmail.com",
      password:"b4545"
    }
  ]
  

  constructor() { }

  ngOnInit() {
  }

}
