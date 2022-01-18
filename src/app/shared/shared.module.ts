import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxZoneComponent } from './box-zone/box-zone.component';
import { BoxDropComponent } from './box-drop/box-drop.component';



@NgModule({
  declarations: [
    BoxDropComponent,
    BoxZoneComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    BoxDropComponent,
    BoxZoneComponent
  ]
})
export class SharedModule { }
