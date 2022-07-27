import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { LoginDto } from 'src/app/models/login/LoginDto';
import { apiEndPoints } from 'src/environments/apiEndPoints';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _authenticated: boolean = false;
  constructor(private httpService:HttpService,private httpClient:HttpClient) { }
  accessToken: string;

getaccessToken(): string {
    return localStorage.getItem('accessToken') ?? '';
}
signIn(credentials: LoginDto): Observable<any> {
  // Throw error, if the user is already logged in
  

 
  return this.httpService.signIn(apiEndPoints.auth.signIn, credentials).pipe(
      switchMap((response: any) => {

          this.accessToken = response.AccessToken;
          localStorage.setItem('accessToken', this.accessToken);
          this._authenticated = true;
          return of(response);
      })
  );
}

isLoggedIn(): boolean {
  if (localStorage.getItem('accessToken')) {

      return true;
  }

  return false;
}

signOut() {
  localStorage.removeItem('accessToken');
  this._authenticated = false;
}
}
