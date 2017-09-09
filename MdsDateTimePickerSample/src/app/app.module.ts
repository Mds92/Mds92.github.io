import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import 'hammerjs';

import { AppComponent } from './app.component';
import { MdsDatetimePickerModule } from 'mds.angular.datetimepicker';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MdsDatetimePickerModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
