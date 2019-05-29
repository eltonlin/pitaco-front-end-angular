import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-listar-solicitacao-pagamento',
  templateUrl: './listar-solicitacao-pagamento.component.html',
  styleUrls: ['./listar-solicitacao-pagamento.component.css']
})
export class ListarSolicitacaoPagamentoComponent implements OnInit {

  solicitacoes: any;

  confirmar = false;

  solicitacaoParaConfirmar: any;

  constructor(
    private usuarioService: UsuarioService,
  ) { }


  ngOnInit() {
    this.listarSolicitacoesNaoPAGAS();

  }

  listarSolicitacoesNaoPAGAS() {
    this.usuarioService.listarSolicitacoesNaoPAGAS().subscribe(solicitacao => this.solicitacoes = solicitacao);
  }

  confirmarPagamento() {
    this.usuarioService.atualizarSolicitacaoParaPaga(this.solicitacaoParaConfirmar)
      .subscribe(
        sucess => {
          this.confirmar = !this.confirmar;
          this.solicitacoes = this.solicitacoes.filter(solicitacao => +solicitacao.id_solicitacao
            !== this.solicitacaoParaConfirmar.id_solicitacao);
        },
        error => {
        }
      );
  }

  openModal(solicitacao: any) {
    this.confirmar = !this.confirmar;
    this.solicitacaoParaConfirmar = solicitacao;
  }
}
