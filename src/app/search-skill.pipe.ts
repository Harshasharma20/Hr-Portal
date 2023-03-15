import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchSkill'
})
export class SearchSkillPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;

    args=args.toLowerCase().split("*");

    return value.filter((item:any)=>{
      return JSON.stringify(item).toLowerCase().includes(args);
    })
  }

}
