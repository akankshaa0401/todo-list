import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { LoginService } from '../login/login.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = this.authService.isUserLoggedIn;
  private userSub: Subscription;

  constructor(public authService:AuthService,private cookieService: CookieService,private router:Router,private http:HttpClient
  ) {}

  ngOnInit() {
    
  }

  onLogout(){
    
    this.authService.logout().subscribe(res=>{
      console.log(res);
      
      // alert('You have been logged out successfully');
      this.router.navigate(['login'])
      // this.router.navigate(['']);
    },err=>{
      alert("OOPS!! Something went wrong")
    })
  }
  
  ngOnDestroy() {
    
  }
}

