import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillMasterComponent } from './skill-master/skill-master.component';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatPaginatorModule} from '@angular/material/paginator';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchSkillPipe } from './search-skill.pipe';
import { UpdateSkillComponent } from './update-skill/update-skill.component'; 
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {
    path:'update',
    component:UpdateSkillComponent,
  }
]

@NgModule({
  declarations: [
    AppComponent,
    SkillMasterComponent,
    SearchSkillPipe,
    UpdateSkillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    MatTableModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
