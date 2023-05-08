import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodochildComponent } from './todochild/todochild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import {CookieService} from 'ngx-cookie-service';
import { LogoutComponent } from './logout/logout.component';
import { LocalStorageService } from 'ngx-webstorage';
import { UsersComponent } from './users/users.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
// import { httpInterceptorProviders } from './http.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    TodochildComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    LogoutComponent,
    UsersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [AuthGuardService,CookieService,LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
