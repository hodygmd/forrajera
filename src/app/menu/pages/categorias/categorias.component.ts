import {Component, OnInit} from '@angular/core';
import {CategoriaInterface, MrcFncnInterface} from "../../../Interfaces/producto-interface";
import {AppServiceService} from "../../../app-service.service";

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit{
  categorias?:CategoriaInterface|any
  funciones?:MrcFncnInterface|any
  func: number=1;
  id!:number
  nom!:string
  editar:boolean=false
  textButtonSubmit:string='Add'
  constructor(private service: AppServiceService) {
  }
  ngOnInit(): void {
    this.service.getCategorias().subscribe(
      data=>{
        this.categorias=data
      }
    )
    this.service.getFunciones().subscribe(
      data=>{
        this.funciones=data
      }
    )
  }
  createCategoria(nom:string){
    if(nom===''){
      alert('Llena todos los campos')
    }else{
      if(!this.editar){
        this.service.createCategoria(nom,this.func).subscribe(
          reponse=>{
            console.log(reponse)
            this.ngOnInit()
          },error => {
            console.log(error)
          }
        )
      }else{
        this.service.updateCategoria(this.id,nom,this.func).subscribe(
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
  updateCategoria(index:number){
    this.id=this.categorias[index].id
    this.nom=this.categorias[index].nombre
    this.func=this.categorias[index].id_funcion.id
    this.editar=true
    this.textButtonSubmit='Edit'
  }
  deleteCategoria(id:number){
    this.service.deleteCategoria(id).subscribe(
      response=>{
        console.log('borrado')
        this.ngOnInit()
      },error => {
        console.log(error)
      }
    )
  }
  setNull(){
    this.nom=''
    this.func=1
    this.editar=false
    this.textButtonSubmit='Add'
  }
}
