import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsuarioMaster } from './usuarioMaster';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService 
{
  url: string = 'http://localhost:3000/';

  constructor(public http: HttpClient) { }

  logar(usuario: UsuarioMaster): Observable<any>{
    return this.http.post(this.url + 'usuario_master/login', usuario);
  }

}
