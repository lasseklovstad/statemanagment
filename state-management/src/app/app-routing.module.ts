import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FarmComponent} from "./components/farm/farm.component";

const routes: Routes = [
  {path:"", component:FarmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
