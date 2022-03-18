import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { LugarNacimientoComponent } from './lugar-nacimiento/lugar-nacimiento.component';
import { MetasComponent } from './metas/metas.component';



@NgModule({
  declarations: [
    DescripcionComponent,
    LugarNacimientoComponent,
    MetasComponent
  ],
  exports:[
    DescripcionComponent,
    LugarNacimientoComponent,
    MetasComponent
  ]
  ,
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
