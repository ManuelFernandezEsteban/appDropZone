import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.css']
})
export class ErrorCardComponent implements OnInit {

  @Input() error?:boolean=false;
  @Input() texto:string='';
  
  

  constructor() { }

  ngOnInit(): void { 

  }
  cerrarModal(){
    this.error=false;
    
  }
}
