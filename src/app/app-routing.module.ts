import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductosComponent} from "./menu/pages/productos/productos.component";
import {LoginComponent} from "./auth/pages/login/login.component";


const routes: Routes = [
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path: 'menu',loadChildren:()=>import('./menu/menu.module').then(m=>m.MenuModule)},
  {path: '**',component:LoginComponent}
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
