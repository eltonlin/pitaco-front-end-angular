/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Interesses } from './interesses';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteressesService {

  url: string = 'http://localhost:3000/';

  constructor(public http: HttpClient) { }

 inserir(interesses: Interesses): Observable<any>{
   return this.http.post(this.url + 'interesses', interesses )
 }
}*/
