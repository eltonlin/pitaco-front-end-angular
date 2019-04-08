import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { InteressesComponent } from './interesses/interesses.component';
import { UsuarioMasterComponent } from './usuario-master/usuario-master.component';
import { PerguntasComponent } from './perguntas/perguntas.component';



const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent,
    children: [
      { path: 'empresa', component: EmpresaComponent, outlet: 'main'},
      { path: 'questionario', component: QuestionarioComponent, outlet: 'main'},
      { path: 'interesses', component: InteressesComponent, outlet: 'main'},
      { path: 'usuario-master', component: UsuarioMasterComponent, outlet: 'main'},
      { path: 'perguntas', component: PerguntasComponent, outlet: 'main'}
    ]
  },
  {path: '', redirectTo: '/login', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
