import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDto } from 'src/app/models/login/LoginDto';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private storage: StorageService,private authService:AuthService,private _activatedRoute: ActivatedRoute,private _router: Router) { }
  loginDto: LoginDto;
  rememberMe: boolean;
  ngOnInit(): void {
    this.rememberMe = (this.storage.getString("rememberMe")?.toLowerCase() == 'true');
    this.loginDto = new LoginDto();
    if (this.rememberMe) {
      this.loginDto.email = this.storage.getString("email") ?? "";
      this.loginDto.password = this.storage.getString("password") ?? "";
    }
  }
doLogin(){
  this.authService.signIn(this.loginDto).subscribe(
   
    (response) => {

       if(response.accessToken==''){
        Swal.fire(response.message)
       }
       else{
        this.storage.setString('accessToken',response.accessToken);
        this.storage.setBoolean('rememberMe',this.rememberMe);
        if(this.rememberMe){
          this.storage.setString('email',this.loginDto.email);
        this.storage.setString('password',this.loginDto.password);
        }
        this._router.navigate(['home'])
       }
    }
 );
}
}