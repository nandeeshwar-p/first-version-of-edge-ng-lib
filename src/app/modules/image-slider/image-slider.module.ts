import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ImagemainComponent } from './image-slider-main.component';
import { ImageSliderDocComponent } from './image-slider-doc/image-slider-doc.component';
import { ImageDotDirective } from './image-dot.directive';
import { DemoMaterialModule } from 'src/app/demo.material.module';

@NgModule({
  declarations: [
    ImagemainComponent,
    ImageSliderComponent,
    ImageSliderDocComponent,
    ImageDotDirective
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    DemoMaterialModule
  ],
  exports:[
    ImagemainComponent,
    ImageSliderComponent,
    ImageSliderDocComponent
  ]
})
export class ImageSliderModule { }
