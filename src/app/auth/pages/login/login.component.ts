import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AppServiceService} from "../../../app-service.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  clave:string|null=null
  constructor(private service: AppServiceService, private router: Router) {
  }
  ngOnInit(): void {
    this.clave=localStorage.getItem('clave')
    if(this.clave){
      this.router.navigate(['/menu/productos'])
    }
  }

  sesion(username: string, password: string) {
    if (username == "" || password == "") {
      alert("INGRESAR")
    }else {
      this.service.auth(username, password).subscribe((data: any) => {
        console.log(data)
        if (data) {
          localStorage.setItem('user', JSON.stringify(data))
          localStorage.setItem('clave', data.clave)
          this.router.navigate(['/menu/sidebar'])
        } else {
          alert('Usuario o contraseña incorrectos')
        }
      })
    }
  }
  fieldTextType?: boolean;

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
