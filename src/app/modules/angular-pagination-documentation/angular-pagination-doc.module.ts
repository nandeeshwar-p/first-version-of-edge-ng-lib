import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagDocComponent } from './angular-pagination-doc.component';

@NgModule({
  declarations: [
    PagDocComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    PagDocComponent
  ]
})
export class AngularPaginationDocModule { }
