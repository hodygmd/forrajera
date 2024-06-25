import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  CategoriaInterface, DetalleVentaInterface, EmpleadoInterface,
  MrcFncnInterface,
  PresentacionInterface,
  ProductoInterface, PuestoInterface, UnidadMedidaInterface, VentaInterface
} from "./Interfaces/producto-interface";
import {AddProducto} from "./Classes/add-producto";
import {AddMrcfncn} from "./Classes/add-mrcfncn";
import {AddCategoria} from "./Classes/add-categoria";
import {AddPresentacion} from "./Classes/add-presentacion";
import {AddUnidadMedida} from "./Classes/add-unidad-medida";
import {AddPuesto} from "./Classes/add-puesto";
import * as http from "http";
import {AddEmpleado} from "./Classes/add-empleado";
import {AddVenta} from "./Classes/add-venta";
import {AddDetalleVenta} from "./Classes/add-detalle-venta";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private baseUrl = 'http://localhost:8080';
  private token = '?token=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb2NlIiwiY2xhdmUiOiJlbXBsMjMwMDg2NiIsImlhdCI6MTcxOTEyNjkzMiwiZXhwIjoxNzE5OTkwOTMyfQ.kJhZKJqROhLBylzs1EhYfmpeoQxzLShg7oIQwFAgQe0';

  constructor(private http: HttpClient) {
  }
  auth(username: string, password: string) {
    return this.http.post<EmpleadoInterface>(`${this.baseUrl}/empleado/login${this.token}`,
      new AddEmpleado('','',username,password,0,1))
  }
  /*-------------------------------------------------------------------------------------*/
  /*------------------------------------PRODUCTOS----------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getProductos() {
    return this.http.get<ProductoInterface>(`${this.baseUrl}/producto${this.token}`)
  }

  createProducto(clv: string, nom: string, desc: string, pre: number, stmin: number, stmax: number, exis: number, idcat: number, idpres: number, idmarc: number) {
    return this.http.post<ProductoInterface>(`${this.baseUrl}/producto/create${this.token}`,
      new AddProducto(clv, nom, desc, pre, stmin, stmax, exis, idcat, idpres, idmarc, 1))
  }

  updateProducto(clv: string, nom: string, desc: string, pre: number, stmin: number, stmax: number, exis: number, idcat: number, idpres: number, idmarc: number) {
    return this.http.put<ProductoInterface>(`${this.baseUrl}/producto/update/${clv}${this.token}`,
      new AddProducto(clv, nom, desc, pre, stmin, stmax, exis, idcat, idpres, idmarc, 1))
  }

  deleteProducto(clave: string) {
    return this.http.put<ProductoInterface>(`${this.baseUrl}/producto/delete/${clave}${this.token}`, '')
  }

  /*--------------------------------------------------------------------------------------*/
  /*------------------------------------CATEGORIAS----------------------------------------*/

  /*--------------------------------------------------------------------------------------*/
  getCategorias() {
    return this.http.get<CategoriaInterface>(`${this.baseUrl}/categoria${this.token}`)
  }

  createCategoria(nom: string, idfun: number) {
    return this.http.post<CategoriaInterface>(`${this.baseUrl}/categoria/create${this.token}`,
      new AddCategoria(nom, idfun, 1))
  }

  updateCategoria(id: number, nom: string, idfun: number) {
    return this.http.put<CategoriaInterface>(`${this.baseUrl}/categoria/update/${id}${this.token}`,
      new AddCategoria(nom, idfun, 1))
  }

  deleteCategoria(id: number) {
    return this.http.put<CategoriaInterface>(`${this.baseUrl}/categoria/delete/${id}${this.token}`, '')
  }

  /*------------------------------------------------------------------------------------------*/
  /*------------------------------------PRESENTACIONES----------------------------------------*/

  /*------------------------------------------------------------------------------------------*/
  getPresentaciones() {
    return this.http.get<PresentacionInterface>(`${this.baseUrl}/presentacion${this.token}`)
  }

  createPresentacion(nom: string, desc: string, idunmed: number, med: number) {
    return this.http.post<PresentacionInterface>(`${this.baseUrl}/presentacion/create${this.token}`,
      new AddPresentacion(nom, desc, idunmed, med, 1))
  }

  updatePresentacion(id: number, nom: string, desc: string, idunmed: number, med: number) {
    return this.http.put<PresentacionInterface>(`${this.baseUrl}/presentacion/update/${id}${this.token}`,
      new AddPresentacion(nom, desc, idunmed, med, 1))
  }

  deletePresentacion(id: number) {
    return this.http.put<PresentacionInterface>(`${this.baseUrl}/presentacion/delete/${id}${this.token}`, '')
  }

  /*----------------------------------------------------------------------------------*/
  /*------------------------------------MARCAS----------------------------------------*/

  /*----------------------------------------------------------------------------------*/
  getMarcas() {
    return this.http.get<MrcFncnInterface>(`${this.baseUrl}/marca${this.token}`)
  }

  createMarca(nom: string, desc: string) {
    return this.http.post<MrcFncnInterface>(`${this.baseUrl}/marca/create${this.token}`,
      new AddMrcfncn(nom, desc, 1))
  }

  updateMarca(id: number, nom: string, desc: string) {
    return this.http.put<MrcFncnInterface>(`${this.baseUrl}/marca/update/${id}${this.token}`,
      new AddMrcfncn(nom, desc, 1))
  }

  deleteMarca(id: number) {
    return this.http.put<MrcFncnInterface>(`${this.baseUrl}/marca/delete/${id}${this.token}`, '')
  }

  /*-------------------------------------------------------------------------------------*/
  /*------------------------------------FUNCIONES----------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getFunciones() {
    return this.http.get<MrcFncnInterface>(`${this.baseUrl}/funcion${this.token}`)
  }
  createFuncion(nom: string, desc: string) {
    return this.http.post<MrcFncnInterface>(`${this.baseUrl}/funcion/create${this.token}`,
      new AddMrcfncn(nom,desc,1))
  }
  updateFuncion(id:number,nom: string, desc: string){
    return this.http.put<MrcFncnInterface>(`${this.baseUrl}/funcion/update/${id}${this.token}`,
      new AddMrcfncn(nom,desc,1))
  }
  deleteFuncion(id:number){
    return this.http.put<MrcFncnInterface>(`${this.baseUrl}/funcion/delete/${id}${this.token}`,'')
  }
  /*-------------------------------------------------------------------------------------*/
  /*--------------------------------UNIDADES DE MEDIDA-----------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getUnidadesMedida() {
    return this.http.get<UnidadMedidaInterface>(`${this.baseUrl}/unidad-medida${this.token}`)
  }
  createUnidadMedida(unidad:string){
    return this.http.post<UnidadMedidaInterface>(`${this.baseUrl}/unidad-medida/create${this.token}`,
      new AddUnidadMedida(unidad,1))
  }
  updateUnidadMedida(id:number,unidad:string){
    return this.http.put<UnidadMedidaInterface>(`${this.baseUrl}/unidad-medida/update/${id}${this.token}`,
      new AddUnidadMedida(unidad,1))
  }
  deleteUnidadMedida(id:number){
    return this.http.put<UnidadMedidaInterface>(`${this.baseUrl}/unidad-medida/delete/${id}${this.token}`,'')
  }
  /*-------------------------------------------------------------------------------------*/
  /*-------------------------------------PUESTOS-----------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getPuestos(){
    return this.http.get<PuestoInterface>(`${this.baseUrl}/puesto${this.token}`)
  }
  createPuesto(nom:string){
    return this.http.post<PuestoInterface>(`${this.baseUrl}/puesto/create${this.token}`,
      new AddPuesto(nom,1))
  }
  updatePuesto(id:number,nom:string){
    return this.http.put<PuestoInterface>(`${this.baseUrl}/puesto/update/${id}${this.token}`,
      new AddPuesto(nom,1))
  }
  deletePuesto(id:number){
    return this.http.put<PuestoInterface>(`${this.baseUrl}/puesto/delete/${id}${this.token}`,'')
  }
  /*-------------------------------------------------------------------------------------*/
  /*------------------------------------EMPLEADOS----------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getEmpleados(){
    return this.http.get<EmpleadoInterface>(`${this.baseUrl}/empleado${this.token}`)
  }
  createEmpleado(clave:string,nom:string,username:string,password:string,idP:number){
    return this.http.post<EmpleadoInterface>(`${this.baseUrl}/empleado/create${this.token}`,
      new AddEmpleado(clave,nom,username,password,idP,1))
  }
  updateEmpleado(clave:string,nom:string,username:string,password:string,idP:number){
    return this.http.put<EmpleadoInterface>(`${this.baseUrl}/empleado/update/${clave}${this.token}`,
      new AddEmpleado(clave,nom,username,password,idP,1))
  }
  updatePassword(clave:string,nom:string,username:string,password:string,idP:number){
    return this.http.put<EmpleadoInterface>(`${this.baseUrl}/empleado/update-pass/${clave}${this.token}`,
      new AddEmpleado(clave,nom,username,password,idP,1))
  }
  deleteEmpleado(clave:string){
    return this.http.put<EmpleadoInterface>(`${this.baseUrl}/empleado/delete/${clave}${this.token}`,'')
  }
  /*-------------------------------------------------------------------------------------*/
  /*----------------------------------DETALLES VENTAS------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getProductosByFolio(folio:string){
    return this.http.get<DetalleVentaInterface>(`${this.baseUrl}/dv/${folio}${this.token}`)
  }
  addDetalleVenta(dv:AddDetalleVenta[]){
    return this.http.post(`${this.baseUrl}/dv/create${this.token}`,dv)
  }
  deleteDetalleVenta(id:number){
    return this.http.delete(`${this.baseUrl}/dv/delete/${id}${this.token}`)
  }
  /*-------------------------------------------------------------------------------------*/
  /*---------------------------------------VENTAS----------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getVentas(){
    return this.http.get<VentaInterface>(`${this.baseUrl}/venta${this.token}`)
  }
  getVentasByClave(clave:string){
    return this.http.get<VentaInterface>(`${this.baseUrl}/venta/ver-ventas/${clave}${this.token}`)
  }
  createVenta(folio:string,clave:string){
    return this.http.post<VentaInterface>(`${this.baseUrl}/venta/create${this.token}`,
      new AddVenta(folio,0,clave,1))
  }
  deleteVenta(folio:string){
    return this.http.put<VentaInterface>(`${this.baseUrl}/venta/delete/${folio}${this.token}`,'')
  }
}
