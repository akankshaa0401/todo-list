import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'; 
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn=false
private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    
    console.error('An error occurred:', error.error);
  } else {
    
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }

  return throwError(() => new Error('Something bad happened; please try again later.'));
}

  constructor(private http: HttpClient,private cookieService: CookieService,private router: Router) { }

login(email: string, password: string) {
    console.log("loginfunction")
      this.http.post(
      environment.APIKey + 'api/v1/users/login',
      localStorage.session = {
        email: email,
        password: password,
      },
      { responseType: 'text' }
      
    ).subscribe(res=>{
      this.cookieService.set('email',email);  
        this.cookieService.set('password',password);  
        console.log(this.cookieService.get('email'));  
        console.log(this.cookieService.get('password')); 
      alert('You logged in successfully');
      this.router.navigate(["todolist"])
    },err=>{
      alert("OOPS!! Something went wrong")
    })
  }

}
