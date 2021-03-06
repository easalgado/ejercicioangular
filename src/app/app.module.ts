import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
//import { DescripcionComponent } from './pages/descripcion/descripcion.component';
//import { LugarNacimientoComponent } from './pages/lugar-nacimiento/lugar-nacimiento.component';
//import { MetasComponent } from './pages/metas/metas.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    //DescripcionComponent,
    //LugarNacimientoComponent,
    //MetasComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
