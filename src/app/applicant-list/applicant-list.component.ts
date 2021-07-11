import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css']
})
export class ApplicantListComponent implements OnInit {

  constructor(private ls : ListService) { }


  applicants;

  // applicantstatus=[];

  ngOnInit(): void {

    this.ls.applicantList().subscribe(res=>{
      console.log("applicants",res.applicants)
      this.applicants = res.applicants
    },err=>{
      console.log("err ",err)
    })
  }


   
  id;


  status =true;

  approve(applicant){

    this.id = applicant._id;

    this.ls.approve(this.id).subscribe(res=>{
      if(res.message==="approval done"){
        alert(`${res.message}`)
        this.status =false;

      }
      else{
        alert(`not successfull`)
      }
    },err=>{
      console.log("err",err)
    })
  }

}
