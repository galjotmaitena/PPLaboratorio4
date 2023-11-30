import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './detalle.component';
import { ListadoComponent } from 'src/app/componentes/productos/listado/listado.component';
import { PaisComponent } from 'src/app/componentes/productos/pais/pais.component';
import { DetalleProdComponent } from 'src/app/componentes/productos/detalle-prod/detalle-prod.component';


@NgModule({
  declarations: [
    DetalleComponent,
    ListadoComponent,
    PaisComponent,
    DetalleProdComponent
  ],
  imports: [
    CommonModule,
    DetalleRoutingModule
  ]
})
export class DetalleModule { }
