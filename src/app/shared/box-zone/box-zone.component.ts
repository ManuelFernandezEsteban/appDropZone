import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-box-zone',
  templateUrl: './box-zone.component.html',
  styles: [
  ]
})
export class BoxZoneComponent implements OnInit {

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }

  logOut(){
    this.usuarioService.logOut();
  }

}
