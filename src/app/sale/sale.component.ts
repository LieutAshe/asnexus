import { Component } from '@angular/core';

import { onsale } from "../sale";

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {
  sale = [...onsale];
}
