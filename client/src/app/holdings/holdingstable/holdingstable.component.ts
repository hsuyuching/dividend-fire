import { Component, OnInit } from '@angular/core';
import { HoldingsService, Holdings } from './../holdings.service';

@Component({
  selector: 'app-holdingstable',
  templateUrl: './holdingstable.component.html',
  styleUrls: ['./holdingstable.component.scss']
})
export class HoldingstableComponent implements OnInit {
  displayedColumns: string[] = ['ticker', 'shares', 'price', 'averagecost', 'percentofportfolio', 'gainorloss', 'dividendyield', 'annualincome'];
  holdingsSource: Holdings[];

  constructor(private holdingsService: HoldingsService) {
    this.holdingsSource = holdingsService.getHoldings();
    for (let holding of this.holdingsSource) {
      this.holdingsService.getStockInfo(holding.ticker)
    }
  }

  ngOnInit(): void {
  }

  public getHoldingsNumber(): number {
    return this.holdingsService.getHoldingsNumber();
  }

}
