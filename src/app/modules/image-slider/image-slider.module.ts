import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ImagemainComponent } from './image-slider-main.component';

@NgModule({
  declarations: [
    ImagemainComponent,
    ImageSliderComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports:[
    ImagemainComponent,
    ImageSliderComponent
  ]
})
export class ImageSliderModule { }
