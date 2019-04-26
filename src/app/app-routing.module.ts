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
  { path: 'home', loadChildren: './home/home.module#HomeModule', data: {preload: true} },
  // {path: '/home/(main:apresentacao)/(main:header-ajuda))', redirectTo: '/header-ajuda', pathMatch: 'full'},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
  // Esse código abaixo vai servir para redirecionar para uma página não encontrada. O "**" indica isso.
  // {path: '**', redirectTo: '/paginaNaoEncontrada', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
