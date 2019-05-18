import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioMaster } from './../login/usuarioMaster';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://nameless-island-83115.herokuapp.com/';

  constructor(public http: HttpClient) { }

  listarUsuarios(): Observable<any> {
    return this.http.get(this.url + 'usuario_final');
  }

  cadastrarUsuario(usuarioMaster: UsuarioMaster): Observable<any> {
    return this.http.post(this.url + 'usuario_master', usuarioMaster);
  }
}
