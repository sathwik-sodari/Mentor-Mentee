import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private us : UserService, private router:Router) { }


  ngOnInit(): void {
  }

  onSubmit(data){

    console.log(data)
//mentee login
    if(data.typeOfUser==="Mentee")
    {
    this.us.menteeLogin(data).subscribe(res=>
      {
      if(res.message==="mentee login success")
      {
        alert(`${res.message}`)
        localStorage.setItem("userObj",JSON.stringify(res.userObj));
        localStorage.setItem("token",res.token)
        localStorage.setItem("email",res.email)
        localStorage.setItem("_id",res._id)
              
        this.router.navigateByUrl('/menteeComponent')
      }

      else{
        alert(`${res.message}`)
      }
    },
    err=>{
      alert("login error");
      console.log("login err",err)
    })
  
    }



    //mentor login
    else if(data.typeOfUser==="Mentor")
    {



      this.us.mentorLogin(data).subscribe(res=>{
console.log(data)
        if(res.message==="mentor login success"){
      localStorage.setItem("userObj",JSON.stringify(res.userObj));
        localStorage.setItem("token",res.token)
        localStorage.setItem("email",res.email)
        localStorage.setItem("_id",res._id)
        alert('login successfull')
        this.router.navigateByUrl('/mentorComponent')
        }
        else
        {
          alert('Login credentials wrong')
        }
      },err=>{
        console.log("Err",err)

      })
 
    }

     

    else if(data.typeOfUser==="Admin")
    {
      if(data.email==="admin@gmail.com" && data.password==="admin")
      {
        localStorage.setItem("email",data.email)
        this.router.navigateByUrl("/admin")
      }

      else{
        alert("invalid admin credentials")
      }
      

    }
    
  }




 
 


  /**
   * MoveToRegister
   */
  public MoveToRegister() {
    this.router.navigateByUrl('/register')
    
  }

}
