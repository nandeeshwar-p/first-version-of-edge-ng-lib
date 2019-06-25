import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExcludeSelectedValuePipe } from './exclude-selected-value.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MultiSelectValueExclusionComponent } from './multi-select-value-exclusion.component';
import { DemoMaterialModule } from 'src/app/demo.material.module';

@NgModule({
  declarations: [
    MultiSelectValueExclusionComponent,
    ExcludeSelectedValuePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DemoMaterialModule
  ],
  exports:[MultiSelectValueExclusionComponent,
    ExcludeSelectedValuePipe,
  ],
})
export class MultiSelectValueExclusionModule { }
