import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interesses } from './interesses';

@Injectable({
  providedIn: 'root'
})
export class InteresseService {

  url = 'https://fast-ocean-23649.herokuapp.com/';

  constructor(public http: HttpClient) { }

  listarInteresses(): Observable<Interesses[]> {
    return this.http.get<Interesses[]>(this.url + 'interesses');
  }

}
