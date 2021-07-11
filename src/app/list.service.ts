import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor( private hc : HttpClient) { }


  MenteeList(): Observable<any>
  {
    console.log("list service")
    return this.hc.get('/api/users/list')
  }


  getMentors(_id) : Observable<any>
  {
    console.log("inside list for finding mentors")
    return this.hc.get(`/api/users/find/${_id}`)
  }


  choose(m_id,s_id) : Observable<any>
  {
    console.log("m_id",m_id)
    return this.hc.post(`/api/users/choose/${s_id}`,{m_id:m_id})

  }




  MentorList() :Observable<any>
  {
    console.log("inside mentor list")
    return this.hc.get("/api/mentors/allmentors")
  }

  applicantList():Observable<any>
  {
    console.log("isnide applicabnt list")
    return this.hc.get("/api/applicants/getapplicants")
  }


  approve(id) :Observable<any>
  {
    console.log("inside approval")
    return this.hc.get(`/api/applicants/accept/${id}`)
  }

}
