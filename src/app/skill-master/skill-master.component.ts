
import { Component,OnInit } from '@angular/core';
import { SkillmasterService } from '../services/skillmaster.service';

@Component({
  selector: 'app-skill-master',
  templateUrl: './skill-master.component.html',
  styleUrls: ['./skill-master.component.css']
})
export class SkillMasterComponent implements OnInit{

  constructor(private skillmasterService:SkillmasterService){}

  public skill = {
    skill_name:'',
  };

  ngOnInit(): void {}

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
}
