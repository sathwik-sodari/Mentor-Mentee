import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc : HttpClient) { 
    
  }

 userMenteeRegister(data) : Observable <any>
 {
   return this.hc.post('/api/users/register',data);
   
 }

 userMentorRegister(data) : Observable <any>
 {
   return this.hc.post('/api/applicants/register',data);
   
 }



 userLoginStatus() : boolean
 {
  
    if(localStorage.getItem("email")===null)
    {
      return false;
    }

    else
    {
      return true;
    }
  }
 
  //logout
  userLogout(){
    
   localStorage.clear();
 }
   
 

 

 menteeLogin(data): Observable <any>
 {
   return this.hc.post('/api/users/signin',data)
 }
 
 mentorLogin(data): Observable<any>
 {
   return this.hc.post('/api/mentors/signin',data)
 }


 menteeDetails(m_id):Observable<any>
 {
   return this.hc.get(`/api/mentors/getMentee/${m_id}`)
 }
}
