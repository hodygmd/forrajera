import {Component, OnInit} from '@angular/core';
import {MrcFncnInterface, UnidadMedidaInterface} from "../../../Interfaces/producto-interface";
import {AppServiceService} from "../../../app-service.service";

@Component({
  selector: 'app-funciones',
  templateUrl: './funciones.component.html',
  styleUrls: ['./funciones.component.css']
})
export class FuncionesComponent implements OnInit{
  funciones?:MrcFncnInterface|any
  id!:number
  nom!:string
  desc!:string
  editar:boolean=false
  textButtonSubmit:string='Add'
  constructor(private service: AppServiceService) {
  }
  ngOnInit(): void {
    this.service.getFunciones().subscribe(
      data=>{
        this.funciones=data
      },error => {
        console.log(error)
      }
    )
  }
  createFuncion(nom:string,desc:string){
    if(nom===''||desc===''){
      alert('Llena todos los campos')
    }else{
      if(!this.editar){
        this.service.createFuncion(nom,desc).subscribe(
          reponse=>{
            console.log(reponse)
            this.ngOnInit()
          },error => {
            console.log(error)
          }
        )
      }else{
        this.service.updateFuncion(this.id,nom,desc).subscribe(
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
  updateFuncion(index:number){
    this.id=this.funciones[index].id
    this.nom=this.funciones[index].nombre
    this.desc=this.funciones[index].descripcion
    this.editar=true
    this.textButtonSubmit='Edit'
  }
  deleteFuncion(id:number){
    this.service.deleteFuncion(id).subscribe(
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
