import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-listar-solicitacao-pagas',
  templateUrl: './listar-solicitacao-pagas.component.html',
  styleUrls: ['./listar-solicitacao-pagas.component.css']
})
export class ListarSolicitacaoPagasComponent implements OnInit {

  solicitacoes: any;

  confirmar = false;

  solicitacaoParaConfirmar: any;

  constructor(
    private usuarioService: UsuarioService,
  ) { }


  ngOnInit() {
    this.listarSolicitacoesPAGAS();

  }

  listarSolicitacoesPAGAS() {
    this.usuarioService.listarSolicitacoesPAGAS().subscribe(solicitacao => this.solicitacoes = solicitacao);
  }

}
