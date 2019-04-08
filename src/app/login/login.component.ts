import { Component, OnInit } from '@angular/core';
import { UsuarioMaster } from './usuarioMaster';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioMaster: UsuarioMaster = new UsuarioMaster();

  error: String;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private titleService: Title
  ) { 
    this.titleService.setTitle("Pitaco Login");
  }

  ngOnInit() {
  }

  logar(){
    this.loginService.logar(this.usuarioMaster).subscribe(
      user => {
        this.usuarioMaster = user;
        window.localStorage.setItem('user', this.usuarioMaster.nome);
        this.router.navigate(['home']);
      },
      error => {
        this.error = error.error.message;
      } 
    )
  }

}
