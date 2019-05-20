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

constructor(
    private usuarioService: UsuarioService,
  ) { }


ngOnInit() {
    this.listarSolicitacoesNaoPAGAS();

  }

listarSolicitacoesNaoPAGAS() {
    this.usuarioService.listarSolicitacoesNaoPAGAS().subscribe(solicitacao => this.solicitacoes = solicitacao);

  }

confirmarPagamento(res) {
    this.solicitacoes = res;
    this.confirmar = true;
  }
}
