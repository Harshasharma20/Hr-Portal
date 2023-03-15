
import { Component,OnInit, ViewChild} from '@angular/core';
import { SkillmasterService } from '../services/skillmaster.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-skill-master',
  templateUrl: './skill-master.component.html',
  styleUrls: ['./skill-master.component.css']
})
export class SkillMasterComponent implements OnInit{
  userSkills:any=[];
  @ViewChild('skillMasterForm') form:any= NgForm;
  editMode:boolean = false;

  constructor(private skillmasterService:SkillmasterService,private http:HttpClient, private router: Router){
   this.skillmasterService.getSkill().subscribe((data)=>{
    console.table(data);
    this.userSkills=data;
   })
  }

  public skill = {
    skill_name:'',
    skill_id:'',

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
/*
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

*/
searchText='';

//Update skills
onUpdateClicked(skill_id:any){
 let currentSkill = this.userSkills.find((p:any)=>{return p.skill_id === skill_id});
 console.log(this.form);
 //populate thr form with the product details
 this.form.setValue({
  skill_name: currentSkill.skill_name,
});
}
//Delete skills
onDeleteClicked(skill_id:any){
  this.userSkills.slice(skill_id-1,1)
   this.skillmasterService.deleteSkill(skill_id).subscribe((data)=>{
  console.log(data);
 })
}

//for restrict special character
omit_special_char(event:any)
{   
    var specialChar;  
    specialChar = event.charCode;       //specialChar = event.keyCode; 
    return((specialChar > 64 && specialChar < 91) || (specialChar > 96 && specialChar < 123) || specialChar == 8 || specialChar == 32 || (specialChar >= 48 && specialChar <= 57)); 
}

}
