import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterForm } from '../interfaces/registerForm.interface';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/loginForm.interface';
import { tap } from "rxjs/operators";


const base_url=environment.base_url;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

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
}
