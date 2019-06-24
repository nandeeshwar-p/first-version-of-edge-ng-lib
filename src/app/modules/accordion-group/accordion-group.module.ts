import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionGroupComponent } from './components/accordion/accordion-group.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionGComponent } from './accordion-g.component';
import { DemoMaterialModule } from '../../demo.material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccordionDocComponent } from './accordion-doc/accordion-doc.component';

@NgModule({
  declarations: [
    AccordionGComponent,
    AccordionGroupComponent,
    AccordionComponent,
    AccordionDocComponent
  ],
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule
  ],
  exports:[
    AccordionGComponent,
    AccordionGroupComponent,
    AccordionComponent,
    AccordionDocComponent]
})
export class AccordionGroupModule { }
