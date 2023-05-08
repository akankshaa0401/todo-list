import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import {CookieService} from 'ngx-cookie-service'; 
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitted=false;
  error:string=null;
loginForm: FormGroup = new FormGroup({})
  constructor(private cookieService: CookieService,public authService: AuthService,private fb: FormBuilder,private router: Router) { }
  // constructor(private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
   this.loginForm = this.fb.group({
     email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    });
  }
  onSubmit() {
   console.log(this.loginForm)
   this.submitted=true;
   if(this.loginForm.valid){
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
    .subscribe((res) =>{
      console.log(res)
      
      // const headers=res.headers.get('Set-Cookie')
      // const keys = res.headers.keys();
      // this.headers = keys.map(key =>
      //   `${key}: ${res.headers.get(key)}`);
      // console.log(res.headers.get('Set-Cookie'));
      // console.log(res.headers.keys());
      
      
      this.router.navigate(["home"])
    
       
      // this.isUserLoggedIn = email == 'email' && password == 'password';
      // localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false"); 
      // return of(this.isUserLoggedIn).pipe(
      //   delay(1000),
      //   tap(val => { 
      //      console.log("Is User Authentication is successful: " + val); 
      //   })
     
      
      //   this.cookieServHice.set('password',password);  
      //   console.log(this.cookieService.get('email'));  
      //   console.log(this.cookieService.get('password')); 
      // this.storage.store('email', 'email');
      // this.storage.store('password', 'password');
      
    },err=>{
      console.log(err);
    //  this.authService.handleError(err);
  this.error= this.authService.handleError(err);
  
    })
   }
  }
}
