import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PerguntasService {

    url = 'http://localhost:3000/';

    constructor(public http: HttpClient) { }

    inserir(pergunta: any): Observable<any> {
        return this.http.post(this.url + '', pergunta);
    }

    listarPergunta(idparam: any): Observable<any> {
        return this.http.get(this.url + 'pergunta/listar_por_questionario/' + idparam);
    }

    atualizar(pergunta: any): Observable<any> {
        return this.http.put(this.url + '', pergunta);
    }

    deletarPerguntas(pergunta: any): Observable<any> {
        return this.http.put(this.url + '', pergunta);
    }

}
