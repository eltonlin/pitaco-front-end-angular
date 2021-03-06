import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { EmpresaComponent } from './empresa/empresa.component';
import { QuestionarioComponent } from './questionario/questionario.component';
import { InteressesComponent } from './interesses/interesses.component';
import { UsuarioMasterComponent } from './usuario-master/usuario-master.component';
import { PerguntasComponent } from './perguntas/perguntas.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { HeaderAjudaComponent } from './header-ajuda/header-ajuda.component';
import { ListarEmpresasComponent } from './empresa/listar-empresas/listar-empresas.component';
import { ListarInteressesComponent } from './interesses/listar-interesses/listar-interesses.component';
import { ListarPerguntasComponent } from './perguntas/listar-perguntas/listar-perguntas.component';
import { ListarQuestionariosComponent } from './questionario/listar-questionarios/listar-questionarios.component';
import { ListarUsuariosMasterComponent } from './usuario-master/listar-usuarios-master/listar-usuarios-master.component';
import { EmpresaService } from './empresa/empresa.service';
import { HomeModule } from './home/home.module';
import { OpcaoComponent } from './opcao/opcao.component';
import { AuthGuard } from './auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [LoginService, EmpresaService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
