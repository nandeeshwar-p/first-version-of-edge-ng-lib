import { Component } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModelComponent {
  title = 'modal-window';

  public buttonGroup = 'modal-footer';
}
