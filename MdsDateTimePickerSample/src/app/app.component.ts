import { Component, ViewChild } from '@angular/core';
import { IDate, IRangeDate, MdsDatetimePickerComponent } from "mds.angular.datetimepicker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('mdsDateTimePicker') mdsDateTimePicker: MdsDatetimePickerComponent;

  inLine = false;
  isPersian = false;
  timePicker = false;
  rangeSelector = false;
  persianChar = false;
  templateType = 2;
  textBoxType = 1;
  format = '';
  placeHolder = '';
  buttonIcon = '<span class="fa fa-calendar" aria-hidden="true"></span>';

  settingChange(): void {
    this.mdsDateTimePicker.clear();
    this.mdsDateTimePicker.templateType = this.templateType;
    this.mdsDateTimePicker.inLine = this.inLine;
    this.mdsDateTimePicker.rangeSelector = this.rangeSelector;
    this.mdsDateTimePicker.timePicker = this.timePicker;
    this.mdsDateTimePicker.persianChar = this.persianChar;
    this.mdsDateTimePicker.isPersian = this.isPersian;
    this.mdsDateTimePicker.textBoxType = this.textBoxType;
    this.mdsDateTimePicker.format = this.format;
    this.mdsDateTimePicker.placeHolder = this.placeHolder;
    this.mdsDateTimePicker.buttonIcon = this.buttonIcon;
  }
}
