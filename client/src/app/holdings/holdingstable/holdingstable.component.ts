import { Component, OnInit, ViewChild } from '@angular/core';
import { HoldingsService, Holdings } from './../holdings.service';

import {MatTable} from '@angular/material/table';

@Component({
  selector: 'app-holdingstable',
  templateUrl: './holdingstable.component.html',
  styleUrls: ['./holdingstable.component.scss']
})
export class HoldingstableComponent implements OnInit {

  displayedColumns: string[] = ['ticker', 'shares', 'price', 'averagecost', 'percentofportfolio', 'gainorloss', 'dividendyield', 'annualincome', 'delete'];
  holdingsSource: Holdings[];

  constructor(private holdingsService: HoldingsService) {
    this.holdingsSource = holdingsService.getHoldings();
  }

  ngOnInit(): void {
  }
  @ViewChild(MatTable) table: MatTable<any>;

  public getHoldingsNumber(): number {
    return this.holdingsService.getHoldingsNumber();
  }

  public addHolding(){
    this.holdingsService.holdings.push({ticker: 'GOOG', shares: 1.0079, averageCost: 1.0079})
    this.table.renderRows();

  }
  public delete(row: any): void {
    const index = this.holdingsSource.indexOf(row, 0);
    if (index > -1) {
      this.holdingsSource.splice(index, 1);
    }
    this.table.renderRows();
  }

}
