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
export class CreatetaskService {
  
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

createTask(
    taskName: string,
     priority: string,
     ){
    
    console.log("createTask function")
     this.http.post(
      environment.APIKey + 'api/v1/tasks',{
       name:taskName,
       priority:priority
      }).subscribe(res=>{
        alert('You successfully created Task');
        this.router.navigate(["todolist"])
      },err=>{
        alert("Something went wrong while creating task")
      })
  }


}
