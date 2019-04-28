import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresas } from './empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  url = 'http://localhost:3000/';

  constructor(public http: HttpClient) { }

  listarEmpresas(): Observable<any> {
    return this.http.get(this.url + 'empresas');
  }

  inserir(empresa: Empresas): Observable<any> {
    return this.http.post(this.url + 'empresas', empresa );
  }

}
