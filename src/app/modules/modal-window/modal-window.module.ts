import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { SecondComponentComponent } from './components/second-component/second-component.component';
import { ThirdComponentComponent } from './components/third-component/third-component.component';
import { ModelComponent } from './modal-window.component';

@NgModule({
  declarations: [
    ModelComponent,
    ModalComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ModelComponent,
    ModalComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent
  ]
})
export class ModalWindowModule { }
