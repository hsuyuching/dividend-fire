import { Injectable } from '@angular/core';

export interface Holdings {
  ticker: string;
  shares: number;
  averageCost: number;
}

@Injectable({providedIn: 'root'})
export class HoldingsService {
  holdings: Holdings[] = [
    {ticker: 'ABBV', shares: 1.0079, averageCost: 1.0079},
    {ticker: 'TSLA', shares: 4.0026, averageCost: 4.0026},
    {ticker: 'WMT', shares: 6.941, averageCost: 6.941},
    {ticker: 'HD', shares: 9.0122, averageCost: 9.0122},
    {ticker: 'VZ', shares: 10.811, averageCost: 10.811},
  ];

  public getHoldings(): Holdings[] {
    console.log("*", this.holdings)
    return this.holdings;
  }

  public getHoldingsNumber(): number {
    return this.holdings.length;
  }

}
