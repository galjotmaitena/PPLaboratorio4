import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/servicios/firestore.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-producto-container',
  templateUrl: './producto-container.component.html',
  styleUrls: ['./producto-container.component.scss']
})
export class ProductoContainerComponent {

  @Output() reiniciarProducto = new EventEmitter<any>();
  @Input() container: any;
  @Input() productoEnviado: any;

  containers: any[] = [];

  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    FirestoreService.traerFs('containers', this.firestore).subscribe((data)=>{
      this.containers = data;
    });
  }

  eliminarProducto(producto: any)
  {
    if(this.container.productos.find((p:any) => p.id === producto.id))
    {
      let index = this.container.productos.indexOf(producto);

      if (index !== -1) 
      {
        this.productoEnviado = this.container.productos[index];
        this.container.productos.splice(index, 1);
        this.productoEnviado.stock++;
        this.container.capacidad++;
        Swal.fire(
          'Se ha eliminado el producto correctamente',
          '',
          'success'
        );

        FirestoreService.actualizarFs('containers', this.container, this.firestore).then(()=>{
          FirestoreService.actualizarFs('productos', this.productoEnviado, this.firestore).then(()=>{
            Swal.fire(
              'Cargado correctamente',
              '',
              'success'
            );
          });
        });
      }
    }
  }

  ngOnChanges(changes: SimpleChanges): void 
  {
    if(changes['productoEnviado']) 
    {
     if(this.productoEnviado == undefined)
     {
      this.productoEnviado = null;
     }
     else
     {
      //alert(this.calcularStockTotal(this.productoEnviado));
      console.log(this.container.productos.length);
      console.log(this.container);
        if(this.container.productos.length < this.container.capacidad && this.calcularStockTotal(this.productoEnviado) < this.productoEnviado.stock)
        {
          this.container.productos.push(this.productoEnviado);

          Swal.fire(
            'Producto agregado correctamente',
            '',
            'success'
          );

          FirestoreService.actualizarFs('containers', this.container, this.firestore).then(()=>{
            FirestoreService.actualizarFs('productos', this.productoEnviado, this.firestore).then(()=>{
              Swal.fire(
                'Cargado correctamente',
                '',
                'success'
              );

              this.reiniciar();
            });
          });
        }
        else
        {
          Swal.fire(
            'Ha ocurrido un error',
            '',
            'error'
          );
          this.reiniciar();
        }
     }
    }
  }

  reiniciar()
  {
    this.productoEnviado = null;
    this.reiniciarProducto.emit(this.productoEnviado);
  }

  calcularStockTotal(producto: any): number 
  {
    let cantidadTotal = 0;

    this.containers.forEach(container => {
      const cantidadEnContainer = container.productos.reduce((cantidad:any, p:any) => {
        if (p.id === producto.id) {
          cantidad += p.stock;  // Incrementa la cantidad por cada vez que se encuentra en el container
        }
        return cantidad;
      }, 0);

      cantidadTotal += cantidadEnContainer;
    });

    return cantidadTotal;
  }
}
