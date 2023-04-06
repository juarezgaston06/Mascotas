import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/interface/mascota';
import { MascotaService } from 'src/app/services/mascota.service';

@Component({
  selector: 'app-agregar-editar-mascota',
  templateUrl: './agregar-editar-mascota.component.html',
  styleUrls: ['./agregar-editar-mascota.component.css']
})
export class AgregarEditarMascotaComponent implements OnInit  {
  form!: FormGroup;
  id!: number;
  esperando: boolean = false;
  funcion: string = 'AGREGAR';
  constructor(
    private formBuilder: FormBuilder,
    private _serviceMascota: MascotaService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private routerParam: ActivatedRoute
      ){      
        this.form = this.formBuilder.group({
        nombre:[null, Validators.required],
        edad:[null, Validators.required],
        raza: [null, Validators.required],
        color: [null, Validators.required],
        peso: [null, Validators.required]
      });}
  ngOnInit(): void {
    this.crearFormulario();
  }


  crearFormulario(): void{
    this.id = Number(  this.routerParam.snapshot.paramMap.get("id"));

    if(this.id != 0){
      this.funcion = 'MODIFICAR';
      this._serviceMascota.obtenerMascota(this.id).subscribe((data)=>{
        this.form = this.formBuilder.group({
          nombre:[data.nombre],
          edad:[data.edad],
          raza: [data.raza],
          color: [data.color],
          peso: [data.peso]
        });
      });
    }
  }

  prepararMascota(): Mascota{
    let controls = this.form.controls;
    let mascota : Mascota = {id: this.id, nombre: controls["nombre"].value,
    edad: controls["edad"].value, raza:controls["raza"].value,
    color: controls["color"].value, peso: controls["peso"].value}
    
    return mascota;
  }

  agregarMascota(){
    if(this.id == 0){
      this._serviceMascota.crearMascota(this.prepararMascota()).subscribe((data)=>{
        if(data){
          this._snackBar.open('Se a agregado con exito la mascota', 'cerrar',{duration: 2500, horizontalPosition: 'center'}).afterDismissed().subscribe(()=> this.router.navigate(['']));
        }
      });
    }else{
      this._serviceMascota.modificarMascota(this.id, this.prepararMascota()).subscribe(()=>{
        this._snackBar.open('Se a agregado con exito la mascota', 'cerrar',{duration: 2500, horizontalPosition: 'center'}).afterDismissed().subscribe(()=> this.router.navigate(['']));
      })
    }

  }
}
