import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-usuario-master',
  templateUrl: './usuario-master.component.html',
  styleUrls: ['./usuario-master.component.css']
})
export class UsuarioMasterComponent implements OnInit {

  constructor(private titleService:Title) {
    this.titleService.setTitle("Pitaco Usuários");
   }

  ngOnInit() {
  }

}
