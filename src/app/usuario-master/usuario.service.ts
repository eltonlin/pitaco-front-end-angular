import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioMaster } from './../login/usuarioMaster';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'https://fast-ocean-23649.herokuapp.com/';

  constructor(public http: HttpClient) { }

  listarUsuarios(): Observable<any> {
    return this.http.get(this.url + 'usuario_final');
  }

  listarSolicitacoesNaoPAGAS(): Observable<any> {
    return this.http.get(this.url + 'solicita_pagamento/listar');
  }

  cadastrarUsuario(usuarioMaster: UsuarioMaster): Observable<any> {
    return this.http.post(this.url + 'usuario_master', usuarioMaster);
  }
}
