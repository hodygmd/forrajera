import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {
  CategoriaInterface,
  MrcFncnInterface,
  PresentacionInterface,
  ProductoInterface, UnidadMedidaInterface
} from "./Interfaces/producto-interface";
import {AddProducto} from "./Classes/add-producto";
import {AddMrcfncn} from "./Classes/add-mrcfncn";
import {AddCategoria} from "./Classes/add-categoria";
import {AddPresentacion} from "./Classes/add-presentacion";
import {AddUnidadMedida} from "./Classes/add-unidad-medida";

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
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
    return this.http.get<CategoriaInterface>(`${this.baseUrl}/categoria`)
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
}
