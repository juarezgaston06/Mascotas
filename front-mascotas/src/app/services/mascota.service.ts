import { Injectable } from '@angular/core';
import { Mascota } from '../interface/mascota';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private urlApi = "https://localhost:7197/api"



  constructor(private http: HttpClient) { }

  public agregarMascota(mascota: Mascota):void{
    //this.listaMascotas.push(mascota);
  }

  public obtenerMascotas(): Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`${this.urlApi}/Mascota`);
  }
}
