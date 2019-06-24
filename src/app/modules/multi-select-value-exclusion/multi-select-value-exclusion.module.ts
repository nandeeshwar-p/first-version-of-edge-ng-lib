import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcludeSelectedValuePipe } from './exclude-selected-value.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectValueExclusionComponent } from './multi-select-value-exclusion.component';
import { MultiSelcttDocComponent } from './multi-selctt-doc/multi-selctt-doc.component';

@NgModule({
  declarations: [
    MultiSelectValueExclusionComponent,
    ExcludeSelectedValuePipe,
    MultiSelcttDocComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[MultiSelectValueExclusionComponent,
    ExcludeSelectedValuePipe,
    MultiSelcttDocComponent],
})
export class MultiSelectValueExclusionModule { }
