import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { HTML_CODES} from '../../constants/constants';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ThirdComponentComponent implements OnInit {


  @Input() modal;

  public close = HTML_CODES.close;

  public buttonGroup = 'modal-footer';

  constructor() { }

  ngOnInit() {
  }

  save() {
    alert('changes for Modal 3 saved');
  }
}
