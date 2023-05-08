import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service'; 
import { LoginService } from '../login/login.service';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CreatetaskService {
  taskcookie:string
private handleError(error: HttpErrorResponse) {
  if (error.status === 0) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error);
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong.
    console.error(
      `Backend returned code ${error.status}, body was: `, error.error);
  }
  // Return an observable with a user-facing error message.
  return throwError(() => new Error('Something bad happened; please try again later.'));
}
//   private apiUrl = 'http://localhost:50444/api'; // Replace with your API endpoint URL

  constructor(private loginService : LoginService,private http: HttpClient,private router:Router,private cookieService: CookieService) { }

createTask(
    taskName: string,
     priority: string,
     ){
      
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'my-auth-token'
        })
      };
    // const requestOptions = { headers: headers };
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = ({ headers: headers, withCredentials: true });
      const body = JSON.stringify({name:taskName ,priority:priority });
    console.log("createTask function")
    return this.http.post(
      environment.APIKey + 'api/v1/tasks', body,httpOptions)
      .pipe(map((res:Response)=>{
        console.log(res);
        
      }))
  }
}
