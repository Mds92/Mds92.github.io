import { Component, ViewChild } from '@angular/core';
import { IDate, IRangeDate, MdsDatetimePickerComponent } from "mds.angular.datetimepicker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('mdsDateTimePicker') mdsDateTimePicker: MdsDatetimePickerComponent;

  private inLine = false;
  private isPersian = false;
  private timePicker = false;
  private rangeSelector = false;
  private persianChar = false;
  private templateType = 2;
  private textBoxType = 1;
  private format = '';
  private placeHolder = '';
  private buttonIcon = '<span class="fa fa-calendar" aria-hidden="true"></span>';

  private settingChange(): void {
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

  mdsDatePicker1OnDateChange(date: IDate): void {
  }
  mdsDatePicker2OnDateChange(date: IDate): void {
  }
  mdsDatePicker1OnDateRangeChange(date: IRangeDate): void {
  }
}
