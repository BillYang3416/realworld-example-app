import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListErrorsComponent } from './list-errors/list-errors.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListErrorsComponent],
  exports: [
    ListErrorsComponent
  ]
})
export class SharedModule { }
