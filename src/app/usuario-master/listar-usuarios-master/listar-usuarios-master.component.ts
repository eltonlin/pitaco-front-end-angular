import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-listar-usuarios-master',
  templateUrl: './listar-usuarios-master.component.html',
  styleUrls: ['./listar-usuarios-master.component.css']
})
export class ListarUsuariosMasterComponent implements OnInit {

  users: any;
  usuario = {
    login_usuario: String,
    nome: String,
    cpf: String,
    faixa_salarial: Number,
    pontuacao: Number,
    data_nascimento: Date
  };
  delete = false;
  update = false;

  constructor(
    private usuarioService: UsuarioService) { }

  ngOnInit() {
    this.listarUsuarios();
  }

  listarUsuarios() {
    this.usuarioService.listarUsuarios().subscribe(usuarios => this.users = usuarios);
  }

  apagar(res) {
    this.usuario = res;
    this.delete = true;
  }

  updateFunc(res) {
    this.usuario = res;
    this.update = true;
  }

}
