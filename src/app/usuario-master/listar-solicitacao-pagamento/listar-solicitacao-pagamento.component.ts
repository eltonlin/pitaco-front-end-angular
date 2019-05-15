import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario.service';


@Component({
  selector: 'app-listar-solicitacao-pagamento',
  templateUrl: './listar-solicitacao-pagamento.component.html',
  styleUrls: ['./listar-solicitacao-pagamento.component.css']
})
export class ListarSolicitacaoPagamentoComponent implements OnInit {

  constructor(
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit() {
  }

}
