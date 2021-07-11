import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ApplicantListComponent } from './applicant-list/applicant-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenteeDetailsComponent } from './mentee-details/mentee-details.component';
import { MenteeListComponent } from './mentee-list/mentee-list.component';
import { MentorDetailsComponent } from './mentor-details/mentor-details.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { RegisterMenteeComponent } from './register-mentee/register-mentee.component';
import { RegisterMentorComponent } from './register-mentor/register-mentor.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationComponent},
  {path:'home',component:HomeComponent},
  {path:'register-mentee',component:RegisterMenteeComponent},
  {path:'register-mentor',component:RegisterMentorComponent},
  {path:'admin',component:AdminComponent,children:[
    {path:'applicantList',component:ApplicantListComponent},
    {path:'menteeList',component:MenteeListComponent},
    {path:'mentorList',component:MentorListComponent},
  ],
},
{path:"menteeComponent",component:MenteeDetailsComponent},
{path:"mentorComponent",component:MentorDetailsComponent},

  { path:'', redirectTo:'/home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
