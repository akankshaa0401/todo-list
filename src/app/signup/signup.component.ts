import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SignupService } from './signup.service';
import { Observable, ReplaySubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { customeDateMatchValidator } from '../date.custome';
class ImageSnippet {
  constructor(public src: string, public file: File) {}
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
 submitted=false;
  // selectedFile: ImageSnippet;
  fileName = '';
  eventFiles: FileList | null; 
  fromDate= new Date();
  toDate= new Date();
  files  = [];
  file: File = null;
signupForm: FormGroup = new FormGroup({})
  constructor(private signupService: SignupService,private cookieService :CookieService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.fromDate.setFullYear(this.fromDate.getFullYear() -70);
   this.signupForm = this.fb.group({
     email: new FormControl(null, [Validators.required, Validators.email]),
     name:new FormControl(null, [Validators.required]),
     gender: new FormControl('',),
     birthdate :new FormControl('',customeDateMatchValidator(this.fromDate, this.toDate)),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      confirmPass: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    });
  }
  
  //  processFile(imageInput: any) {
  //   const file: File = imageInput.files[0];
  //   const reader = new FileReader();

  //   reader.addEventListener('load', (event: any) => {

  //     this.selectedFile = (new ImageSnippet(event.target.result, file));
    
  //   });

  //   reader.readAsDataURL(file);
    
  // }
  onFileSelected(event:any) {
    this.file = event.target.files[0];
    
  }

  

  onSubmit() {
   console.log(this.signupForm)
   this.submitted=true;
    this.signupService.signup(
      this.signupForm.value.email,
       this.signupForm.value.password,
       this.signupForm.value.confirmPass,
       this.signupForm.value.birthdate,
       this.signupForm.value.gender,
       this.signupForm.value.name,
       this.file
       )
  }

}
