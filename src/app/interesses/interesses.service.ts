import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interesses } from './interesses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteressesService {

  url = 'https://fast-ocean-23649.herokuapp.com/';

  constructor(public http: HttpClient) { }

  inserir(interesse: Interesses): Observable<any> {
    return this.http.post(this.url + 'interesse_usuario/cadastrar', interesse);
  }

  listarInteresses(): Observable<any> {
    return this.http.get(this.url + 'interesses');
  }

  atualizar(interesse: Interesses): Observable<any> {
    return this.http.put(this.url + 'interesses/atualizar', interesse);
  }

  deletarInteresses(interesse: Interesses): Observable<any> {
    return this.http.put(this.url + 'interesses/deletar', interesse);
  }

}
