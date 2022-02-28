import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  
  constructor() { }

  modalS=new EventEmitter<boolean>();
}
