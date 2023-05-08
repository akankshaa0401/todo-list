import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, catchError, throwError, of } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Subscription } from 'rxjs';
import { HttpHeaderResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'; 
import { LocalStorageService } from 'ngx-webstorage';
import { tap, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isUserLoggedIn: boolean = false;
  errorMessage:string;
  logincookie:string;
  
  private handleError(errorRes: HttpErrorResponse) {
    console.log('handleerror');
    this.errorMessage = 'An unknown error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(this.errorMessage);
    }else{
     return this.errorMessage=errorRes.error.message
    }
    
    return throwError(this.errorMessage);
    
  }

  constructor(private http: HttpClient,private cookieService: CookieService,private router: Router,private storage:LocalStorageService) { }



}
