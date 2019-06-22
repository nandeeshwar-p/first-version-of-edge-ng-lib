import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { QuickDatePickerModule } from './quick-date-picker/quick-date-picker.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContextMenuModule } from './context-menu/context-menu.module';
import { ContextMenuDocComponent } from './context-menu-doc/context-menu-doc.component';
import { DemoMaterialModule } from '../../demo.material.module';

import { MenuComponent } from './c-menu.component';

@NgModule({
  declarations: [
    MenuComponent,
    ContextMenuDocComponent
  ],
  providers: [DatePipe],

  imports: [
    CommonModule,
    BrowserModule, QuickDatePickerModule,
    ContextMenuModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  exports:[
    MenuComponent,
    ContextMenuDocComponent
  ]
})
export class ContextMenuModuleInfo { }
