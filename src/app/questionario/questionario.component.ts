import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { InteresseService } from './../interesses/interesse.service';
import { EmpresaService } from '../empresa/empresa.service';
import { Empresas } from './../empresa/empresas';
import { Interesses } from './../interesses/interesses';
import { QuestionarioService } from './questionario.service';

@Component({
  selector: 'app-questionario',
  templateUrl: './questionario.component.html',
  styleUrls: ['./questionario.component.css']
})
export class QuestionarioComponent implements OnInit {

  constructor(
    private titleService: Title,
    private interesseService: InteresseService,
    private empresaService: EmpresaService,
    private questionarioService: QuestionarioService
  ) {
    this.titleService.setTitle('Pitaco Questionário');
  }


  questionario = {
    descricao_questionario: '',
    empresa_cnpj: '',
    pontuacao_questionario: '',
    login_master: localStorage.getItem('login_master'),
    id_interesse: '',
    perguntas: [
      {
        descricao_pergunta: '',
        tipo_pergunta: '',
        opcoes: [
          {
            descricao_opcao: ''
          }
        ]
      }
    ]
  };
  messageCadastrar: string;

  empresas: Empresas;

  interesses: Interesses[];

  sucesso;

  erro;

  ngOnInit() {
    this.interesseService.listarInteresses()
      .subscribe(interesses => this.interesses = interesses);

    this.empresaService.listarEmpresas()
      .subscribe(empresas => this.empresas = empresas);
  }

  cadastrar() {
    this.questionarioService.cadastrarQuestionario(this.questionario).subscribe(
      response => {
        this.sucesso = true;
        this.messageCadastrar = response.message;
        setTimeout(() => {
          this.sucesso = false;
        }, 3000);
      },
      error => {
        this.erro = true;
        this.messageCadastrar = error.error.message;
        setTimeout(() => {
          this.erro = false;
        }, 3000);
      }
    );
  }

  adicionarPergunta() {
    this.questionario.perguntas.push( {
      descricao_pergunta: '',
      tipo_pergunta: '',
      opcoes: [
        {
          descricao_opcao: ''
        }
      ]
    });
  }

  adicionarOpcao(pergunta: any) {
    pergunta.opcoes.push( {
      descricao_opcao: ''
    });
  }

  removerOpcao(pergunta: any, i: number) {
    pergunta.opcoes.splice(i, 1);
  }

  removerPergunta(questionario: any, i: number) {
    questionario.perguntas.splice(i, 1);
  }
}
