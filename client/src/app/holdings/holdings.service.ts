import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Holdings {
  ticker: string;
  shares: number;
  averageCost: number;
  dividendyield: number;
  price: number;
  totalvalue: number;
}

@Injectable({providedIn: 'root'})
export class HoldingsService {
  holdings: Holdings[] = [
    {ticker: 'ABBV', shares: 1.0079, averageCost: 1.0079, dividendyield: null, price: null, totalvalue: null},
    {ticker: 'TSLA', shares: 4.0026, averageCost: 4.0026, dividendyield: null, price: null, totalvalue: null},
    {ticker: 'WMT', shares: 6.941, averageCost: 6.941, dividendyield: null, price: null, totalvalue: null},
    {ticker: 'HD', shares: 9.0122, averageCost: 9.0122, dividendyield: null, price: null, totalvalue: null},
    {ticker: 'VZ', shares: 10.811, averageCost: 10.811, dividendyield: null, price: null, totalvalue: null},
  ];

  info: any;

  constructor(private http: HttpClient) {
  }

  public getHoldings(): Holdings[] {
    return this.holdings;
  }

  public getHoldingsNumber(): number {
    return this.holdings.length;
  }

  public getStockInfo(ticker: string) {
    const dividend = `http://localhost:3000/dividend/${ticker}`;
    this.http.get(dividend).subscribe(res => {
      const found = this.holdings.find(e => e.ticker == ticker);
      found.dividendyield = res.DividendYield
    },
    err => console.log('HTTP Error', err))

    const price = `http://localhost:3000/price/${ticker}`;
    this.http.get(price).subscribe(res => {
      const found = this.holdings.find(e => e.ticker == ticker);
      found.price = res[0]['close']
      found.totalvalue = found.shares*found.price
    })
  }
}
