import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LugarNacimientoComponent } from './pages/lugar-nacimiento/lugar-nacimiento.component';
import { DescripcionComponent } from './pages/descripcion/descripcion.component';
import { MetasComponent } from './pages/metas/metas.component';

const routes: Routes = [
  {
    path: 'descripcion',
    component: DescripcionComponent
    },
    {
    path: 'lugar-nacimiento',
    component: LugarNacimientoComponent
    },
    {
    path: 'metas',
    component: MetasComponent
    },
    {
      path: '**',
      redirectTo: 'home'
      }
     
   ];
   


@NgModule({
  declarations: [],
  exports:[
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
