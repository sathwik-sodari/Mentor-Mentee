import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mentor-details',
  templateUrl: './mentor-details.component.html',
  styleUrls: ['./mentor-details.component.css']
})
export class MentorDetailsComponent implements OnInit {

  constructor(private us : UserService) { }

  ngOnInit(): void {
  }


  m_id;
  mentee;
assigned =true;
  getMentee(){
    this.m_id = localStorage.getItem('_id') 

    this.us.menteeDetails(this.m_id).subscribe(res=>{
      console.log(res);
      this.mentee = res.menteeObj,
      this.assigned=false

    },err=>{
      console.log("error in getting mentee details",err)
    })

  }

}
