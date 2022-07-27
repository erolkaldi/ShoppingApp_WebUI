import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router,private authService:AuthService,private storageService : StorageService) { 
    router.events.subscribe((val) => {
      if(authService.isLoggedIn()){
        this.loggedIn=true;
      }
      else{
        this.loggedIn=false;
      }
  });
  }
  loggedIn:boolean = false;
  selectedLang:string="en";
  ngOnInit(): void {
    this.selectedLang=this.storageService.getString('activeLang') ?? 'en';
  }
  doLogin(){
    this.router.navigate(["login"]);
    }
    doLogout(){
    this.loggedIn=false;
    this.authService.signOut();
    this.router.navigate(["home"]);
    }
    goToHome(){
      this.router.navigate(["home"]);
    }
    setActiveLang(){
      this.storageService.setString('activeLang',this.selectedLang);
      window.location.reload();
    }
}
