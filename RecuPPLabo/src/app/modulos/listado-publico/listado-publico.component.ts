import { Component } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/servicios/firestore.service';

@Component({
  selector: 'app-listado-publico',
  templateUrl: './listado-publico.component.html',
  styleUrls: ['./listado-publico.component.scss']
})
export class ListadoPublicoComponent {

  listadoProductos: any[] = [];
  listado: any[] = [];
  constructor(private firestore: Firestore) {}

  ngOnInit(): void {
    FirestoreService.traerFs('productos', this.firestore).subscribe((productos:any) => {
      if (productos != null) {
        this.listadoProductos = productos;
        this.listado = this.listadoProductos.filter((p) => {
          return p.stock > 0;
        });
      }
    });
  }
}
