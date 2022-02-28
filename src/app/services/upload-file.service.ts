import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const base_url=environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor(private usuarioService:UsuarioService,
              private http:HttpClient) { }

  subirArchivos(formData:FormData):Observable<any>{    
    
    return this.http.post(`${base_url}/upload/${this.usuarioService.user.uid}`,formData,{
      headers:{
        'x-token':this.usuarioService.user.token,
        'content':'formData'
      }
    });   
    

  }
}
