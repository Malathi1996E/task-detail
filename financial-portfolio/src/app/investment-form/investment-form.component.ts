import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CoreService } from '../core.service';
import { Investment } from '../investment/investment.module';

@Component({
  selector: 'app-investment-form',
  templateUrl: './investment-form.component.html',
})
export class InvestmentFormComponent {
  investmentForm = this.fb.group({
    assetType: ['', Validators.required],
    quantity: [0, [Validators.required, Validators.min(1)]],
    purchasePrice: [0, [Validators.required, Validators.min(1)]],
    purchaseDate: ['', Validators.required],
  });

  submitted = false;
  
  constructor(private fb: FormBuilder, private mockService: CoreService) {}

  submitForm() {
    this.submitted = true;
    if (this.investmentForm.valid) {
      // Ensure the values are non-null and assign them to Investment
      const newInvestment: Investment = {
        assetType: this.investmentForm.value.assetType ?? '',  // Default to empty string if null/undefined
        quantity: this.investmentForm.value.quantity ?? 0,     // Default to 0 if null/undefined
        purchasePrice: this.investmentForm.value.purchasePrice ?? 0,  // Default to 0 if null/undefined
        purchaseDate: this.investmentForm.value.purchaseDate ?? '',  // Default to empty string if null/undefined
      };
console.log('Value',newInvestment)
      this.mockService.addInvestment(newInvestment);
      this.investmentForm.reset();
      this.submitted = false;
    }
  }
}
