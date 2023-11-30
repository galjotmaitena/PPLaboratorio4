import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { perfilGuard } from './guards/perfil.guard';
import { logGuard } from './guards/log.guard';
import { RegistroComponent } from './componentes/registro/registro.component';
import { resgistroGuard } from './guards/registro.guard';

const routes: Routes = 
  [ { path: '', redirectTo: 'bienvenida', pathMatch: 'full'},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent, canDeactivate:[resgistroGuard]},
  { path: 'alta', loadChildren: () => import('./modulos/alta/alta.module').then(m => m.AltaModule), canActivate:[logGuard] },
  { path: 'bienvenida', loadChildren: () => import('./modulos/bienvenida/bienvenida.module').then(m => m.BienvenidaModule) },
  { path: 'listado-publico', loadChildren: () => import('./modulos/listado-publico/listado-publico.module').then(m => m.ListadoPublicoModule) },
  { path: 'container', loadChildren: () => import('./modulos/container/container.module').then(m => m.ContainerModule), canActivate:[perfilGuard] },
  { path: 'detalle', loadChildren: () => import('./modulos/detalle/detalle.module').then(m => m.DetalleModule), canActivate:[logGuard] },
  { path: 'cargarContainer', loadChildren: () => import('./modulos/cargar-container/cargar-container.module').then(m => m.CargarContainerModule), canActivate:[logGuard] },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
