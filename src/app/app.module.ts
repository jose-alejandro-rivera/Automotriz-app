import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent} from './footer/footer.component';
import { NextprodComponent } from './nextprod/nextprod.component';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './productos/form.component';
import { FormsModule } from '@angular/forms';
import { ProductosComponent } from './productos/productos.component'
import { ProductoService } from './productos/producto.service';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { RestapiService } from './login/restapi.service';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'inicio', component: InicioComponent,canActivate:[AuthGuard]},
  {path: 'nextprod', component: NextprodComponent,canActivate:[AuthGuard]},
  {path: 'productos', component: ProductosComponent,canActivate:[AuthGuard]},
  {path: 'productos/form', component: FormComponent,canActivate:[AuthGuard]},
  {path: 'productos/form/:id', component: FormComponent,canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NextprodComponent,
    FormComponent,
    ProductosComponent,
    InicioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [RestapiService,LoginComponent,AuthGuard,ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
