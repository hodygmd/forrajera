import {Component, OnInit} from '@angular/core';
import {AppServiceService} from "../../../app-service.service";
import {PuestoInterface} from "../../../Interfaces/producto-interface";

@Component({
  selector: 'app-puestos',
  templateUrl: './puestos.component.html',
  styleUrls: ['./puestos.component.css']
})
export class PuestosComponent implements OnInit{
  puestos!:PuestoInterface|any
  id!:number
  nom!:string
  editar:boolean=false
  textButtonSubmit:string='Add'

  constructor(private service:AppServiceService) {
  }
  ngOnInit(): void {
    this.service.getPuestos().subscribe(
      data=>{
        this.puestos=data
      },error => {
        console.log(error)
      }
    )
  }

  createProducto(nom: string) {
    if(nom===''){
      alert('Llena todos los campos')
    }else{
      if(!this.editar){
        this.service.createPuesto(nom).subscribe(
          reponse=>{
            console.log(reponse)
            this.ngOnInit()
          },error => {
            console.log(error)
          }
        )
      }else{
        this.service.updatePuesto(this.id,nom).subscribe(
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

  updateProducto(index: number) {
    this.id=this.puestos[index].id
    this.nom=this.puestos[index].nombre
    this.editar=true
    this.textButtonSubmit='Edit'
  }

  deleteProducto(id:number) {
    this.service.deletePuesto(id).subscribe(
      response=>{
        console.log('borrado')
        this.ngOnInit()
      },error => {
        console.log(error)
      }
    )
  }
  setNull() {
    this.nom=''
    this.editar=false
    this.textButtonSubmit='Add'
  }
}
