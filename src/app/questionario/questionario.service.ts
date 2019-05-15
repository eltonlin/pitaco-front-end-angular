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

  consultarQuestionario(): Observable<any> {
    return this.http.get(this.url + 'questionario');
  }

  editarQuestionario(res): Observable<any> {
    return this.http.put(this.url + 'questionario/atualizar', res);
  }

  deletarQuestionario(res): Observable<any> {
    return this.http.delete(this.url + 'questionario/deletar/' + res);
  }

  consultarPerguntasDoQuestionario(id: string, params: any): Observable<any> {
    return this.http.post(this.url + `questionario/${id}/detalhe`, params);
  }

  consultarQuantidadeRespostasPorQuestionario(idQuestionario: string): Observable<any> {
    return this.http.get(this.url + `resposta/quantidade_por_questionario/${idQuestionario}`);
  }

  retornarEstados() {
    return this.http.get('https://raw.githubusercontent.com/wgenial/br-cidades-estados-json/master/estados.json');
  }

  retornaCidades(estado: string) {
    return this.http.get(`https://raw.githubusercontent.com/wgenial/br-cidades-estados-json/master/cidades/${estado}.json` );
  }
}
