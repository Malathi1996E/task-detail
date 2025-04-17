import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export interface Investment {
  assetType: string;
  quantity: number;
  purchasePrice: number;
  purchaseDate: string;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class InvestmentModule { }
