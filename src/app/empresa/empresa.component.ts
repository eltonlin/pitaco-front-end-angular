import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  constructor(private titleService:Title) { 
    this.titleService.setTitle("Pitaco Empresa");
  }

  ngOnInit() {
  }

}
