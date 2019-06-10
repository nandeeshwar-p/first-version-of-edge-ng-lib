import { Component, OnInit, Input, ViewChild, ViewEncapsulation} from '@angular/core';
import { HTML_CODES} from '../../constants/constants';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class SecondComponentComponent implements OnInit {

  @Input() modal;

  @ViewChild('modal3') modal3;

  public buttonGroup = 'modal-footer';

  public close = HTML_CODES.close;

  constructor() { }

  ngOnInit() {
  }

  save() {
    alert('changes for Modal 2 saved');
  }
}
