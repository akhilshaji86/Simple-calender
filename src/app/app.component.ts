import { SimpleCalendarComponent, HeatMapModel, ColorMapModel } from './../simple-calendar/simple-calendar.component';
import { Component } from '@angular/core';
import { SimpleDate } from 'src/simple-calendar/simple-calendar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public selDate: SimpleDate = { date: 1, month: 1, year: 1 };
  heatmap: HeatMapModel;
  highlightToday: boolean
  colorMap: ColorMapModel;
  zeropad: (num: any, padlen: any, padchar?: string) => string;
  today: Date;
  constructor() {
    this.selDate = SimpleCalendarComponent.getToday();
    this.zeropad = SimpleCalendarComponent.zeropad;
    this.today = new Date();
    let year, month, date;
    year = `${this.today.getFullYear()}`;
    month = this.zeropad(`${this.today.getMonth() + 1}`, 2);
    date = `${this.today.getDate()+3}`; 
    this.heatmap={};
    this.heatmap[Number(year + this.zeropad(month, 2) + this.zeropad(date, 2))] = {
      color: 'green',
      opacity: 1
    };
    this.colorMap = {
      heatMapColor: '#00ff00',
      primaryColor: '#ff0000',
      primaryForeground: 'black',
      backgroundColor: 'gainsboro',
      previousDateColor: '#74C2D1'
    }
    this.highlightToday = true;
  }
  /** Log changes in date */
  dateChanged(date: SimpleDate) {
    console.log(date);
  }
  /** Log changes in month */
  monthChanged(date: SimpleDate) {
    console.log(date);
  }
}
