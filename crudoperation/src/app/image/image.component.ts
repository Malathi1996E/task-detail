import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  currentIndex = 0;
  images: string[] = [
    'assets/a.jpg',
    'assets/b.jpg',
    'assets/c.jpg',
    'assets/d.jpg',
    'assets/e.jpg',
    'assets/f.jpg',
    'assets/h.jpg',
    'assets/g.jpg'  
  ];

  get currentImageSrc(): string {
    return this.images[this.currentIndex];
  }

  backImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
  }
  
  forwardImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    }else {
      this.currentIndex = 0;
    }
  }
 
  
}

