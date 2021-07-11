import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListService } from '../list.service';

@Component({
  selector: 'app-mentee-list',
  templateUrl: './mentee-list.component.html',
  styleUrls: ['./mentee-list.component.css']
})
export class MenteeListComponent implements OnInit {

  constructor(private ls : ListService) { }

mentees ;

  ngOnInit(): void {

    
    // this.mentees = this.ls.MenteeList();

    this.ls.MenteeList().subscribe(data=>{
      console.log(data.message);
      this.mentees= data.message;
      
    },err=>{
      console.log(err)
    })

  
  }

}
