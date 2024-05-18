// add-tocard.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-tocard',
  templateUrl: './add-tocard.component.html',
  styleUrls: ['./add-tocard.component.css']
})
export class AddTOcardComponent implements OnInit {

  availableImages: string[] = ['assets/b.jpg', 'assets/c.jpg', 'assets/f.jpg', 'assets/e.jpg'];
  selectedImages: string[] = [];
  showImages: boolean = false;
  
  constructor(private router: Router) {}

  ngOnInit(): void {}

  addToCart(imageUrl: string): void {
    if (!this.selectedImages.includes(imageUrl)) {
      this.selectedImages.push(imageUrl);
    }
  }

  navigateToSelectImage(): void {
    this.router.navigate(['selectimage']);
  }
}
