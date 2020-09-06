import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

export interface Holdings {
  ticker: string;
  shares: number;
  averageCost: number;
  dividendyield: number;
}

@Injectable({providedIn: 'root'})
export class HoldingsService {
  holdings: Holdings[] = [
    {ticker: 'ABBV', shares: 1.0079, averageCost: 1.0079, dividendyield: null},
    {ticker: 'TSLA', shares: 4.0026, averageCost: 4.0026, dividendyield: null},
    {ticker: 'WMT', shares: 6.941, averageCost: 6.941, dividendyield: null},
    {ticker: 'HD', shares: 9.0122, averageCost: 9.0122, dividendyield: null},
    {ticker: 'VZ', shares: 10.811, averageCost: 10.811, dividendyield: null},
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
    const APIKey = 'XFHHFVZVB33KDIM6'
    const source = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${APIKey}`
    this.http.get(source).subscribe(res => {
      const found = this.holdings.find(e => e.ticker == ticker);
      found.dividendyield = res.DividendYield
    })

  }
}
