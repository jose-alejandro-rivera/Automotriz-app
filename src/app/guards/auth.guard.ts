import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginComponent } from '../login/login.component';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private loginComponent: LoginComponent, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    var message ="false";
    message=localStorage.getItem("message");
    
    if (message==="true") {
      return true;
    }else if(message===null){
      this.router.navigate(['/login']);
      return false;
    }else{
      this.router.navigate(['/login']);
      return false;
    }

  }
}
