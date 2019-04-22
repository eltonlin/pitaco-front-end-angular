import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
//import { InteressesService } from './interesses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interesses',
  templateUrl: './interesses.component.html',
  styleUrls: ['./interesses.component.css']
})
export class InteressesComponent implements OnInit {

  constructor(
    //private interessesService: InteressesService,
   // private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle("Pitaco Interesses");

   }
  
  ngOnInit() {
  }

  /*insertInteresse(){
  this.interessesService.insertInteresse(this.insertInteresse).subscribe(
    user => {
    
    
    },
    error => {
      this.error = error.error.message;
    } 
  )
  }
*/}
