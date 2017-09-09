import { Component } from '@angular/core';
import { IDate, IRangeDate } from "mds.angular.datetimepicker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MdsDateTimePicker Sample';
  selectedDate1 = ''
  selectedDate2 = ''
  selectedDateRange1 = ''

  mdsDatePicker1OnDateChange(date: IDate): void {
    this.selectedDate1 = date == null
      ? ''
      : date.formatString;
  }
  mdsDatePicker2OnDateChange(date: IDate): void {
    this.selectedDate2 = date == null
      ? ''
      : date.formatString;
  }

  mdsDatePicker1OnDateRangeChange(date: IRangeDate): void {
    this.selectedDateRange1 = date == null
      ? ''
      : date.startDate.formatString + ' - ' + date.endDate.formatString;
  }
}
