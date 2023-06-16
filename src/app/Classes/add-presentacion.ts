export class AddPresentacion {
  constructor(
    public nombre: string,
    public descripcion: string,
    public id_unidad_medida: number,
    public medida: number,
    public status: number
  ) {
  }
}
