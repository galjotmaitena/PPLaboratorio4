import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BajaComponent } from 'src/app/componentes/container/baja/baja.component';
import { AltaComponent } from 'src/app/componentes/container/alta/alta.component';
import { ListadoComponent } from 'src/app/componentes/container/listado/listado.component';
import { ModificarComponent } from 'src/app/componentes/container/modificar/modificar.component';


@NgModule({
  declarations: [
    ContainerComponent,
    AltaComponent,
    BajaComponent,
    ListadoComponent,
    ModificarComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ContainerModule { }
