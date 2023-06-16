import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SidebarComponent} from "./pages/sidebar/sidebar.component";
import {ProductosComponent} from "./pages/productos/productos.component";
import {CategoriasComponent} from "./pages/categorias/categorias.component";
import {PresentacionesComponent} from "./pages/presentaciones/presentaciones.component";
import {MarcasComponent} from "./pages/marcas/marcas.component";

const routes: Routes=[
  {path: '',
    component:SidebarComponent,
    children:[
      {path: 'productos',component:ProductosComponent},
      {path: 'categorias',component:CategoriasComponent},
      {path: 'presentaciones',component:PresentacionesComponent},
      {path: 'marcas',component:MarcasComponent},
      {path: '**',redirectTo:'productos'}
    ]}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class MenuRoutingModule { }
