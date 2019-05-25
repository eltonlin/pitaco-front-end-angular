import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PerguntasService } from '../perguntas.service';

@Component({
  selector: 'app-listar-perguntas',
  templateUrl: './listar-perguntas.component.html',
  styleUrls: ['./listar-perguntas.component.css']
})
export class ListarPerguntasComponent implements OnInit {

  constructor(
    private perguntasService: PerguntasService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  id: string;
  pergunta = {
    id_pergunta: Number,
    descricao_pergunta: String,
    tipo_pergunta: String,
    id_questionario: Number
  };
  message = String;
  sucesso = false;
  erro = false;
  delete = false;
  update = false;
  perguntas;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.listarPerguntas();
  }

  listarPerguntas() {
    this.perguntasService.listarPergunta(this.id).subscribe(perguntas => this.perguntas = perguntas);
  }

  atualizar(res) {
    console.log(res);
    this.perguntasService.atualizar(res).subscribe(
      result => {
        this.sucesso = true;
        this.message = result.message;
        this.perguntas.filter(pergunta => {
          if (pergunta.id_pergunta === res.id_pergunta) {
            pergunta.descricao_pergunta = res.descricao_pergunta;
            pergunta.tipo_pergunta = res.tipo_pergunta;
          }
        });
        setTimeout(() => {
          this.sucesso = false;
        }, 3000);

      },
      error => {
        this.message = error.error.message;
        this.erro = true;
        setTimeout(() => {
          this.erro = false;
        }, 3000);
      }
    );
    this.update = false;
  }

  deletar(res) {
    console.log(res);
    this.perguntasService.deletarPerguntas(res.id_pergunta).subscribe(
      result => {
        this.sucesso = true;
        this.perguntas = this.perguntas.filter(pergunta => pergunta.id_pergunta !== res.id_pergunta);
        setTimeout(() => {
          this.sucesso = false;
        }, 3000);

      },
      error => {
        this.message = error.error.message;
        this.erro = true;
        setTimeout(() => {
          this.erro = false;
        }, 3000);
      }
    );
    this.delete = false;
  }

  apagar(res) {
    this.setPergunta(res);
    this.delete = true;
  }

  editar(res) {
    this.setPergunta(res);
    this.update = true;
  }

  opcoes(pergunta) {
    this.router.navigate(['/home/opcao', { id: pergunta.id_pergunta }]);
  }

  setPergunta(pergunta) {
    this.pergunta.id_pergunta = pergunta.id_pergunta;
    this.pergunta.descricao_pergunta = pergunta.descricao_pergunta;
    this.pergunta.id_questionario = pergunta.id_questionario;
    this.pergunta.tipo_pergunta = pergunta.tipo_pergunta;
  }

}
