import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionGroupComponent } from './components/accordion/accordion-group.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionGComponent } from './accordion-g.component';

@NgModule({
  declarations: [
    AccordionGComponent,
    AccordionGroupComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AccordionGComponent,
    AccordionGroupComponent,
    AccordionComponent]
})
export class AccordionGroupModule { }
