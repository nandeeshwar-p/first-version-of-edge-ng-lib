import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcludeSelectedValuePipe } from './exclude-selected-value.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectValueExclusionComponent } from './multi-select-value-exclusion.component';

@NgModule({
  declarations: [
    MultiSelectValueExclusionComponent,
    ExcludeSelectedValuePipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports:[MultiSelectValueExclusionComponent,
    ExcludeSelectedValuePipe],
})
export class MultiSelectValueExclusionModule { }
