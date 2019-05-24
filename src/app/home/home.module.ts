import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { EmpresaComponent } from '../empresa/empresa.component';
import { QuestionarioComponent } from '../questionario/questionario.component';
import { InteressesComponent } from '../interesses/interesses.component';
import { UsuarioMasterComponent } from '../usuario-master/usuario-master.component';
import { PerguntasComponent } from '../perguntas/perguntas.component';
import { ApresentacaoComponent } from '../apresentacao/apresentacao.component';
import { ListarEmpresasComponent } from '../empresa/listar-empresas/listar-empresas.component';
import { HeaderAjudaComponent } from '../header-ajuda/header-ajuda.component';
import { ListarInteressesComponent } from '../interesses/listar-interesses/listar-interesses.component';
import { ListarPerguntasComponent } from '../perguntas/listar-perguntas/listar-perguntas.component';
import { ListarQuestionariosComponent } from '../questionario/listar-questionarios/listar-questionarios.component';
import { ListarUsuariosMasterComponent } from '../usuario-master/listar-usuarios-master/listar-usuarios-master.component';
import { HomeComponent } from './home.component';
import { ClarityModule } from '@clr/angular';
import { DetalheQuestionarioComponent } from '../questionario/detalhe-questionario/detalhe-questionario.component';
import { OpcaoComponent } from '../opcao/opcao.component';
import { ListarSolicitacaoPagamentoComponent } from '../usuario-master/listar-solicitacao-pagamento/listar-solicitacao-pagamento.component';
import { ListarSolicitacaoPagasComponent } from '../usuario-master/listar-solicitacao-pagas/listar-solicitacao-pagas.component';


@NgModule({
  declarations: [
    EmpresaComponent,
    QuestionarioComponent,
    InteressesComponent,
    UsuarioMasterComponent,
    PerguntasComponent,
    ApresentacaoComponent,
    ListarEmpresasComponent,
    HeaderAjudaComponent,
    ListarEmpresasComponent,
    ListarInteressesComponent,
    ListarPerguntasComponent,
    ListarQuestionariosComponent,
    ListarUsuariosMasterComponent,
    DetalheQuestionarioComponent,
    HomeComponent,
    OpcaoComponent,
    ListarSolicitacaoPagamentoComponent,
    ListarSolicitacaoPagasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ClarityModule,
    FormsModule
  ]
})
export class HomeModule { }
