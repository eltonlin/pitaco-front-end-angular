import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresas } from './empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  url = 'https://fast-ocean-23649.herokuapp.com/';

  constructor(public http: HttpClient) { }

  listarEmpresas(): Observable<any> {
    return this.http.get(this.url + 'empresas');
  }

  inserir(empresa: Empresas): Observable<any> {
    return this.http.post(this.url + 'empresas', empresa);
  }

  atualizar(empresa: Empresas): Observable<any> {
    return this.http.put(this.url + 'empresas/atualizar', empresa);
  }

  deletar(empresa: Empresas): Observable<any> {
    return this.http.put(this.url + 'empresas/deletar', empresa);
  }

}
