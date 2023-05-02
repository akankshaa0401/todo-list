import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../environments/environment.prod';
import {Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SignupService {
  
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

  constructor(private http: HttpClient,private router:Router) { }

//   login(email: string, password: string)  {
//    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
//         const body = { title: 'Angular POST Request Example' };
//         this.http.post<any>(environment.APIKey + '/users/login', body, { headers }).subscribe(data => {
//             this.postId = data.id;
//         });
// }
signup(
    email: string,
     password: string,
     confirmPass:string,
     birthdate:any,
     gender:string,
     name:string,
     photo?:File){
    
    console.log("signup function")
    console.log("signup function" , photo)
    console.log("signup function" , birthdate)
    const formData = new FormData();
    formData.append('email',email);
    formData.append('password',password);
    formData.append('passwordConfirm',confirmPass);
    formData.append('birthDate',birthdate);
    formData.append('gender',gender);
    formData.append('name',name);
    formData.append('photo',photo);
     this.http.post(
      environment.APIKey + 'api/v1/users/signUp',formData).subscribe(res=>{
        alert('You successfully signed up');
        this.router.navigate(["login"])
      },err=>{
        alert("Something went wrong")
      })
  }


}
