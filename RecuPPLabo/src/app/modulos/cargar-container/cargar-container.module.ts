import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CargarContainerRoutingModule } from './cargar-container-routing.module';
import { CargarContainerComponent } from './cargar-container.component';
import { ListadoComponent } from 'src/app/componentes/cargarContainer/listado/listado.component';
import { ListadoProductosComponent } from 'src/app/componentes/cargarContainer/listado-productos/listado-productos.component';
import { MostrarContainerComponent } from 'src/app/componentes/cargarContainer/mostrar-container/mostrar-container.component';
import { MostrarProductoComponent } from 'src/app/componentes/cargarContainer/mostrar-producto/mostrar-producto.component';
import { ProductoContainerComponent } from 'src/app/componentes/cargarContainer/producto-container/producto-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CargarContainerComponent,
    ListadoComponent,
    ListadoProductosComponent,
    MostrarContainerComponent,
    MostrarProductoComponent,
    ProductoContainerComponent
  ],
  imports: [
    CommonModule,
    CargarContainerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CargarContainerModule { }
