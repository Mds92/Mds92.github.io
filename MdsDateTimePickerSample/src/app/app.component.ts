import { Component } from '@angular/core';
import { IDate } from "mds.angular.datetimepicker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MdsDateTimePicker Sample';
  selectedDate1 = ''
  selectedDate2 = ''

  mdsDatePicker1OnDateChange(date: IDate): void {
    this.selectedDate1 = date.formatString;
  }
  mdsDatePicker2OnDateChange(date: IDate): void {
    this.selectedDate2 = date.formatString;
  }
}
