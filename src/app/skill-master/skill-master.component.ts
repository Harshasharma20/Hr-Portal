
import { Component,EventEmitter,OnInit, Output } from '@angular/core';
import { SkillmasterService } from '../services/skillmaster.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-skill-master',
  templateUrl: './skill-master.component.html',
  styleUrls: ['./skill-master.component.css']
})
export class SkillMasterComponent implements OnInit{
  skills:any;
  constructor(private skillmasterService:SkillmasterService,private activeRoute:ActivatedRoute,private http:HttpClient){}

  public skill = {
    skill_name:'',
  };

  ngOnInit(): void {
   let response=this.http.get("http://localhost:8080/api/getAllSkills");
   response.subscribe((data)=>this.skills=response);
  }

  //function for adding skills:

  formSubmit(){
  console.log(this.skill);

    //call addSkill() : skillmasterService
   this.skillmasterService.addSkill(this.skill).subscribe(
    (data)=>{
      console.log(data);
      alert("success");
    },
    (error)=>{
      console.log(error);
      alert("Error");
    }
    )  
}

search(){
  this.skillmasterService.getSkill().subscribe(
    (data)=>{
      console.log(data);
      if(data== this.skill){
      alert("data searched");
      }
  },
  (error)=>{
    console.log(error);
    alert("Error in searching data");
  })
}
}
