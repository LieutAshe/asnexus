import { Component } from '@angular/core';

// import { categories } from "../categories";
import { categories } from '../category';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  category = [...categories];
  

}
