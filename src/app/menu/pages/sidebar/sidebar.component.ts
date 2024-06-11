import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  clave:string|null=null
  constructor(private router: Router) {}
  ngOnInit() {
    this.clave=localStorage.getItem('clave')
    //this.clave?console.log('clave',this.clave):console.log('clave',this.clave)
    if(!this.clave){
      this.router.navigate(['/auth/login'])
    }
  }
  closeSession=()=>{
    localStorage.clear()
    this.router.navigate(['/auth/login'])
  }
  protected readonly localStorage = localStorage;
}
