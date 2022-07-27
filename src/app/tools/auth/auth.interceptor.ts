import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _authService:AuthService,private _ngxLoader: NgxUiLoaderService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._ngxLoader.start();
    const token = localStorage.getItem("accessToken");
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
        if (!request.url.includes('token')) {
          headers = headers.append('Authorization', 'Bearer ' + token);
        }
        let newRequest=request.clone({headers:headers});
        return next.handle(newRequest).pipe(

          catchError((error) => {
              if (error instanceof HttpErrorResponse && error.status === 401) {
                  this._authService.signOut();

                  location.reload();
              }

              return throwError(()=>error);
          }),
          finalize(() => {

              this._ngxLoader.stopAll();

          })
      );
  }
}
