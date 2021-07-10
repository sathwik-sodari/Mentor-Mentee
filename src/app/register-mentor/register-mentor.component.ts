import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register-mentor',
  templateUrl: './register-mentor.component.html',
  styleUrls: ['./register-mentor.component.css']
})
export class RegisterMentorComponent implements OnInit {

  constructor(private router:Router,private us: UserService) { }

  ngOnInit(): void {
  }
  onSubmit(data){
      
    console.log(data)
    this.us.userRegister(data).subscribe(res=>{
      if(res.message === "user creation successfull")
      {
        alert("user creation succesfull")
      }

      else{
        alert(`res is ${res.message}`)
      }
    }),err=>{
      console.log("err in registration",err)
    }

  }


  // MoveToLogin
 

public MoveToLogin() {
  this.router.navigateByUrl('/login')
  
}

}
