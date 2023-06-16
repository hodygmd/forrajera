export class AddProducto {
  constructor(
    public clave: string,
    public nombre: string,
    public descripcion: string,
    public precio: number,
    public stock_min: number,
    public stock_max: number,
    public existencias: number,
    public id_categoria: number,
    public id_presentacion: number,
    public id_marca: number,
    public status: number,
  ) {
  }
}
