import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { DetalheQuestionarioComponent } from '../questionario/detalhe-questionario/detalhe-questionario.component';
import { OpcaoComponent } from '../opcao/opcao.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'questionario', component: QuestionarioComponent },
      { path: 'interesses', component: InteressesComponent },
      { path: 'usuario-master', component: UsuarioMasterComponent },
      { path: 'perguntas', component: PerguntasComponent },
      { path: 'apresentacao', component: ApresentacaoComponent },
      { path: 'listar-empresas', component: ListarEmpresasComponent },
      { path: 'header-ajuda', component: HeaderAjudaComponent },
      { path: 'listar-interesses', component: ListarInteressesComponent },
      { path: 'listar-perguntas', component: ListarPerguntasComponent },
      { path: 'listar-questionarios', component: ListarQuestionariosComponent },
      { path: 'listar-usuarios-master', component: ListarUsuariosMasterComponent },
      { path: 'empresa', component: EmpresaComponent },
      { path: 'opcao', component: OpcaoComponent },
      { path: 'questionario-detalhe', component: DetalheQuestionarioComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
