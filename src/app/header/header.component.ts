import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(private cookieService: CookieService,private router:Router,private http:HttpClient
  ) {}

  ngOnInit() {
    
  }

  onLogout(){
    if (this.cookieService.check('email') && this.cookieService.check('password')){
      this.cookieService.delete('email');
      this.cookieService.delete('password');
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

