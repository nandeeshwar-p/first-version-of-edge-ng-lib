import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ImagemainComponent } from './image-slider-main.component';
import { ImageSliderDocComponent } from './image-slider-doc/image-slider-doc.component';

@NgModule({
  declarations: [
    ImagemainComponent,
    ImageSliderComponent,
    ImageSliderDocComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports:[
    ImagemainComponent,
    ImageSliderComponent,
    ImageSliderDocComponent
  ]
})
export class ImageSliderModule { }
