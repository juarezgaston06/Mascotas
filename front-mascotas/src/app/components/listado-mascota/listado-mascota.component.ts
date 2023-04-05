import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Mascota } from 'src/app/interface/mascota';
import { MascotaService } from 'src/app/services/mascota.service';





@Component({
  selector: 'app-listado-mascota',
  templateUrl: './listado-mascota.component.html',
  styleUrls: ['./listado-mascota.component.css']
})
export class ListadoMascotaComponent implements AfterViewInit, OnInit {
  columnas: string[] = ['nombre', 'edad', 'raza', 'color', 'peso','acciones'];
  dataSource = new MatTableDataSource<Mascota>();
  esperando: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private _snackBar: MatSnackBar,
    private _serviceMascota: MascotaService
  ){}
  ngOnInit(): void {
    this._serviceMascota.obtenerMascotas().subscribe((res)=>{
      if(res){
        console.log(res);
        this.dataSource.data = res;
      }
    });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarMascota(nombre: string){
    this.esperando = true;
    setTimeout(()=>{
      this.esperando = false;
      this.dataSource.data = this.dataSource.data.filter(masc => masc.nombre != nombre);
      this._snackBar.open('Se a eliminado con exito la mascota ' + nombre, 'cerrar',{duration: 2500, horizontalPosition: 'right'});
    }, 3000);

  }
}
