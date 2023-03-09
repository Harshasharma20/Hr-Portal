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
}
