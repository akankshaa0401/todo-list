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
  errorMessage:string;

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
     gender:string,
     name:string,
     birthdate?:any,
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
        console.log(err);
        this.handleError(err);
      })
  }


}
