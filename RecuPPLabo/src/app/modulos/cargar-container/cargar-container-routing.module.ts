import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarContainerComponent } from './cargar-container.component';

const routes: Routes = [{ path: '', component: CargarContainerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CargarContainerRoutingModule { }
