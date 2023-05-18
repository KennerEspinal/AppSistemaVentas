import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Categoria } from 'src/app/Interfaces/categoria';
import { UtilidadService } from 'src/app/Reutilizable/utilidad.service';
import { CategoriaService } from 'src/app/Services/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit, AfterViewInit {

  columnasTabla: string[] = ['nombre', 'estado', 'acciones'];
  dataInicio: Categoria[] = [];
  dataListaCategorias = new MatTableDataSource(this.dataInicio);
  @ViewChild(MatPaginator) paginacionTabla!: MatPaginator;

  constructor(
    private dialog: MatDialog,
    private _categoriaServicio: CategoriaService,
    private _utilidadServicio: UtilidadService

  ) { }

  obtenerCategorias() {
    this._categoriaServicio.lista().subscribe({
      next: (data) => {
        if (data.status)
          this.dataListaCategorias.data = data.value;
        else
          this._utilidadServicio.mostrarAlerta("No se encontraron Categorias","Oops!s")
      },
      error: (e) => { }
    })
  }

  ngOnInit(): void {
    this.obtenerCategorias();
  }

  ngAfterViewInit(): void {
    this.dataListaCategorias.paginator = this.paginacionTabla;
  }

  aplicarFiltroTabla(event: Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataListaCategorias.filter = filterValue.trim().toLocaleLowerCase();
  }

  nuevaCategoria(){

  }

  editarCategoria(categoria: Categoria){

  }

  eliminarCategoria(categoria: Categoria){}

}
