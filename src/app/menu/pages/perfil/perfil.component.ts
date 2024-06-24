import {Component, OnInit} from '@angular/core';
import {EmpleadoInterface, PuestoInterface} from "../../../Interfaces/producto-interface";
import {AppServiceService} from "../../../app-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
  puestos!:PuestoInterface|any
  pues:number=1
  clave:string=''
  nom!:string
  user!:string
  pass!:string
  editar:boolean=false
  editarPass:boolean=false
  userObject:EmpleadoInterface|any|null=null

  constructor(private service:AppServiceService,private router:Router) {}

  ngOnInit() {
    const user = localStorage.getItem('user')
    this.userObject= JSON.parse(user!)
    console.log(this.userObject)
    this.service.getPuestos().subscribe(
      data=>{
        this.puestos=data
      },error => {
        console.log(error)
      }
    )
  }
  update=(nom:string,user:string,pass:string)=>{
    if(this.editar){
      if(nom===''||user===''){
        alert('Llena todos los campos')
        return;
      }
      console.log('editar')
      this.service.updateEmpleado(this.clave,nom,user,pass,this.pues).subscribe(
        response=>{
          console.log(response)
          localStorage.setItem('user', JSON.stringify(response))
          this.ngOnInit()
        },error => {
          console.log(error)
        }
      )
    }else{
      if(pass===''){
        alert('Llena todos los campos')
        return
      }
      console.log('editar pass')
      this.service.updatePassword(this.clave,this.nom,this.user,this.pass,this.pues).subscribe(
        response=>{
          console.log(response)
          this.ngOnInit()
        },error => {
          console.log(error)
        }
      )
    }
  }
  updateEmpleado=()=>{
    this.clave=this.userObject.clave
    this.nom=this.userObject.nombre
    this.user=this.userObject.username
    this.pues=this.userObject.id_puesto.id
    this.editar=true
    this.editarPass=false
  }
  updatePassword=()=>{
    this.clave=this.userObject.clave
    this.pass=''
    this.editar=false
    this.editarPass=true
  }
  fieldTextType?: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
  closeSession=()=>{
    localStorage.clear()
    this.router.navigate(['/auth/login'])
  }
}
