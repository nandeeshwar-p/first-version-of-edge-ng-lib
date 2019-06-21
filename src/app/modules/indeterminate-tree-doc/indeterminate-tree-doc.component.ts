import { Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy } from '@angular/core';


export interface TreeNode {

 label: string;
 checked: boolean;
 children: TreeNode[];

 }

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
selector: 'app-indetermine-tree-doc',

templateUrl: './indeterminate-tree-doc.component.html',
styleUrls: [ './indeterminate-tree-doc.component.css' ],
encapsulation: ViewEncapsulation.Emulated

})

export class IndetreeComponent implements OnInit {
Title = 'IndeterminateTree';

public tree: TreeNode;

public selectedTreeNode: TreeNode | null;
public output = false;
ngOnInit() {
}
constructor() {}

}
