import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateSkillComponent } from './update-skill/update-skill.component';
const routes: Routes = [
{
  path:'updateSkill',
  component:UpdateSkillComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
