import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SetupModule} from './setup/setup.module';
import { AppRoutingModule } from './app.routing.module';

import {AppComponent} from './app.component';
import { UserDisplayComponent } from './user-display/user-display.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { Location} from '@angular/common';
import { AccordionModule } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    UserDisplayComponent,
    SideNavigationComponent,
    DashboardComponent,
    UsersComponent
  ],
  imports: [
    SetupModule,
    AppRoutingModule,
    AccordionModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
