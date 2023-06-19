import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuRoutingModule} from "./menu-routing.module";
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { ProductosComponent } from './pages/productos/productos.component';
import {FormsModule} from "@angular/forms";
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { PresentacionesComponent } from './pages/presentaciones/presentaciones.component';
import { MarcasComponent } from './pages/marcas/marcas.component';
import { FuncionesComponent } from './pages/funciones/funciones.component';
import { UnidadesMedidaComponent } from './pages/unidades-medida/unidades-medida.component';



@NgModule({
  declarations: [
    SidebarComponent,
    ProductosComponent,
    CategoriasComponent,
    PresentacionesComponent,
    MarcasComponent,
    FuncionesComponent,
    UnidadesMedidaComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    FormsModule
  ]
})
export class MenuModule { }
