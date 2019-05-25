import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarioNome: string;

  constructor(private titleService: Title, private route: Router) {
    this.titleService.setTitle('Pitaco Inicial');
   }

  ngOnInit() {
    this.usuarioNome = window.localStorage.getItem('user');
  }

  loggout() {
    window.localStorage.clear();
    this.route.navigate(['/login']);
  }

}
