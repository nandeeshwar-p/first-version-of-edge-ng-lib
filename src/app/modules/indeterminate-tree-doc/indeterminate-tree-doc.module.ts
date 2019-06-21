import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IndetreeComponent } from './indeterminate-tree-doc.component';

@NgModule({
  declarations: [
    IndetreeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
  ],
  exports:[
    IndetreeComponent
  ]
})
export class IndeterminateTreeDocModule { }
