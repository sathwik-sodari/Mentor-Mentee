import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-mentee-details',
  templateUrl: './mentee-details.component.html',
  styleUrls: ['./mentee-details.component.css']
})
export class MenteeDetailsComponent implements OnInit {

  constructor(private ls : ListService) { }

  ngOnInit(): void {



  }

  _id;

  mentors;

    getMentorsButton()
    {
      this._id = localStorage.getItem('_id')
      
      console.log("without parse",this._id)
      
      console.log(JSON.stringify(this._id))

      this.ls.getMentors(this._id).subscribe(data=>{
        this.mentors=data.mentors;
        console.log(data)
      },err=>{console.log(err)})

    
      
    }

    displayButton =true;

    newMentor;
    assigned;

    selectMentor(mentor)
    {
      this.ls.choose(mentor._id,JSON.stringify(this._id)).subscribe(data=>{
        console.log(data.newMentor)
      this.newMentor = data.newMentor
      this.assigned = true  }
        ,err=>{
          console.log(err)

        })
      }

      // cancel(mentor)
      // {
      //   this.ls.cancelMentor()
      // }
    

// /choose/:id


}
