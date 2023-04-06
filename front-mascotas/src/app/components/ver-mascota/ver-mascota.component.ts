import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Mascota } from 'src/app/interface/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-ver-mascota',
  templateUrl: './ver-mascota.component.html',
  styleUrls: ['./ver-mascota.component.css']
})
export class VerMascotaComponent implements OnInit {
  idMascota!: number;
  mascota$!: Observable<Mascota>;

  constructor(
    private _mascotaService: MascotaService,
    private rout: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.idMascota = Number(this.rout.snapshot.paramMap.get('id'));
    this.mascota$ = this._mascotaService.obtenerMascota(this.idMascota);
  }

}
