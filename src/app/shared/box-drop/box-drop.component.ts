import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-box-drop',
  templateUrl: './box-drop.component.html',  
  styleUrls: ['./box-drop.component.css']
})
export class BoxDropComponent implements OnInit {

  constructor(private uploadService:UploadFileService,
              private usuarioService:UsuarioService,
              private http:HttpClient) { }
  files: File[] = [];

	onSelect(event:any) {
		
		this.files.push(...event.addedFiles);
    //console.log(this.files)
	}

  onRemove(event:any) {
		
		this.files.splice(this.files.indexOf(event), 1);
    //console.log(this.files)
	}
  ngOnInit(): void {
  }
  subirArchivos(){
    if (this.files.length<1){
      return;
    }
    //console.log(this.files);
    const formData:FormData = new FormData();
    
    formData.append('archivo',this.files[0],this.files[0].name);
    this.files.forEach(element => {
      formData.append('archivo',element);
      console.log(element)
    });
    //console.log(formData);
    this.uploadService.subirArchivos(formData).
      subscribe(resp=>{
        console.log(resp);
        this.files=[]
    });


  }
}
