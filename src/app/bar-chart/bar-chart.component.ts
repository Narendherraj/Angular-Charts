import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels = ['2014','2015','2016', '2017', '2018', '2019', '2020'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [425, 453, 520, 532, 914, 1234, 1581], label: 'Reliance'},
    {data: [300, 343, 293, 304, 457, 282, 574], label: 'Airtel' , color: 'red'}
    
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
