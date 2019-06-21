import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationDocComponent } from './angular-pagination-doc/angular-pagination-doc.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PagComponent } from './angular-pagination.component';
import { DemoMaterialModule } from '../../demo.material.module';
@NgModule({
  declarations: [
    PagComponent,
    PaginationComponent,
    PaginationDocComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule
  ],
  exports:[
    PagComponent,
    PaginationComponent,
    PaginationDocComponent
  ]
})
export class AngularPaginationModule { }
