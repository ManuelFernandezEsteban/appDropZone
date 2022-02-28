import { Component, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-error-card',
  templateUrl: './error-card.component.html',
  styleUrls: ['./error-card.component.css']
})
export class ErrorCardComponent implements OnInit {

  @Input() error?:boolean=false;
  @Input() texto:string='';
  
  

  constructor(private modalss:ModalService) { }

  ngOnInit(): void { 

  }
  cerrarModal(){
    this.modalss.modalS.emit(false);
    
  }
}
