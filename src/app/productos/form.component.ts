import { Component, OnInit } from '@angular/core';
import {Producto} from './producto'
import {ProductoService} from './producto.service'
import {Router, ActivatedRoute} from '@angular/router'
import swal from 'sweetalert2'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  private producto: Producto = new Producto()
  private titulo:string = "Crear Producto"

  constructor(private productosService: ProductoService,
  private router: Router,
private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.cargarProducto()
  }

  cargarProducto(): void{
    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.productosService.getProducto(id).subscribe( (producto) => this.producto = producto)
      }
    })
  }

  create(): void {
    const uuarioRegistra = localStorage.getItem("usuarioSession");
    this.producto.usuarioRegistro=uuarioRegistra;
    this.productosService.create(this.producto)
      .subscribe(producto => {
        this.router.navigate(['/productos'])
        swal('Nuevo producto', `Producto ${producto.nombreProd} registrado con éxito!`, 'success')
      }
      );
  }

  update():void{
    const uuarioActualiza = localStorage.getItem("usuarioSession");
    this.producto.usuarioUpate=uuarioActualiza;
    this.productosService.update(this.producto)
    .subscribe( producto => {
      this.router.navigate(['/productos'])
      swal('Producto Actualizado', `Producto ${producto.nombreProd} actualizado con éxito!`, 'success')
    }

    )
  }

}
