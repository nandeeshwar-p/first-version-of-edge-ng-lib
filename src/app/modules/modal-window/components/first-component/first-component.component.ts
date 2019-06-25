import { Component, OnInit, Input, ViewChild, TemplateRef, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { HTML_CODES} from '../../constants/constants';
import {IModalOptions} from '../../i-modal-window-options';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class FirstComponentComponent implements OnInit {

  @Input() modal;

  @ViewChild('modal2') modal2;

  public buttonGroup = 'modal-footer';

  public close = HTML_CODES.close;
  title:String="Title";
  content:Object="Content";
  isNextModalRequired:boolean=false;
  modalWindowOptions:IModalOptions;

  @Input() modalOptions:IModalOptions;
  
  constructor() { }

  ngOnInit() {
    console.log("first modal",this.modalOptions);
    this.modalWindowOptions = this.modalOptions.nextModalOptions;
    this.title=this.modalOptions.title;
    this.isNextModalRequired = this.modalOptions.isNextModalRequired;
    this.content = this.modalOptions.content;

  }

  save() {
    alert('changes for Modal 1 saved');
  }
}
