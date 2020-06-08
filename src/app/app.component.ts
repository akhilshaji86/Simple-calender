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
  constructor() {
    this.selDate = SimpleCalendarComponent.getToday();
    this.heatmap = {
      '02': {
        color: 'green',
        opacity: 0.5
      }
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
