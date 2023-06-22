import {Component, OnInit} from '@angular/core';
import {AppServiceService} from "../../../app-service.service";
import {
  CategoriaInterface,
  MrcFncnInterface,
  PresentacionInterface,
  ProductoInterface
} from "../../../Interfaces/producto-interface";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']

})
export class ProductosComponent implements OnInit {
  productos?: ProductoInterface | any
  categorias?:CategoriaInterface|any
  presentaciones?:PresentacionInterface|any
  marcas?:MrcFncnInterface|any
  cat: number=1;
  pres: number=1;
  marc: number=1;
  clave: string='prod';
  nom!:string
  desc!:string
  prec!:string
  stmin!:string
  stmax!:string
  exis!:string
  editar:boolean=false
  textButtonSubmit:string='Add'
  constructor(private service: AppServiceService) {
  }

  ngOnInit(): void {
    this.service.getProductos().subscribe(
      data => {
        this.productos = data
      },
      error => {
        console.log('Error fetching products:', error)
      }
    )
    this.service.getCategorias().subscribe(
      data => {
        this.categorias = data
      },
      error => {
        console.log('Error fetching products:', error)
      }
    )
    this.service.getPresentaciones().subscribe(
      data => {
        this.presentaciones = data
      },
      error => {
        console.log('Error fetching products:', error)
      }
    )
    this.service.getMarcas().subscribe(
      data => {
        this.marcas = data
      },
      error => {
        console.log('Error fetching products:', error)
      }
    )
  }

  createProducto(nom:string,desc:string,pre:number,stmin:number,stmax:number,exis:number){
    if(nom===''||desc===''||pre===null||stmin===null||stmax===null||exis===null){
      alert('Llena todos los campos')
    }else {
      if(!this.editar){
        const date = new Date();
        const random = Math.random();
        const timestamp = date.getTime();
        const randomWithTimestamp = random * timestamp;
        this.clave += Math.floor(randomWithTimestamp) % 10000000;
        console.log(this.clave)
        this.service.createProducto(this.clave,nom,desc,pre,stmin,stmax,exis,this.cat,this.pres,this.marc).subscribe(
          reponse=>{
            console.log(reponse)
            this.ngOnInit()
          },error => {
            console.log(error)
          }
        )
      }else {
        this.service.updateProducto(this.clave,nom,desc,pre,stmin,stmax,exis,this.cat,this.pres,this.marc).subscribe(
          response=>{
            console.log(response)
            this.ngOnInit()
          },error => {
            console.log(error)
          }
        )
      }
    }
  }
  updateProducto(index:number){
    this.clave=this.productos[index].clave
    this.nom=this.productos[index].nombre
    this.desc=this.productos[index].descripcion
    this.prec=this.productos[index].precio
    this.stmin=this.productos[index].stock_min
    this.stmax=this.productos[index].stock_max
    this.exis=this.productos[index].existencias
    this.cat=this.productos[index].id_categoria.id
    this.pres=this.productos[index].id_presentacion.id
    this.marc=this.productos[index].id_marca.id
    this.editar=true
    this.textButtonSubmit='Edit'
  }
  deleteProducto(clave:string){
    this.service.deleteProducto(clave).subscribe(
      response=>{
        console.log("borrado")
        this.ngOnInit()
      },error => {
        console.log(error)
      }
    )
  }

  protected readonly parseInt = parseInt;
  protected readonly parseFloat = parseFloat;
  setNull(){
    this.clave='prod'
    this.nom=''
    this.desc=''
    this.prec=''
    this.stmin=''
    this.stmax=''
    this.exis=''
    this.cat=1
    this.pres=1
    this.marc=1
    this.editar=false
    this.textButtonSubmit='Add'
  }
}
