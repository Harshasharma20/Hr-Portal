
import { Component,OnInit } from '@angular/core';
import { SkillmasterService } from '../skillmaster.service'; 
@Component({
  selector: 'app-skill-master',
  templateUrl: './skill-master.component.html',
  styleUrls: ['./skill-master.component.css']
})
export class SkillMasterComponent implements OnInit{

  public skill = {
    skill_name:'',
  };

  constructor(private skillData : SkillmasterService){

  }

  ngOnInit(): void {}

  //function for adding skills:

  formSubmit(){
    console.log(this.skill);
  }
}
