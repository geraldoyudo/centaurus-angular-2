import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AlertModule } from 'ng2-bootstrap';
import { ChartsModule } from 'ng2-charts';

import {FormlyModule, FormlyBootstrapModule} from 'ng2-formly';

import { LineChartDemoComponent} from './line-chart-demo/line-chart-demo.component';
import { FormlyFormComponent } from './formly-form/formly-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LineChartDemoComponent,
    FormlyFormComponent
  ],
  exports:[
    AppComponent,
    LineChartDemoComponent,
    FormlyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    ChartsModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyBootstrapModule
  ],
})
export class SetupModule { }
