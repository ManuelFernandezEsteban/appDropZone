import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxZoneComponent } from './box-zone/box-zone.component';
import { BoxDropComponent } from './box-drop/box-drop.component';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    BoxDropComponent,
    BoxZoneComponent,
    
  ],
  imports: [
    CommonModule,
    NgxDropzoneModule
  ],
  exports:[
    BoxDropComponent,
    BoxZoneComponent,
    
  ]
})
export class SharedModule { }
