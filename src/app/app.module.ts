import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';



import { FormsModule } from '@angular/forms';

import {HttpClientModule ,  HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegisterMenteeComponent } from './register-mentee/register-mentee.component';
import { RegisterMentorComponent } from './register-mentor/register-mentor.component';
import { MenteeDetailsComponent } from './mentee-details/mentee-details.component';
import { MentorDetailsComponent } from './mentor-details/mentor-details.component';
import { AdminComponent } from './admin/admin.component';
import { MenteeListComponent } from './mentee-list/mentee-list.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
// import { AuthorizationService } from './authorization.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    RegisterMenteeComponent,
    RegisterMentorComponent,
    MenteeDetailsComponent,
    MentorDetailsComponent,
    AdminComponent,
    MenteeListComponent,
    MentorListComponent,
    ApplicantListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


