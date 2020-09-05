import { Component, OnInit } from '@angular/core';

export interface Holdings {
  ticker: string;
  shares: number;
  averageCost: number;
}

const holdings: Holdings[] = [
  {ticker: 'ABBV', shares: 1.0079, averageCost: 1.0079},
  {ticker: 'TSLA', shares: 4.0026, averageCost: 4.0026},
  {ticker: 'WMT', shares: 6.941, averageCost: 6.941},
  {ticker: 'HD', shares: 9.0122, averageCost: 9.0122},
  {ticker: 'VZ', shares: 10.811, averageCost: 10.811},
];

@Component({
  selector: 'app-holdingstable',
  templateUrl: './holdingstable.component.html',
  styleUrls: ['./holdingstable.component.scss']
})
export class HoldingstableComponent implements OnInit {

  displayedColumns: string[] = ['ticker', 'shares', 'price', 'averagecost', 'percentofportfolio', 'gainorloss', 'dividendyield', 'annualincome'];
  dataSource = holdings;

  constructor() { }

  ngOnInit(): void {
  }

  public holdingsNumber(): number {
    return holdings.length;
  }

}
