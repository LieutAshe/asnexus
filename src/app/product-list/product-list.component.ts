// product-list.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cat } from '../category'; // Import your cat array
import { products } from '../products/MOUSE';


interface Category {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  product = [...products];

  categoryName: string = '';
  categories: Category[] = [...cat]; // Declare categories array

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const categoryIdParam = params.get('categoryid');
      this.categoryName = this.getCategoryNameById(categoryIdParam);
    });
  }

  getCategoryNameById(categoryId: string | null): string {
    const categoryIdNumber = categoryId ? +categoryId : 0;
    const category = this.categories.find((catItem) => catItem.id === categoryIdNumber);
    return category ? category.name : 'Category Not Found';
  }
}
