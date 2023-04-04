import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Mascota } from 'src/app/interface/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent implements OnInit  {
  form!: FormGroup;
  esperando: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private _serviceMascota: MascotaService
      ){}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre:[null, Validators.required],
      edad:[null, Validators.required],
      raza: [null, Validators.required],
      color: [null, Validators.required],
      peso: [null, Validators.required]
    })
  }

  prepararMascota(): Mascota{
    let controls = this.form.controls;
    let mascota : Mascota = {nombre: controls["nombre"].value,
    edad: controls["edad"].value, raza:controls["raza"].value,
    color: controls["color"].value, peso: controls["peso"].value}
    
    return mascota;
  }

  agregarMascota(){
    this._serviceMascota.agregarMascota(this.prepararMascota());
  }
}
