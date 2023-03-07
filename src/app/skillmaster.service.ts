import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillmasterService {
  baseURL ="http://localhost:8080/api/create";
  constructor(private httpClient : HttpClient) { }
  /*
  createSkill(context:any){
    return this.httpClient.post<any>(`$this.baseURL`,JSON.stringify(context))
    .map((response:Response)=>response.json());
  }

  */
  saveSkill(data:any){
    return this.httpClient.post(this.baseURL,data);
  }
}
