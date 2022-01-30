import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  public formEnviado=false;
  public error:boolean=false;
  public textoError:string='';

  public formularioLogin=this.fb.group({    
    email:['lolo3f@gmail.com',[Validators.required,Validators.email]],
    password:['123456',[Validators.required,Validators.minLength(6)]]    
  })
  constructor(private fb:FormBuilder,private usuarioService:UsuarioService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    
    console.log(this.formularioLogin.value);
    this.usuarioService.login(this.formularioLogin.value).subscribe(resp=>{
      console.log(resp)
    },  (err)=>{
      this.abrirModal(err.error.msg)
    })

  //  this.router.navigateByUrl('/');
  }
  cerrarModal(){
    this.error=false;
  }
  abrirModal(mensaje:string){

    this.error=true;
    this.textoError=mensaje;

  }
}
