import { Component } from '@angular/core';

@Component({
  selector: 'app-cargar-container',
  templateUrl: './cargar-container.component.html',
  styleUrls: ['./cargar-container.component.scss']
})
export class CargarContainerComponent {

  containerElegido: any;
  productoEnviado: any;
  productoConStock: any;

  constructor() {}

  ngOnInit(): void {}

  tomarContainer(event: any) 
  {
    this.containerElegido = event;
  }

  tomarProducto(event: any)
  {
    this.productoEnviado = event;
  }

  reiniciarProducto(event: any)
  {
    alert('reiniciado');
    this.productoEnviado = event;
  }

  tomarStock(event: any)
  {
    this.productoConStock = event;
  }
}
