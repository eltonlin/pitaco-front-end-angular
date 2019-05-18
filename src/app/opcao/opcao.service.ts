import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OpcoesService {

    url = 'https://fast-ocean-23649.herokuapp.com/';

    constructor(public http: HttpClient) { }

    inserir(opcao: any): Observable<any> {
        return this.http.post(this.url + 'opcao', opcao);
    }

    listarOpcoes(id: any): Observable<any> {
        return this.http.get(this.url + 'pergunta/' + id + '/opcao');
    }

    atualizar(opcao: any): Observable<any> {
        return this.http.put(this.url + 'opcao/atualizar', opcao);
    }

    deletarOpcoes(id: any): Observable<any> {
        return this.http.delete(this.url + 'opcao/deletar/' + id);
    }

}
