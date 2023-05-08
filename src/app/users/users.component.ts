import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from '../environments/environment.prod';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  users :any= new Array<any>();

  constructor(public userService: UsersService,private http: HttpClient,private router:Router) { }

  getUsers() {
    this.userService.getAllUsers().subscribe(response => {
     this.users=response;
  });
    
  }
}
