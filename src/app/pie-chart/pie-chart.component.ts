import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts'
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
  public pieChartLabels = ['Revenue 2017', 'Revenue 2018', 'Revenue 2019', 'Revenue 2020'];
  public pieChartData = [87, 20, 88, 140];
  public pieChartColors = [
    {
      backgroundColor: ['orange', 'brown', 'aquamarine' , 'wheat'],
    },
  ];
  public pieChartType = 'pie';
  constructor() { }

  ngOnInit() {
  }

}
