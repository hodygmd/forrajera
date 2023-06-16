import {Component, OnInit} from '@angular/core';
import {AppServiceService} from "../../../app-service.service";
import {UnidadMedidaInterface} from "../../../Interfaces/producto-interface";

@Component({
  selector: 'app-presentaciones',
  templateUrl: './presentaciones.component.html',
  styleUrls: ['./presentaciones.component.css']
})
export class PresentacionesComponent implements OnInit{
  presentaciones?:PresentacionesComponent|any
  unidades?:UnidadMedidaInterface|any
  uni: number=1;
  id!:number
  nom!:string
  desc!:string
  med!:string
  editar:boolean=false
  textButtonSubmit:string='Add'
  constructor(private service: AppServiceService) {
  }

  ngOnInit(): void {
    this.service.getPresentaciones().subscribe(
      data=>{
        this.presentaciones=data
      },error => {
        console.log(error)
      }
    )
    this.service.getUnidadesMedida().subscribe(
      data=>{
        this.unidades=data
      },error => {
        console.log(error)
      }
    )
  }
  createPresentacion(nom:string,desc:string,med:number){
    if(nom===''||desc===''||med===null){
      alert('Llena todos los campos')
    }else{
      if(!this.editar){
        this.service.createPresentacion(nom,desc,this.uni,med).subscribe(
          reponse=>{
            console.log(reponse)
            this.ngOnInit()
          },error => {
            console.log(error)
          }
        )
      }else{
        this.service.updatePresentacion(this.id,nom,desc,this.uni,med).subscribe(
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
  updatePresentacion(index:number){
    this.id=this.presentaciones[index].id
    this.nom=this.presentaciones[index].nombre
    this.desc=this.presentaciones[index].descripcion
    this.uni=this.presentaciones[index].id_unidad_medida.id
    this.med=this.presentaciones[index].medida
    this.editar=true
    this.textButtonSubmit='Edit'
  }
  deletePresentacion(id:number){
    this.service.deletePresentacion(id).subscribe(
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
    this.med=''
    this.uni=1
    this.editar=false
    this.textButtonSubmit='Add'
  }

  protected readonly parseFloat = parseFloat;
}
