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
    return this.http.get<ProductoInterface>(`${this.baseUrl}/producto`)
  }

  createProducto(clv: string, nom: string, desc: string, pre: number, stmin: number, stmax: number, exis: number, idcat: number, idpres: number, idmarc: number) {
    return this.http.post<ProductoInterface>(`${this.baseUrl}/producto/create`, new AddProducto(clv, nom, desc, pre, stmin, stmax, exis, idcat, idpres, idmarc, 1))
  }

  updateProducto(clv: string, nom: string, desc: string, pre: number, stmin: number, stmax: number, exis: number, idcat: number, idpres: number, idmarc: number) {
    return this.http.put<ProductoInterface>(`${this.baseUrl}/producto/update/${clv}`, new AddProducto(clv, nom, desc, pre, stmin, stmax, exis, idcat, idpres, idmarc, 1))
  }

  deleteProducto(clave: string) {
    return this.http.put<ProductoInterface>(`${this.baseUrl}/producto/delete/${clave}`, '')
  }

  /*--------------------------------------------------------------------------------------*/
  /*------------------------------------CATEGORIAS----------------------------------------*/

  /*--------------------------------------------------------------------------------------*/
  getCategorias() {
    return this.http.get<CategoriaInterface>(`${this.baseUrl}/categoria${this.token}`)
  }

  createCategoria(nom: string, idfun: number) {
    return this.http.post<CategoriaInterface>(`${this.baseUrl}/categoria/create`, new AddCategoria(nom, idfun, 1))
  }

  updateCategoria(id: number, nom: string, idfun: number) {
    return this.http.put<CategoriaInterface>(`${this.baseUrl}/categoria/update/${id}`, new AddCategoria(nom, idfun, 1))
  }

  deleteCategoria(id: number) {
    return this.http.put<CategoriaInterface>(`${this.baseUrl}/categoria/delete/${id}`, '')
  }

  /*------------------------------------------------------------------------------------------*/
  /*------------------------------------PRESENTACIONES----------------------------------------*/

  /*------------------------------------------------------------------------------------------*/
  getPresentaciones() {
    return this.http.get<PresentacionInterface>(`${this.baseUrl}/presentacion`)
  }

  createPresentacion(nom: string, desc: string, idunmed: number, med: number) {
    return this.http.post<PresentacionInterface>(`${this.baseUrl}/presentacion/create`, new AddPresentacion(nom, desc, idunmed, med, 1))
  }

  updatePresentacion(id: number, nom: string, desc: string, idunmed: number, med: number) {
    return this.http.put<PresentacionInterface>(`${this.baseUrl}/presentacion/update/${id}`, new AddPresentacion(nom, desc, idunmed, med, 1))
  }

  deletePresentacion(id: number) {
    return this.http.put<PresentacionInterface>(`${this.baseUrl}/presentacion/delete/${id}`, '')
  }

  /*----------------------------------------------------------------------------------*/
  /*------------------------------------MARCAS----------------------------------------*/

  /*----------------------------------------------------------------------------------*/
  getMarcas() {
    return this.http.get<MrcFncnInterface>(`${this.baseUrl}/marca`)
  }

  createMarca(nom: string, desc: string) {
    return this.http.post<MrcFncnInterface>(`${this.baseUrl}/marca/create`, new AddMrcfncn(nom, desc, 1))
  }

  updateMarca(id: number, nom: string, desc: string) {
    return this.http.put<MrcFncnInterface>(`${this.baseUrl}/marca/update/${id}`, new AddMrcfncn(nom, desc, 1))
  }

  deleteMarca(id: number) {
    return this.http.put<MrcFncnInterface>(`${this.baseUrl}/marca/delete/${id}`, '')
  }

  /*-------------------------------------------------------------------------------------*/
  /*------------------------------------FUNCIONES----------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getFunciones() {
    return this.http.get<MrcFncnInterface>(`${this.baseUrl}/funcion`)
  }
  createFuncion(nom: string, desc: string) {
    return this.http.post<MrcFncnInterface>(`${this.baseUrl}/funcion/create`,new AddMrcfncn(nom,desc,1))
  }
  updateFuncion(id:number,nom: string, desc: string){
    return this.http.put<MrcFncnInterface>(`${this.baseUrl}/funcion/update/${id}`,new AddMrcfncn(nom,desc,1))
  }
  deleteFuncion(id:number){
    return this.http.put<MrcFncnInterface>(`${this.baseUrl}/funcion/delete/${id}`,'')
  }
  /*-------------------------------------------------------------------------------------*/
  /*--------------------------------UNIDADES DE MEDIDA-----------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getUnidadesMedida() {
    return this.http.get<UnidadMedidaInterface>(`${this.baseUrl}/unidad-medida`)
  }
  createUnidadMedida(unidad:string){
    return this.http.post<UnidadMedidaInterface>(`${this.baseUrl}/unidad-medida/create`,new AddUnidadMedida(unidad,1))
  }
  updateUnidadMedida(id:number,unidad:string){
    return this.http.put<UnidadMedidaInterface>(`${this.baseUrl}/unidad-medida/update/${id}`,new AddUnidadMedida(unidad,1))
  }
  deleteUnidadMedida(id:number){
    return this.http.put<UnidadMedidaInterface>(`${this.baseUrl}/unidad-medida/delete/${id}`,'')
  }
  /*-------------------------------------------------------------------------------------*/
  /*-------------------------------------PUESTOS-----------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getPuestos(){
    return this.http.get<PuestoInterface>(`${this.baseUrl}/puesto`)
  }
  createPuesto(nom:string){
    return this.http.post<PuestoInterface>(`${this.baseUrl}/puesto/create`,new AddPuesto(nom,1))
  }
  updatePuesto(id:number,nom:string){
    return this.http.put<PuestoInterface>(`${this.baseUrl}/puesto/update/${id}`,new AddPuesto(nom,1))
  }
  deletePuesto(id:number){
    return this.http.put<PuestoInterface>(`${this.baseUrl}/puesto/delete/${id}`,'1')
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
    return this.http.get<DetalleVentaInterface>(`${this.baseUrl}/dv/${folio}`)
  }
  addDetalleVenta(dv:AddDetalleVenta[]){
    return this.http.post(`${this.baseUrl}/dv/create`,dv)
  }
  deleteDetalleVenta(id:number){
    return this.http.delete(`${this.baseUrl}/dv/delete/${id}`)
  }
  /*-------------------------------------------------------------------------------------*/
  /*---------------------------------------VENTAS----------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getVentas(){
    return this.http.get<VentaInterface>(`${this.baseUrl}/venta`)
  }
  getVentasByClave(clave:string){
    return this.http.get<VentaInterface>(`${this.baseUrl}/venta/ver-ventas/${clave}`)
  }
  createVenta(folio:string,clave:string){
    return this.http.post<VentaInterface>(`${this.baseUrl}/venta/create`,new AddVenta(folio,0,clave,1))
  }
  deleteVenta(folio:string){
    return this.http.put<VentaInterface>(`${this.baseUrl}/venta/delete/${folio}`,'')
  }
}
