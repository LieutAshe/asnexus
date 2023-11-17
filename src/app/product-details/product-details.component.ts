import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { product, products } from '../products/MOUSE';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  Product: product | undefined;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = String(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.Product = products.find(product => product.id === productIdFromRoute);
  }
}
