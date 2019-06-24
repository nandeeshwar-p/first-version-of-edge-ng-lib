import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IndetreeComponent } from './indeterminate-tree-structure.component';
import { IndetreeDocComponent } from './indeterminate-tree-doc/indeterminate-tree-doc.component';		
import { DemoMaterialModule } from '../../demo.material.module';		

@NgModule({
  declarations: [
    IndetreeComponent,
    TreeNodeComponent,
    IndetreeDocComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DemoMaterialModule
  ],
  exports:[
    IndetreeComponent,
    TreeNodeComponent,
    IndetreeDocComponent
  ]
})
export class IndeterminateTreeStructureModule { }
