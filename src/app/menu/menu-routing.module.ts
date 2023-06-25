import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {SidebarComponent} from "./pages/sidebar/sidebar.component";
import {ProductosComponent} from "./pages/productos/productos.component";
import {CategoriasComponent} from "./pages/categorias/categorias.component";
import {PresentacionesComponent} from "./pages/presentaciones/presentaciones.component";
import {MarcasComponent} from "./pages/marcas/marcas.component";
import {FuncionesComponent} from "./pages/funciones/funciones.component";
import {UnidadesMedidaComponent} from "./pages/unidades-medida/unidades-medida.component";
import {PuestosComponent} from "./pages/puestos/puestos.component";
import {EmpleadosComponent} from "./pages/empleados/empleados.component";
import {AddVentasComponent} from "./pages/add-ventas/add-ventas.component";

const routes: Routes=[
  {path: '',
    component:SidebarComponent,
    children:[
      {path: 'productos',component:ProductosComponent},
      {path: 'categorias',component:CategoriasComponent},
      {path: 'presentaciones',component:PresentacionesComponent},
      {path: 'marcas',component:MarcasComponent},
      {path: 'funciones',component:FuncionesComponent},
      {path: 'unidades-medida',component:UnidadesMedidaComponent},
      {path: 'puestos',component:PuestosComponent},
      {path: 'empleados',component:EmpleadosComponent},
      {path: 'add-ventas',component:AddVentasComponent},
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
