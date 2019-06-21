import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material';
import { ContextMenuDocComponent } from './context-menu-doc.component';

@NgModule({
  declarations: [
    ContextMenuDocComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule
  ],
  exports: [ContextMenuDocComponent]
})
export class ContextMenuDocModuleInfo { }
