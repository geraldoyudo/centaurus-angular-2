import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AlertModule } from 'ng2-bootstrap';
import { ChartsModule } from 'ng2-charts';

import {FormlyModule, FormlyBootstrapModule} from 'ng2-formly';

import { LineChartDemoComponent} from './line-chart-demo-component/line-chart-demo-component.component';
import { FormlyFormComponent } from './formly-form/formly-form.component';

@NgModule({
  declarations: [
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
