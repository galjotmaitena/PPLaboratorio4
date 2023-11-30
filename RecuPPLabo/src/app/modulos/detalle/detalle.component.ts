import { Component } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent {
  producto: any;

  constructor() { }

  ngOnInit(): void {
  }

  recibirProducto($event:any){
    this.producto = $event;
  }
}
