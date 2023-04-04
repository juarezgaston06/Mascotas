import { Injectable } from '@angular/core';
import { Mascota } from '../interface/mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  public listaMascotas : Mascota[] = [
    {nombre: 'Ciro', edad: 5, raza:'BullDog', color: 'marron', peso: 50},
    {nombre: 'Izzy', edad: 2, raza:'Salchicha', color: 'marron', peso: 20},
    {nombre: 'Hone', edad: 12, raza:'Doverman', color: 'negro', peso: 65}];


  constructor() { }

  public agregarMascota(mascota: Mascota):void{
    this.listaMascotas.push(mascota);
  }
}
