import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderEDGEComponent } from './header-edge/header-edge.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiSelectValueExclusionModule } from './modules/multi-select-value-exclusion/multi-select-value-exclusion.module';
import { AccordionGroupModule } from './modules/accordion-group/accordion-group.module';
import { ModalWindowModule } from './modules/modal-window/modal-window.module';
import { AngularPaginationModule } from './modules/angular-pagination/angular-pagination.module';
import { AngularPaginationDocModule } from './modules/angular-pagination-doc/angular-pagination-doc.module';
import { SpeedometerModule } from './modules/speedometer/speedometer.module';
import { AngularDynamicFormCreationModule } from './modules/angular-dynamic-form-creation/angular-dynamic-form-creation.module';
import { DynamicNgFormCreationFromJSONModule } from './modules/dynamic-ng-form-creation-from-json/dynamic-ng-form-creation-from-json.module';
import { ImageSliderModule } from './modules/image-slider/image-slider.module';
import { IndeterminateTreeStructureModule } from './modules/indeterminate-tree-structure/indeterminate-tree-structure.module';
import { IndeterminateTreeDocModule } from './modules/indeterminate-tree-doc/indeterminate-tree-doc.module';
import { ContextMenuModuleInfo } from './modules/context-menu/context-menu.module';
import { ContextMenuDocModuleInfo } from './modules/context-menu-doc/context-menu-doc.module';
import { DemoMaterialModule } from './demo.material.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderEDGEComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MultiSelectValueExclusionModule,
    AccordionGroupModule,
    ModalWindowModule,
    AngularPaginationModule,
    AngularPaginationDocModule,
    SpeedometerModule,
    AngularDynamicFormCreationModule,
    DynamicNgFormCreationFromJSONModule,
    ImageSliderModule,
    IndeterminateTreeStructureModule,
    IndeterminateTreeDocModule,
    ContextMenuModuleInfo,
    ContextMenuDocModuleInfo,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
