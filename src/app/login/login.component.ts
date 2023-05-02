import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import {CookieService} from 'ngx-cookie-service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  submitted=false;
loginForm: FormGroup = new FormGroup({})
  constructor(private cookieService: CookieService,private loginService: LoginService,private fb: FormBuilder,private router: Router) { }
  // constructor(private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
   this.loginForm = this.fb.group({
     email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    });
  }
  onSubmit() {
   console.log(this.loginForm)
   this.submitted=true;
    this.loginService.login(this.loginForm.value.email, this.loginForm.value.password)
    // .subscribe(res=>{
    //   this.cookieService.set('email', this.loginForm.value.email);  
    //     this.cookieService.set('password', this.loginForm.value.password);  
    //     console.log(this.cookieService.get('email'));  
    //     console.log(this.cookieService.get('password')); 
    //   alert('You logged in successfully');
    //   this.router.navigate(["todolist"])
    // },err=>{
    //   alert("OOPS!! Something went wrong")
    // })
      
  }
}
