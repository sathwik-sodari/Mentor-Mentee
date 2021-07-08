import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private hc : HttpClient) { 
    
  }

 userLogin(data)
 {
   this.hc.post('/api/users/register',data).subscribe(data=>{
     console.log(data),
     err=>console.log(err)
   })
   
 }
}
