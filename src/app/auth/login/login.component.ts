import { Component, OnInit, NgZone, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { environment } from '../../../environments/environment';
import { ModalService } from '../../services/modal.service';

declare const gapi:any;
const client_ID = environment.client_ID;

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
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required,Validators.minLength(6)]]    
  })
  constructor(private fb:FormBuilder,private usuarioService:UsuarioService,private router:Router,private ngZone:NgZone,private modalss:ModalService) { }

  ngOnInit(): void {
    this.conectarBoton();
    this.modalss.modalS.subscribe(resp=>{
      this.error=resp;
    })
  }

  login(){    
    
    this.usuarioService.login(this.formularioLogin.value).subscribe(resp=>{
      //console.log(resp)
      //navegar al dashbord
      this.error=false;
      this.textoError=''
      this.router.navigateByUrl('/');
    },  (err)=>{
      this.error=true;
      
    })  
  
  }   

  conectarBoton () {
    gapi.load('auth2', ()=>{
      // Retrieve the singleton for the GoogleAuth library and set up the client.
       const auth2 = gapi.auth2.init({
        client_id: client_ID,
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
