import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TodochildComponent } from './todochild/todochild.component';

const routes: Routes = [];

const appRoutes: Routes = [
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'todolist', component: TodochildComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,{preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
