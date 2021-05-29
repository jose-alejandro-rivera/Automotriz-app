import { Component, OnInit } from '@angular/core';
import { RestapiService } from './restapi.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: any;
  title: string='Automotriz';

  constructor(private service: RestapiService,private router:Router) { }

  ngOnInit() {
  }

  doLogin() {
    let resp = this.service.login(this.username, this.password);
    localStorage.setItem("usuarioSession",this.username)
    resp.subscribe(data => {
      this.message = data;
      localStorage.setItem("message", String(this.message));
     this.router.navigate(["/inicio"])
    });
  }

}
