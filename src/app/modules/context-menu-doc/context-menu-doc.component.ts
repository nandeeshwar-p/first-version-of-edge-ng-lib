import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ViewEncapsulation, ElementRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';

@Component({
  selector: 'app-context-menu-doc',
  templateUrl: './context-menu-doc.component.html',
  styleUrls: ['./context-menu-doc.component.scss']
})
export class ContextMenuDocComponent implements OnInit {

  constructor(private elem: ElementRef) {}

  ngOnInit() {
    
  }
}
