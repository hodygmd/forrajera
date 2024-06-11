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
export interface EmpleadoInterface{
  clave:string
  nombre:string
  username:string
  password:string
  id_puesto:PuestoInterface
  status:number
}
export interface PuestoInterface{
  id:number
  nombre:string
  status:number
}
export interface VentaInterface{
  folio:string
  fecha:string
  total:number
  clave_empleado:EmpleadoInterface
  status:number
}
export interface DetalleVentaInterface{
  id:number
  folio_v:VentaInterface
  clave_producto:ProductoInterface
  cantidad:number
  precio:number
}
