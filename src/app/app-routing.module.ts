import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard]  },
  { path: 'producto', loadChildren: () => import('@producto/producto.module').then(mod => mod.ProductoModule) },
  { path: 'parametro', loadChildren: () => import('./feature/parametro/parametro.module').then(mod => mod.ParametroModule) },
  { path: 'cliente', loadChildren: () => import('./feature/cliente/cliente.module').then(mod => mod.ClienteModule) },
  { path: 'cita', loadChildren: () => import('./feature/cita/cita.module').then(mod => mod.CitaModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
