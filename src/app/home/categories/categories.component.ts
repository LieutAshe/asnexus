import { Component } from '@angular/core';

import { cat } from '../../category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {

  category = [...cat];

}
