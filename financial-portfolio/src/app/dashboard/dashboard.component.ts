import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { CoreService } from '../core.service';
import { Investment } from '../investment/investment.module';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnInit {
  assetChartLabels: string[] = ['Stocks', 'Bonds', 'Real Estate'];
  assetChartData: number[] = [];
  assetChartType: ChartType = 'pie';

  lineChartLabels: string[] = ['Jan', 'Feb', 'Mar'];
  lineChartData = [{ data: [1000, 1200, 1500], label: 'Portfolio Value' }];

  constructor(private mockService: CoreService) {}

  ngOnInit(): void {
    this.mockService.getInvestments().subscribe((investments: Investment[]) => {
      this.updatePieChartData(investments);
      this.updateLineChartData(investments); // 👈 NEW
    });
  }
  
  updatePieChartData(investments: Investment[]): void {
    const stocks = investments.filter(i => i.assetType === 'Stocks').length;
    const bonds = investments.filter(i => i.assetType === 'Bonds').length;
    const realEstate = investments.filter(i => i.assetType === 'Real Estate').length;
  
    this.assetChartData = [stocks, bonds, realEstate];
  }
  
  updateLineChartData(investments: Investment[]): void {
    // Dummy logic: group by purchase month & sum values
    const portfolioMap: { [key: string]: number } = {};
  
    investments.forEach(inv => {
      const month = new Date(inv.purchaseDate).toLocaleString('default', { month: 'short' });
      const total = inv.quantity * inv.purchasePrice;
      portfolioMap[month] = (portfolioMap[month] || 0) + total;
    });
  
    this.lineChartLabels = Object.keys(portfolioMap);
    this.lineChartData = [{
      data: Object.values(portfolioMap),
      label: 'Portfolio Value'
    }];
  }
  
}
