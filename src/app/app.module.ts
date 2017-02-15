import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SetupModule} from './setup/setup.module';

import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SetupModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
