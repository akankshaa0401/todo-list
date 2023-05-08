import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import {Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
    constructor(private http: HttpClient,private router:Router) { }
   getAllUsers () {
    return this.http.get(
        environment.APIKey + 'api/v1/users',{ withCredentials:true })
   }
}