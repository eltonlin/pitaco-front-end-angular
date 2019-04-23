import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService 
{
  url: string = 'http://localhost:3000/';

  constructor(public http: HttpClient) { }

  listarEmpresas(): Observable<any>{
    return this.http.get(this.url + 'empresas');
  }

}
