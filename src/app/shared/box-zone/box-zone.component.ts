import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-box-zone',
  templateUrl: './box-zone.component.html',
  styles: [
  ]
})
export class BoxZoneComponent implements OnInit {

  public user?:Usuario;

  constructor(private usuarioService:UsuarioService) { 
    this.user=usuarioService.user;
  }

  ngOnInit(): void {
  }

  logOut(){
    this.usuarioService.logOut();
  }

}
