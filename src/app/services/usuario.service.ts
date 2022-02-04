import { Injectable, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterForm } from '../interfaces/registerForm.interface';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/loginForm.interface';
import { tap,catchError } from "rxjs/operators";
import { map, Observable,of } from 'rxjs';
import { Router } from '@angular/router';



const base_url=environment.base_url;
declare const gapi:any;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public auth2:any;


  constructor(private http:HttpClient, private router:Router, private ngZone:NgZone) { 
    this.googleInit();
  }

  googleInit(){

    
      gapi.load('auth2', ()=>{
      // Retrieve the singleton for the GoogleAuth library and set up the client.
        this.auth2 = gapi.auth2.init({
        client_id: '963830950272-tmpv61fcafd1ech4se49a9341is2ks42.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
        });     
      
      });
    
    
  }

  logOut(){
    localStorage.removeItem('token');    
    this.auth2.signOut().then(()=> {
      this.ngZone.run(()=>{
        this.router.navigateByUrl('/login');
      }
     )
      
    })
  }

  validarToken():Observable<boolean>{
    const token = localStorage.getItem('token') || '';
    return this.http.get(`${base_url}/login/renew`,{
      headers:{
        'x-token':token
      }
    }).pipe(
      tap((resp:any)=>{
        localStorage.setItem('token',resp.token);
      }),
      map(resp=> true),
      catchError(error=>of(false))
    )
  }

  crearUsuario(formaData:RegisterForm){
    
    return this.http.post(`${base_url}/usuarios`,formaData)
      .pipe(
        tap((resp:any)=>{
          localStorage.setItem('token',resp.token)
        })
      )
  }
  login(formaData:LoginForm){
  
    
    return this.http.post(`${base_url}/login`,formaData)
      .pipe(
        tap((resp:any)=>{
          localStorage.setItem('token',resp.token)
        })
      )

  }

  loginGoogle(token:any){  
    
    return this.http.post(`${base_url}/login/google`,{token})
      .pipe(
        tap((resp:any)=>{
          localStorage.setItem('token',resp.token)
          
        })
      )

  }
}
