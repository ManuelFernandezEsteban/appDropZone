import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit,Renderer2, ViewChild } from '@angular/core';
import { UploadFileService } from 'src/app/services/upload-file.service';
import { UsuarioService } from '../../services/usuario.service';



@Component({
  selector: 'app-box-drop',
  templateUrl: './box-drop.component.html',  
  styleUrls: ['./box-drop.component.css']
})
export class BoxDropComponent implements OnInit {

  @ViewChild("lista_archivos_subidos")divRespuesta!:ElementRef;
  private p! :ElementRef;
  public error:boolean=false;


  constructor(private uploadService:UploadFileService,
              private renderer:Renderer2) { }
  files: File[] = [];

	onSelect(event:any) {
		
		this.files.push(...event.addedFiles);
    this.renderer.addClass(this.divRespuesta.nativeElement,'oculto');
    this.error=false;
    //console.log(this.files)
	}

  onRemove(event:any) {
		
		this.files.splice(this.files.indexOf(event), 1);
    this.error=false;
    //console.log(this.files)
	}
  ngOnInit(): void {
  }
  subirArchivos(){
    if (this.files.length<1){
      this.error=true;
      return;
      
    }
    //console.log(this.files);
    const formData:FormData = new FormData();
    
    this.files.forEach(element => {
      formData.append('archivo',element);      
    });
    
    this.uploadService.subirArchivos(formData).
      subscribe(resp=>{
        let texto:string=''
        if (this.files.length>1){
          texto='Tus archivos ';
        }else{
          texto='Tu archivo ';
        }
        
        this.files.forEach(element=>{
          texto=texto+" "+element.name
        }); 
        if (this.files.length>1){
          texto=texto+' se han';
        }else{
          texto=texto +' se ha ';
        }
        texto=texto+' subido correctamente';  
        if (this.p){

          const d = this.divRespuesta.nativeElement as HTMLElement;
          const child = d.childNodes;
          child.forEach(element => {
            this.renderer.removeChild(d,element);
          });
         
        }      
        
        this.p = this.renderer.createElement('p')
        this.renderer.appendChild(this.p,this.renderer.createText(texto));
        this.renderer.appendChild(this.divRespuesta.nativeElement,this.p);
        this.renderer.removeClass(this.divRespuesta.nativeElement,'oculto');
        this.files=[];
        
    },
    error=>{
      console.log(error);
      this.error=true;
      this.files=[];
      
    }
    )


  }
}
