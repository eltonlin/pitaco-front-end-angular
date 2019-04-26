import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = 'http://localhost:3000/';

  constructor(public http: HttpClient) { }

  listarUsuarios(): Observable<any> {
    return this.http.get(this.url + 'usuario_final');
  }
}
