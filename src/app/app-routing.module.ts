import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home',  canActivate: [AuthGuard], loadChildren: './home/home.module#HomeModule', data: {preload: true} },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
  // Esse código abaixo vai servir para redirecionar para uma página não encontrada. O "**" indica isso.
  // {path: '**', redirectTo: '/paginaNaoEncontrada', pathMatch: 'full'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
