import { Component,OnInit } from '@angular/core';
import {MrcFncnInterface} from "../../../Interfaces/producto-interface";
import {AppServiceService} from "../../../app-service.service";
import * as repl from "repl";

@Component({
  selector: 'app-marcas',
  templateUrl: './marcas.component.html',
  styleUrls: ['./marcas.component.css']
})
export class MarcasComponent implements OnInit{
  marcas?:MrcFncnInterface|any
  id!:number
  nom!:string
  desc!:string
  editar:boolean=false
  textButtonSubmit:string='Add'
  constructor(private service: AppServiceService) {
  }

  ngOnInit(): void {
    this.service.getMarcas().subscribe(
      data=>{
        this.marcas=data
      },error => {
        console.log(error)
      }
    )
  }
  createMarca(nom:string,desc:string){
    if(nom===''||desc===''){
      alert('Llena todos los campos')
    }else{
      if(!this.editar){
        this.service.createMarca(nom,desc).subscribe(
          reponse=>{
            console.log(reponse)
            this.ngOnInit()
          },error => {
            console.log(error)
          }
        )
      }else{
        this.service.updateMarca(this.id,nom,desc).subscribe(
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
  updateMarca(index:number){
    this.id=this.marcas[index].id
    this.nom=this.marcas[index].nombre
    this.desc=this.marcas[index].descripcion
    this.editar=true
    this.textButtonSubmit='Edit'
  }
  deleteMarca(id:number){
    this.service.deleteMarca(id).subscribe(
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
    this.desc=''
    this.editar=false
    this.textButtonSubmit='Add'
  }
}
