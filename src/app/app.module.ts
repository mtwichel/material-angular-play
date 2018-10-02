import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material';

import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './components/auth-components/login-page/login-page.component';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from './auth.service';
import { SignupFormComponent } from './components/auth-components/signup-form/signup-form.component';
import { ForgotPasswordDialogComponent } from './components/auth-components/forgot-password-dialog/forgot-password-dialog.component';
import { MultipleChoiceQuestionComponent } from './components/question-components/multiple-choice-question/multiple-choice-question.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignupFormComponent,
    ForgotPasswordDialogComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
  entryComponents: [
    ForgotPasswordDialogComponent
  ]
})
export class AppModule { }
