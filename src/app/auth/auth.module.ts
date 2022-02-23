import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { ErrorCardComponent } from '../components/error-card/error-card.component';
import { ComponentsModule } from '../components/components.module';






@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,  
   

  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule
    

  ],
  exports:[
    LoginComponent,
    RegisterComponent,
    
    
  ]
})
export class AuthModule { }
