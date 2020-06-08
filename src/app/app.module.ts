import { SimpleCalendarModule } from './../simple-calendar/simple-calendar.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SimpleCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
