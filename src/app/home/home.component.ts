import { Component } from '@angular/core';
import { OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { LoginService } from '../login/login.service';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private authService:AuthService,private cookieService: CookieService,private router:Router,private http:HttpClient
  ) {}

  ngOnInit() {
    
  }

  onLogout(){
    if (this.authService.isUserLoggedIn){
      this.authService.isUserLoggedIn=false;
      localStorage.removeItem('isUserLoggedIn'); 
    return this.http.post(
      environment.APIKey + 'api/v1/users/logout'
      ,{ responseType: 'text' }
    ).subscribe(res=>{
      alert('You have been logged out successfully');
      this.router.navigate(['/signup'])
      // this.router.navigate(['']);
    },err=>{
      alert("OOPS!! Something went wrong")
    })
  }
  else{
    alert("OOPS!! Not able to logout")
  }
  return true
  }
  ngOnDestroy() {
    
  }
}
