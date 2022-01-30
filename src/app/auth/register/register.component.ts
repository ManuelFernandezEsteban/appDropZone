import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  public formEnviado=false;
  public error:boolean=false;
  public textoError:string='';

  public formularioRegistro=this.fb.group({
    nombre:['Manuel',[Validators.required,Validators.minLength(3)]],
    email:['lolo3f@gmail.com',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]],
    password2:['',[Validators.required,Validators.minLength(6)]],
    terminos:[false,Validators.required]
  },{
    validators: this.passwordsValidos('password','password2')
  })

  constructor(private fb:FormBuilder,private usuarioService:UsuarioService) { }

  ngOnInit(): void {
  }

  crearUsurio(){
    this.formEnviado=true;
    console.log(this.formularioRegistro.value);
    if (this.formularioRegistro.invalid){
      return;
    }

    //realizar el posteo
    this.usuarioService.crearUsuario(this.formularioRegistro.value)
      .subscribe(resp=>{
        console.log('usuario creado');
        console.log(resp);
      },
        (error)=>this.abrirModal(error.error.msg)      
      );

  }

  campoNoValido(campo:string):boolean{

    if (this.formularioRegistro.get(campo)?.invalid && this.formEnviado) {      
      return false;
    }
    else{
      return true;
    }

  }
  passwordsIguales(){
    const pass1 = this.formularioRegistro.get('password')?.value;
    const pass2 = this.formularioRegistro.get('password2')?.value;
    if (pass1===pass2){
      return false;
    }
    else{
      return true;
    }

  }

  passwordsValidos(pass1Name:string,pass2Name:string){
    return (formGroup:FormGroup)=>{
      const pass1Control=formGroup.get(pass1Name);
      const pass2Control=formGroup.get(pass2Name);
      if (pass1Control?.value===pass2Control?.value){
        pass2Control?.setErrors(null);
      }else{
        pass2Control?.setErrors({noEsIgual:true})
      }
    }
  }

  cerrarModal(){
    this.error=false;
  }
  abrirModal(mensaje:string){

    this.error=true;
    this.textoError=mensaje;

  }
}
