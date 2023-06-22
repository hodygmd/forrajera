import {Component, OnInit} from '@angular/core';
import {EmpleadoInterface, PuestoInterface} from "../../../Interfaces/producto-interface";
import {AppServiceService} from "../../../app-service.service";

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit{
  empleados!:EmpleadoInterface|any
  puestos!:PuestoInterface|any
  pues:number=1
  clave:string='empl'
  nom!:string
  editar:boolean=false
  textButtonSubmit:string='Add'
  constructor(private service:AppServiceService) {}

  ngOnInit(): void {
    this.service.getEmpleados().subscribe(
      data=>{
        this.empleados=data
      },error => {
        console.log(error)
      }
    )
    this.service.getPuestos().subscribe(
      data=>{
        this.puestos=data
      },error => {
        console.log(error)
      }
    )
  }

  createEmpleado(nom: string) {
    if(nom===''){
      alert('Llena todos los campos')
    }else{
      if(!this.editar){
        const date = new Date();
        const random = Math.random();
        const timestamp = date.getTime();
        const randomWithTimestamp = random * timestamp;
        this.clave += Math.floor(randomWithTimestamp) % 10000000;
        console.log(this.clave)
        this.service.createEmpleado(this.clave,nom,this.pues).subscribe(
          response=>{
            console.log(response)
            this.ngOnInit()
          },error => {
            console.log(error)
          }
        )
      }else {
        this.service.updateEmpleado(this.clave,nom,this.pues).subscribe(
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

  updateEmpleado(index: number) {
    this.clave=this.empleados[index].clave
    this.nom=this.empleados[index].nombre
    this.pues=this.empleados[index].id_puesto.id
    this.editar=true
    this.textButtonSubmit='Edit'
  }

  deleteEmpleado(clave: string) {
    this.service.deleteEmpleado(clave).subscribe(
      response=>{
        console.log("borrado")
        this.ngOnInit()
      },error => {
        console.log(error)
      }
    )
  }

  setNull() {
    this.clave='empl'
    this.nom=''
    this.pues=1
    this.editar=false
    this.textButtonSubmit='Add'
  }
}
