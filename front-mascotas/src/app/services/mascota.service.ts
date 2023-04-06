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

  public modificarMascota(id: number, mascota: Mascota): Observable<void>{
    return this.http.put<void>(`${this.urlApi}/Mascota/${id}`, mascota);
  }

  public obtenerMascota(idMasco: number): Observable<Mascota>{
    return this.http.get<Mascota>(`${this.urlApi}/Mascota/${idMasco}`);
  }

  public obtenerMascotas(): Observable<Mascota[]>{
    return this.http.get<Mascota[]>(`${this.urlApi}/Mascota`);
  }

  public eliminarMascota(idMasco: number): Observable<void>{
    return this.http.delete<void>(`${this.urlApi}/Mascota/${idMasco}`);
  }

  public crearMascota(mascota: Mascota): Observable<Mascota>{
    return this.http.post<Mascota>(`${this.urlApi}/Mascota`, mascota)
  }

}
