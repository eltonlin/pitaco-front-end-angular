import { Component, OnInit } from '@angular/core';
import { QuestionarioService } from './../questionario.service';
import { Router } from '@angular/router';
import { InteresseService } from 'src/app/interesses/interesse.service';
import { Interesses } from 'src/app/interesses/interesses';

@Component({
  selector: 'app-listar-questionarios',
  templateUrl: './listar-questionarios.component.html',
  styleUrls: ['./listar-questionarios.component.css']
})
export class ListarQuestionariosComponent implements OnInit {

  constructor(
    private questionarioService: QuestionarioService,
    private router: Router,
    private interesseService: InteresseService
  ) { }

  questionario = {
    id_questionario: Number,
    descricao_questionario: String,
    pontuacao_questionario: Number,
    login_master: String,
    razao_social: String,
    id_interesse: Number,
    interesse_descricao: ''
  };
  message = String;
  sucesso = false;
  erro = false;
  delete = false;
  update = false;
  interesses: Interesses[];

  questionarios;

  ngOnInit() {
    this.interesseService.listarInteresses()
      .subscribe(interesses => { this.interesses = interesses; console.log(this.interesses); });
    this.questionarioService.consultarQuestionario().subscribe(questionario => { console.log(questionario) ;
                                                                                 this.questionarios = questionario; } );
  }

  detalhar(questionario) {
    this.router.navigate(['/home/questionario-detalhe',
      { id: questionario.id_questionario, questionario: questionario.descricao_questionario }]);
  }

  perguntas(questionario) {
    this.router.navigate(['/home/listar-perguntas', { id: questionario.id_questionario }]);
  }

  atualizar(res) {
    this.questionarioService.editarQuestionario(res).subscribe(
      result => {
        this.sucesso = true;
        this.questionarios.filter(questionario => {
          if (res.id_questionario === questionario.id_questionario ) {
            questionario.descricao_questionario = res.descricao_questionario;
            questionario.pontuacao_questionario = res.pontuacao_questionario;
            questionario.id_interesse = res.id_interesse;
            questionario.descricao_interesse = res.descricao_interesse;
          }
        });

        this.message = result.message;

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
    this.questionarioService.deletarQuestionario(res.id_questionario).subscribe(
      result => {
        this.sucesso = true;
        this.questionarios = this.questionarios.filter(questionario => questionario.id_questionario !== res.id_questionario);
        setTimeout(() => {
          this.sucesso = false;
        }, 3000);
        this.message = result.message;
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

  editar(res) {
    this.setQuestionario(res);
    console.log(this.questionario);
    this.update = true;
  }

  apagar(res) {
    this.setQuestionario(res);
    this.delete = true;
  }

  setQuestionario(questionario) {
    this.questionario.id_questionario = questionario.id_questionario;
    this.questionario.descricao_questionario = questionario.descricao_questionario;
    this.questionario.pontuacao_questionario = questionario.pontuacao_questionario;
    this.questionario.interesse_descricao = questionario.interesse_descricao;
    this.questionario.id_interesse = questionario.id_interesse;
  }

  onChange(idInteresse) {
    this.questionario.id_interesse = idInteresse;
    for (const interesse of this.interesses) {
      console.log(interesse.id_interesse);
      if (interesse.id_interesse == idInteresse ) {
        this.questionario.interesse_descricao = interesse.descricao;
      }
    }
  }
}
