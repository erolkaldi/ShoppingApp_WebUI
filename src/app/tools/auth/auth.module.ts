import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    
    {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi   : true
  }
  ]
})
export class AuthModule { }
