import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { Observable, ReplaySubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { customeDateMatchValidator } from '../date.custome';
import { gender } from '../const.variables';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  error:string=null;
 submitted=false;
 gender=gender
 fileSize=false
  // selectedFile: ImageSnippet;
  filetype=false
  eventFiles: FileList | null; 
  fromDate= new Date();
  toDate= new Date();
  files  = [];
  file: File = null;
signupForm: FormGroup = new FormGroup({})
  constructor(public authService: AuthService,private cookieService :CookieService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.fromDate.setFullYear(this.fromDate.getFullYear() -100);
    this.toDate.setFullYear(this.toDate.getFullYear()-10);
   this.signupForm = this.fb.group({
     email: new FormControl(null, [Validators.required, Validators.email]),
     name:new FormControl(null, [Validators.required]),
      gender: new FormControl('',[Validators.required]),
      birthdate :new FormControl('',[customeDateMatchValidator(this.fromDate, this.toDate)]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
      confirmPass: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]),
    });
  }
  
  onFileSelected(event:any) {
    this.file = event.target.files[0];
    if((this.file.type=="image/jpeg" 
    || this.file.type=="image/jpg" 
    || this.file.type=="image/png")){
      this.filetype=true
    }
    if(event.target.files.length>0){
    this.fileSize=true;
    }
  }

  

  onSubmit() {
   console.log(this.signupForm)
   this.submitted=true;
   if(this.signupForm.valid){
    this.authService.signup(
      this.signupForm.value.email,
       this.signupForm.value.password,
       this.signupForm.value.confirmPass,
       this.signupForm.value.gender,
       this.signupForm.value.name,
       this.signupForm.value.birthdate,
       this.file,
       ).subscribe(res=>{
        console.log(res);
        
        // alert('You successfully signed up');
        this.router.navigate(["login"])
      },err=>{
        console.log(err);
        // this.authService.handleError(err);
        this.error=this.authService.handleError(err)
        
      })
  }
  }
}
