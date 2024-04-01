import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './Book/book/book.component';
import { AsesoryComponent } from './Asesory/asesory/asesory.component';
import { VerseComponent } from './Verse/verse/verse.component';
import { BusinessComponent } from './Book/book/business/business.component';
import { DevelopmentComponent } from './Book/book/development/development.component';
import { AcademicComponent } from './Book/book/academic/academic.component';
import { LiteraryWorksComponent } from './Book/book/literary-works/literary-works.component';


const routes: Routes = [
  {path:'',redirectTo: 'book',pathMatch:'full'},
  {path:'book',component:BookComponent},
  {path:'asesory',component:AsesoryComponent},
  {path:'verse',component:VerseComponent},
  {path:'business',component:BusinessComponent},
  {path:'development',component:DevelopmentComponent},
  {path:'academic',component:AcademicComponent},
  {path:'literaryWorks',component:LiteraryWorksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
