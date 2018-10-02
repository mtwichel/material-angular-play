import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTournamentComponent } from './create-tournament/create-tournament.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: 'tournaments',  children: [
    { path: 'create', component: CreateTournamentComponent}
  ], },
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
