import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SpeedoMeterComponent } from './speedo-meter/speedo-meter.component';
import { SpeedometerMainComponent } from './sppedometer-main.component';
import { SpeedometerDocComponent } from './speedometer-doc/speedometer-doc.component';
import { DemoMaterialModule } from '../../demo.material.module';

@NgModule({
  declarations: [
    SpeedometerMainComponent,
     SpeedoMeterComponent,
     SpeedometerDocComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    DemoMaterialModule,
  ],
  exports:[
    SpeedometerMainComponent,
     SpeedoMeterComponent,
     SpeedometerDocComponent
  ]
})
export class SpeedometerModule { }
