import { Component, EventEmitter, Output } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.scss']
})
export class ListadoProductosComponent {

  @Output() productoEnviado = new EventEmitter<any>();
  listadoProductos: any[] = [];
  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    FirestoreService.traerFs('productos', this.firestore).subscribe((productos:any) => {
      if (productos != null) {
        this.listadoProductos = productos;
      }
    });
  }

  enviarProducto(producto: any)
  {
    this.productoEnviado.emit(producto);
  }
}
