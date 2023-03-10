
import { Component,OnInit} from '@angular/core';
import { SkillmasterService } from '../services/skillmaster.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-skill-master',
  templateUrl: './skill-master.component.html',
  styleUrls: ['./skill-master.component.css']
})
export class SkillMasterComponent implements OnInit{
  userSkills:any=[];

  constructor(private skillmasterService:SkillmasterService,private http:HttpClient){
   this.skillmasterService.getSkill().subscribe((data)=>{
    console.log(data);
    this.userSkills=data;
   })
  }

  public skill = {
    skill_name:'',
  };

  ngOnInit(): void {
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


searchText='';


}
