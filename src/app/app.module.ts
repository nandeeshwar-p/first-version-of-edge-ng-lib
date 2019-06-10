import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultiSelectValueExclusionModule } from './modules/multi-select-value-exclusion/multi-select-value-exclusion.module';
import { AccordionGroupModule } from './modules/accordion-group/accordion-group.module';
import { ModalWindowModule } from './modules/modal-window/modal-window.module';
import { AngularPaginationModule } from './modules/angular-pagination/angular-pagination.module';
import { SpeedometerModule } from './modules/speedometer/speedometer.module';
import { AngularDynamicFormCreationModule } from './modules/angular-dynamic-form-creation/angular-dynamic-form-creation.module';
import { DynamicNgFormCreationFromJSONModule } from './modules/dynamic-ng-form-creation-from-json/dynamic-ng-form-creation-from-json.module';
import { ImageSliderModule } from './modules/image-slider/image-slider.module';
import { IndeterminateTreeStructureModule } from './modules/indeterminate-tree-structure/indeterminate-tree-structure.module';
import { ContextMenuModuleInfo } from './modules/context-menu/context-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultiSelectValueExclusionModule,
    AccordionGroupModule,
    ModalWindowModule,
    AngularPaginationModule,
    SpeedometerModule,
    AngularDynamicFormCreationModule,
    DynamicNgFormCreationFromJSONModule,
    ImageSliderModule,
    IndeterminateTreeStructureModule,
    ContextMenuModuleInfo
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
