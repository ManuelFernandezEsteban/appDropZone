import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

declare const gapi:any;

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
  constructor(private fb:FormBuilder,private usuarioService:UsuarioService,private router:Router,private ngZone:NgZone) { }

  ngOnInit(): void {
    this.conectarBoton();
  }

  login(){
    
    console.log(this.formularioLogin.value);
    this.usuarioService.login(this.formularioLogin.value).subscribe(resp=>{
      console.log(resp)
    },  (err)=>{
      this.abrirModal(err.error.msg)
    })

  //navegar al dashbord
  this.router.navigateByUrl('/');
  }
  cerrarModal(){
    this.error=false;
  }
  abrirModal(mensaje:string){

    this.error=true;
    this.textoError=mensaje;

  }
 

  conectarBoton () {
    gapi.load('auth2', ()=>{
      // Retrieve the singleton for the GoogleAuth library and set up the client.
       const auth2 = gapi.auth2.init({
        client_id: '963830950272-tmpv61fcafd1ech4se49a9341is2ks42.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });

      const element = document.getElementById('customBtn');
      auth2.attachClickHandler(element, {},
      (googleUser:any)=> {
          
          const idToken = googleUser.getAuthResponse().id_token;
          
          this.usuarioService.loginGoogle(idToken).subscribe(resp=>{
            //navegar al dashbord
            this.ngZone.run(()=>{
              this.router.navigateByUrl('/')
            })
            
          });
          
        }, function(error:any) {
          alert(JSON.stringify(error, undefined, 2));
        });
      
    });
  };

  
}
