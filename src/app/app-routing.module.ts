import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './components/auth-components/signup-form/signup-form.component';
import { LoginPageComponent } from './components/auth-components/login-page/login-page.component';
import { MultipleChoiceQuestionComponent } from './components/question-components/multiple-choice-question/multiple-choice-question.component';

const routes: Routes = [
  { path: 'signup', component: SignupFormComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'multi', component: MultipleChoiceQuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
