import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UsuarioMaster } from '../login/usuarioMaster';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-usuario-master',
  templateUrl: './usuario-master.component.html',
  styleUrls: ['./usuario-master.component.css']
})
export class UsuarioMasterComponent implements OnInit {

  constructor(private titleService: Title, private usuarioService: UsuarioService) {
    this.titleService.setTitle('Pitaco Usuários');
   }

  usuarioMaster: UsuarioMaster = new UsuarioMaster();

  erro = false;

  sucesso = false;

  errorMessage: string;

  ngOnInit() {
  }

  cadastrar() {
    var userMater = JSON.parse(JSON.stringify(this.usuarioMaster));;
    this.usuarioMaster.nome = null;
    this.usuarioMaster.senha = null;
    this.usuarioMaster.login_master = null;
    this.usuarioService.cadastrarUsuario(userMater).subscribe(
      result => {
        this.sucesso = true;
        setTimeout(() => {
          this.sucesso = false;
        }, 3000);
      },
      error => {
        this.errorMessage = error.error.message;
        this.erro = true;
        setTimeout(() => {
          this.erro = false;
        }, 3000);
      }
    );
  }

}
