import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class RestapiService {

private urlEndPoint: string = 'http://localhost:8080/api/login'; 

  constructor(private http:HttpClient) { }

login(username:string,password:string){
  const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
  return this.http.get(this.urlEndPoint,{headers,responseType: 'text' as 'json'})
}

}
