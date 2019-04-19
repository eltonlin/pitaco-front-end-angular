import { HeaderAjudaComponent } from './header-ajuda/header-ajuda.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { InteressesComponent } from './interesses/interesses.component';
import { UsuarioMasterComponent } from './usuario-master/usuario-master.component';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { ListarEmpresasComponent } from './empresa/listar-empresas/listar-empresas.component';
import { ListarInteressesComponent } from './interesses/listar-interesses/listar-interesses.component';
import { ListarPerguntasComponent } from './perguntas/listar-perguntas/listar-perguntas.component';
import { ListarQuestionariosComponent } from './questionario/listar-questionarios/listar-questionarios.component';
import { ListarUsuariosMasterComponent } from './usuario-master/listar-usuarios-master/listar-usuarios-master.component';




const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'empresa', component: EmpresaComponent, outlet: 'main'},
      { path: 'questionario', component: QuestionarioComponent, outlet: 'main'},
      { path: 'interesses', component: InteressesComponent, outlet: 'main'},
      { path: 'usuario-master', component: UsuarioMasterComponent, outlet: 'main'},
      { path: 'perguntas', component: PerguntasComponent, outlet: 'main'},
      { path: 'apresentacao', component: ApresentacaoComponent, outlet: 'main'},
      { path: 'listar-empresas', component: ListarEmpresasComponent, outlet: 'main'},
      { path: 'header-ajuda', component: HeaderAjudaComponent, outlet: 'main'},
      { path: 'listar-interesses', component: ListarInteressesComponent, outlet: 'main'},
      { path: 'listar-perguntas', component: ListarPerguntasComponent, outlet: 'main'},
      { path: 'listar-questionarios', component: ListarQuestionariosComponent, outlet: 'main'},
      { path: 'listar-usuarios-master', component: ListarUsuariosMasterComponent, outlet: 'main'}
      
    ]
  },
  //{path: '/home/(main:apresentacao)/(main:header-ajuda))', redirectTo: '/header-ajuda', pathMatch: 'full'}, 
  {path: '', redirectTo: '/login', pathMatch: 'full'}
  //Esse código abaixo vai servir para redirecionar para uma página não encontrada. O "**" indica isso.
  //{path: '**', redirectTo: '/paginaNaoEncontrada', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
