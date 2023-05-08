import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TodochildComponent } from './todochild/todochild.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [];

const appRoutes: Routes = [
 
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'todolist', component: TodochildComponent ,canActivate : [AuthGuardService] },
  { path: 'signup', component: SignupComponent },
  { path: 'users', component: UsersComponent ,canActivate : [AuthGuardService]},
  { path: '', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
