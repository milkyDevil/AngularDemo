import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uploadrecipe',
  templateUrl: './uploadrecipe.component.html',
  styleUrls: ['./uploadrecipe.component.scss'],
})
export class UploadrecipeComponent {
  constructor(private router: Router) {}
  public recipeCategories : Array<string> = [
    "Curry",
    "Soup",
    "Fry",
    "Bake",
    "Grill",
    "Salad",
    "Dessert",
    "Beverage",
    "Snack",
    "Appetizer",
    "Breakfast",
    "Sandwich",
    "Pizza",
    "Pasta",
    "Rice",
    "Bread",
    "Cake",
    "Cookie",
    "Pie",
    "Ice Cream"
  ];

  public selectedCategory: string = '';

  public selectedType: string = '';
  
  navigateToHome() {
    this.router.navigate(['/home']);
  }
}

