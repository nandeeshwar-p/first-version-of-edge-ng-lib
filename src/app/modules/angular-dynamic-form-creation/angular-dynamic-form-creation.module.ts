import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormElemComponent } from './dynamic-form-elem/dynamic-form-elem.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DynamicFormComponent } from './angular-dynamic-form-creation.component';

@NgModule({
  declarations: [
    DynamicFormComponent,
    DynamicFormElemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],

  exports:[
    DynamicFormComponent,
    DynamicFormElemComponent
  ]
})
export class AngularDynamicFormCreationModule { }
