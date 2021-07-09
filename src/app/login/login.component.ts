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
    this.us.userLogin(data)
  }



  /**
   * MoveToRegister
   */
  public MoveToRegister() {
    this.router.navigateByUrl('/register')
    
  }

}
