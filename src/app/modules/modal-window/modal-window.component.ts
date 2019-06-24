import { Component, OnInit, Input } from '@angular/core';
import {IModalOptions} from './i-modal-window-options';

@Component({
  selector: 'app-model',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModelComponent implements OnInit{
  title = 'modal-window';

  public buttonGroup = 'modal-footer';
  modalWindowOptions:IModalOptions;
  @Input() modalOptions:IModalOptions;
  
  ngOnInit() {
    console.log("outer modal",this.modalOptions);
    this.modalWindowOptions = this.modalOptions;
  }
}
