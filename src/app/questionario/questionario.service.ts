import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionarioService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000/';

  cadastrarQuestionario(questionario: any): Observable<any> {
    return this.http.post(this.url + 'questionario', questionario);
  }
}
