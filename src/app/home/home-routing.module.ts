import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [],
})
export class HomeRoutingModule { }