import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';
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
import {AddEmpleado} from "./Classes/add-empleado";
import {AddVenta} from "./Classes/add-venta";
import {AddDetalleVenta} from "./Classes/add-detalle-venta";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  //private baseUrl = 'http://localhost:8080';
  private baseUrlPrimary = 'http://localhost:8080';
  private baseUrlSecondary = 'http://localhost:8081';

  constructor(private http: HttpClient) {
  }
  /*-------------------------------------------------------------------------------------*/
  /*----------------------------------METODO GENERICO------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  // Método para comprobar la URL principal y, si falla, intentar con la de respaldo
  private checkUrls<T>(endpoint:string,method: string, body?: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json',
    'Authorization':'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtYW51ZWwiLCJjbGF2ZSI6IjExMTExIiwiaWF0IjoxNzI0Mzc0MjQ0LCJleHAiOjE3MjUwNjc4NzN9.brpC4exWS1Bb2qpXy-yKYPPh8zZhGUqLh8XlM1Fa8CM'});
    const url1=`${this.baseUrlPrimary}${endpoint}`
    const url2=`${this.baseUrlSecondary}${endpoint}`
    return this.http.request<T>(method, `${url1}`, { headers, body }).pipe(
      catchError((error) => {
        console.error(`Error en la URL ${url1}. Intentando con la URL de respaldo...`);
        // Si falla la URL principal, intenta con la URL de respaldo
        return this.http.request<T>(method, `${url2}`, { headers, body });
      })
    );
  }
  /*-------------------------------------------------------------------------------------*/
  /*--------------------------------------AUTH-------------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  auth(username: string, password: string) {
    const endpoint = `/empleado/login`;
    return this.checkUrls<EmpleadoInterface>(endpoint,'POST',
      new AddEmpleado('','',username,password,0,1));
  }
  /*-------------------------------------------------------------------------------------*/
  /*------------------------------------PRODUCTOS----------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getProductos() {
    const endpoint = `/producto`;
    return this.checkUrls<ProductoInterface>(endpoint,'GET');
  }

  createProducto(clv: string, nom: string, desc: string, pre: number, stmin: number,
                 stmax: number, exis: number, idcat: number, idpres: number,
                 idmarc: number) {
    const endpoint = `/producto/create`;
    return this.checkUrls<ProductoInterface>(endpoint,'POST',
      new AddProducto(clv, nom, desc, pre, stmin, stmax, exis, idcat, idpres, idmarc, 1));
  }

  updateProducto(clv: string, nom: string, desc: string, pre: number, stmin: number,
                 stmax: number, exis: number, idcat: number, idpres: number,
                 idmarc: number) {
    const endpoint= `/producto/update/${clv}`;
    return this.checkUrls<ProductoInterface>(endpoint,'PUT',
      new AddProducto(clv, nom, desc, pre, stmin, stmax, exis, idcat, idpres, idmarc, 1));
  }

  deleteProducto(clave: string) {
    const endpoint=`/producto/delete/${clave}`
    return this.checkUrls<ProductoInterface>(endpoint,'PUT','');
  }

  /*--------------------------------------------------------------------------------------*/
  /*------------------------------------CATEGORIAS----------------------------------------*/

  /*--------------------------------------------------------------------------------------*/
  getCategorias() {
    const endpoint = `/categoria`;
    return this.checkUrls<CategoriaInterface>(endpoint,'GET');
  }

  createCategoria(nom: string, idfun: number) {
    const endpoint=`/categoria/create`
    return this.checkUrls<CategoriaInterface>(endpoint,'POST',
      new AddCategoria(nom, idfun, 1))
  }

  updateCategoria(id: number, nom: string, idfun: number) {
    const endpoint=`/categoria/update/${id}`
    return this.checkUrls<CategoriaInterface>(endpoint,'PUT',
      new AddCategoria(nom, idfun, 1))
  }

  deleteCategoria(id: number) {
    const endpoint=`/categoria/delete/${id}`
    return this.checkUrls<CategoriaInterface>(endpoint,'PUT','')
  }

  /*------------------------------------------------------------------------------------------*/
  /*------------------------------------PRESENTACIONES----------------------------------------*/

  /*------------------------------------------------------------------------------------------*/
  getPresentaciones() {
    const endpoint = `/presentacion`;
    return this.checkUrls<PresentacionInterface>(endpoint,'GET');
  }

  createPresentacion(nom: string, desc: string, idunmed: number, med: number) {
    const endpoint=`/presentacion/create`
    return this.checkUrls<PresentacionInterface>(endpoint,'POST',
      new AddPresentacion(nom, desc, idunmed, med, 1))
  }

  updatePresentacion(id: number, nom: string, desc: string, idunmed: number, med: number) {
    const endpoint=`/presentacion/update/${id}`
    return this.checkUrls<PresentacionInterface>(endpoint,'PUT',
      new AddPresentacion(nom, desc, idunmed, med, 1))
  }

  deletePresentacion(id: number) {
    const endpoint=`/presentacion/delete/${id}`
    return this.checkUrls<PresentacionInterface>(endpoint,'PUT','')
  }

  /*----------------------------------------------------------------------------------*/
  /*------------------------------------MARCAS----------------------------------------*/

  /*----------------------------------------------------------------------------------*/
  getMarcas() {
    const endpoint = `/marca`;
    return this.checkUrls<MrcFncnInterface>(endpoint,'GET');
  }

  createMarca(nom: string, desc: string) {
    const endpoint=`/marca/create`
    return this.checkUrls<MrcFncnInterface>(endpoint,'POST',
      new AddMrcfncn(nom, desc, 1))
  }

  updateMarca(id: number, nom: string, desc: string) {
    const endpoint=`/marca/update/${id}`
    return this.checkUrls<MrcFncnInterface>(endpoint,'PUT',
      new AddMrcfncn(nom, desc, 1))
  }

  deleteMarca(id: number) {
    const endpoint=`/marca/delete/${id}`
    return this.checkUrls<MrcFncnInterface>(endpoint,'PUT','')
  }

  /*-------------------------------------------------------------------------------------*/
  /*------------------------------------FUNCIONES----------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getFunciones() {
    const endpoint = `/funcion`;
    return this.checkUrls<MrcFncnInterface>(endpoint,'GET');
  }
  createFuncion(nom: string, desc: string) {
    const endpoint=`/funcion/create`
    return this.checkUrls<MrcFncnInterface>(endpoint,'POST',
      new AddMrcfncn(nom,desc,1))
  }
  updateFuncion(id:number,nom: string, desc: string){
    const endpoint=`/funcion/update/${id}`
    return this.checkUrls<MrcFncnInterface>(endpoint,'PUT',
      new AddMrcfncn(nom,desc,1))
  }
  deleteFuncion(id:number){
    const endpoint=`/funcion/delete/${id}`
    return this.checkUrls<MrcFncnInterface>(endpoint,'PUT','')
  }
  /*-------------------------------------------------------------------------------------*/
  /*--------------------------------UNIDADES DE MEDIDA-----------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getUnidadesMedida() {
    const endpoint = `/unidad-medida`;
    return this.checkUrls<UnidadMedidaInterface>(endpoint,'GET');
  }
  createUnidadMedida(unidad:string){
    const endpoint=`/unidad-medida/create`
    return this.checkUrls<UnidadMedidaInterface>(endpoint,'POST',
      new AddUnidadMedida(unidad,1))
  }
  updateUnidadMedida(id:number,unidad:string){
    const endpoint=`/unidad-medida/update/${id}`
    return this.checkUrls<UnidadMedidaInterface>(endpoint,'PUT',
      new AddUnidadMedida(unidad,1))
  }
  deleteUnidadMedida(id:number){
    const endpoint=`/unidad-medida/delete/${id}`
    return this.checkUrls<UnidadMedidaInterface>(endpoint,'PUT','')
  }
  /*-------------------------------------------------------------------------------------*/
  /*-------------------------------------PUESTOS-----------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getPuestos(){
    const endpoint = `/puesto`;
    return this.checkUrls<PuestoInterface>(endpoint,'GET');
  }
  createPuesto(nom:string){
    const endpoint=`/puesto/create`
    return this.checkUrls<PuestoInterface>(endpoint,'POST',
      new AddPuesto(nom,1))
  }
  updatePuesto(id:number,nom:string){
    const endpoint=`/puesto/update/${id}`
    return this.checkUrls<PuestoInterface>(endpoint,'PUT',
      new AddPuesto(nom,1))
  }
  deletePuesto(id:number){
    const endpoint=`/puesto/delete/${id}`
    return this.checkUrls<PuestoInterface>(endpoint,'PUT','')
  }
  /*-------------------------------------------------------------------------------------*/
  /*------------------------------------EMPLEADOS----------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getEmpleados(){
    const endpoint = `/empleado`;
    return this.checkUrls<EmpleadoInterface>(endpoint,'GET');
  }
  createEmpleado(clave:string,nom:string,username:string,password:string,idP:number){
    const endpoint=`/empleado/create`
    return this.checkUrls<EmpleadoInterface>(endpoint,'POST',
      new AddEmpleado(clave,nom,username,password,idP,1))
  }
  updateEmpleado(clave:string,nom:string,username:string,password:string,idP:number){
    const endpoint=`/empleado/update/${clave}`
    return this.checkUrls<EmpleadoInterface>(endpoint,'PUT',
      new AddEmpleado(clave,nom,username,password,idP,1))
  }
  updatePassword(clave:string,nom:string,username:string,password:string,idP:number){
    const endpoint=`/empleado/update-pass/${clave}`
    return this.checkUrls<EmpleadoInterface>(endpoint,'PUT',
      new AddEmpleado(clave,nom,username,password,idP,1))
  }
  deleteEmpleado(clave:string){
    const endpoint=`/empleado/delete/${clave}`
    return this.checkUrls<EmpleadoInterface>(endpoint,'PUT','')
  }
  /*-------------------------------------------------------------------------------------*/
  /*----------------------------------DETALLES VENTAS------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getProductosByFolio(folio:string){
    const endpoint = `/dv/${folio}`;
    return this.checkUrls<DetalleVentaInterface>(endpoint,'GET');
  }
  addDetalleVenta(dv:AddDetalleVenta[]){
    const endpoint=`/dv/create`
    return this.checkUrls<DetalleVentaInterface>(endpoint,'POST', dv)
  }
  deleteDetalleVenta(id:number){
    const endpoint=`/dv/delete/${id}`
    return this.checkUrls<DetalleVentaInterface>(endpoint,'DELETE')
  }
  /*-------------------------------------------------------------------------------------*/
  /*---------------------------------------VENTAS----------------------------------------*/

  /*-------------------------------------------------------------------------------------*/
  getVentas(){
    const endpoint = `/venta`;
    return this.checkUrls<VentaInterface>(endpoint,'GET');
  }
  getVentasByClave(clave:string){
    const endpoint = `/venta/ver-ventas/${clave}`;
    return this.checkUrls<VentaInterface>(endpoint,'GET');
  }
  createVenta(folio:string,clave:string){
    const endpoint=`/venta/create`
    return this.checkUrls<VentaInterface>(endpoint,'POST',
      new AddVenta(folio,0,clave,1))
  }
  deleteVenta(folio:string){
    const endpoint=`/venta/delete/${folio}`
    return this.checkUrls<VentaInterface>(endpoint,'PUT','')
  }
}
