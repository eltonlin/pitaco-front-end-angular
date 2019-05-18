import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PerguntasService {

    url = 'https://fast-ocean-23649.herokuapp.com/';

    constructor(public http: HttpClient) { }

    inserir(pergunta: any): Observable<any> {
        return this.http.post(this.url + '', pergunta);
    }

    listarPergunta(idparam: any): Observable<any> {
        return this.http.get(this.url + 'pergunta/listar_por_questionario/' + idparam);
    }

    atualizar(pergunta: any): Observable<any> {
        return this.http.put(this.url + 'pergunta/atualizar', pergunta);
    }

    deletarPerguntas(pergunta: any): Observable<any> {
        return this.http.delete(this.url + 'pergunta/deletar/' + pergunta);
    }

}
