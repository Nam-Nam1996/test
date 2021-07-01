import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UpdateComponent} from "./update/update.component";
import {ListComponent} from "./list/list.component";
import {AppComponent} from "./app.component";
import {createComponent} from "@angular/compiler/src/core";
import {CreatComponent} from "./creat/creat.component";

const routes: Routes = [
  {path: '', component:  ListComponent},
  {path:'update/:id',component:UpdateComponent},
  {path:'creat', component:CreatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
