import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit {

  constructor(private ls :ListService) { }


  mentors;
  ngOnInit(): void {

    this.ls.MentorList().subscribe(data=>{
      console.log(data.mentors);
      this.mentors= data.mentors;
      
    },err=>{
      console.log(err)
    })


  }

}
