import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class SkillmasterService {

  constructor(private http:HttpClient) { }

  //add skill
  public addSkill(skill:any){
    return this.http.post(`${baseUrl}/api/create`,skill);
  }

  //get skill
  public getSkill(){
    return this.http.get("http://localhost:8080/api/getAllSkills");
  }

  //delete skill
  public deleteSkill(skill_id:any){
    return this.http.delete(`${baseUrl}/api/${skill_id}`);
  } 
}
