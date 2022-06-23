import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-mentee-details',
  templateUrl: './mentee-details.component.html',
  styleUrls: ['./mentee-details.component.css']
})
export class MenteeDetailsComponent implements OnInit {

  constructor(private ls : ListService,private us: UserService) { 
    
  }

allo;
menid;
assignedMentor;
user;
assig=null;
a;

  ngOnInit(): void {

    this.allo = JSON.parse(localStorage.getItem('userObj'))
    this.menid= this.allo['mentor']
    console.log("this.allo")
    console.log(this.allo)
    console.log(this.menid)


 

  
if(this.menid!=null)
{
this.us.mentorDetails(this.menid).subscribe(data=>{
        this.user=data;
        console.log("mentor details for assigned")
        console.log(data)
        console.log("user")
        console.log(this.user)
        this.assig="hello"
        this.showd = true;
        console.log("showd")
        console.log(this.showd)

        // this.a = document.getElementById('myid');
        // this.a.href = "https://wa.me/"+data.phoneNumber;

      },err=>{console.log(err)})
    }
  
    if(this.assig!=null)
    {
      this.showd = true;
      console.log("showd")
      console.log(this.showd)
      
    }
    else if(this.assig==null)
    {
      this.showd = false;
      console.log("showd")
      console.log(this.showd)
    }



  }

ph="9182216936"
  _id;

  mentors;
  showd;

    getMentorsButton()
    {
      this._id = localStorage.getItem('_id')
      this.assig=localStorage.getItem('mentor')

   

      
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
