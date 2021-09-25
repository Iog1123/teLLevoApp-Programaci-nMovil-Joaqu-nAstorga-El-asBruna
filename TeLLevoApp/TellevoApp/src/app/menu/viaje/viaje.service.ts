import { Injectable } from '@angular/core';
import {Viaje} from './viaje.model';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  listaViajes : Viaje[]=[
    {
      id: 1,
      conductor: "Arturo Sanchez",
      costo: "2000",
      capacidad: 4,
      comuna: "Lo Espejo"
    },
    {
      id: 2,
      conductor: "Camila Hurtado",
      costo: "3000",
      capacidad: 4,
      comuna: "Las Condes"
    }
  ];

  constructor() { }

 getViajes()
 {
    return [...this.listaViajes];
 }

 addViaje(conductor: string, costo:string, capacidad:number, comuna:string)
 {
  this.listaViajes.push(
    {
      id: this.listaViajes.length+1,
      conductor,
      costo,
      capacidad,
      comuna
    }
  );
 }
}
