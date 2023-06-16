export interface ProductoInterface {
  clave:string
  nombre:string
  descripcion:string
  precio:number
  stock_min:number
  stock_max:number
  existencias:number
  id_categoria:CategoriaInterface
  id_presentacion:PresentacionInterface
  id_marca:MrcFncnInterface
  status:number
}
export interface PresentacionInterface{
  id:number
  nombre:string
  descripcion:string
  id_unidad_medida:UnidadMedidaInterface
  medida:number
  status:number
}
export interface MrcFncnInterface{
  id:number
  nombre:string
  descripcion:string
  status:number
}
export interface CategoriaInterface{
  id:number
  nombre:string
  id_funcion:MrcFncnInterface
  status:number
}
export interface UnidadMedidaInterface{
  id:number
  unidad:string
  status:number
}
