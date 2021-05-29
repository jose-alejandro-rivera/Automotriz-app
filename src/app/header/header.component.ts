import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
 title: string = 'Automotriz'

 constructor(private router: Router){}

 doLogOut(){
   localStorage.setItem("message",null);
   this.router.navigate(['/login']);

 }

}
