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
    const APIKey = 'XFHHFVZVB33KDIM6'
    const companyOverview = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${APIKey}`
    const stockPrice = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${ticker}&outputsize=compat&apikey=${APIKey}`
    this.http.get(companyOverview).subscribe(res => {
      const found = this.holdings.find(e => e.ticker == ticker);
      found.dividendyield = res.DividendYield
    })
    this.http.get(stockPrice).subscribe(res => {
      const found = this.holdings.find(e => e.ticker == ticker);
      found.price = res['Time Series (Daily)']['2020-09-04']["4. close"]
      found.totalvalue = found.shares*found.price
    })
  }
}
