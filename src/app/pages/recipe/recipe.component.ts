import { Component } from '@angular/core';
import { IRecipeIngredients } from './recipe';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent {
  RecipeTitle: string = 'Blue Salad';
  PreparationTime: string = '32 MIN';
  ServingCount: string = '2';
  CalorieCount: string = '23';
  RecipeImageUrl: string = 'https://s15.postimg.cc/temvv7u4r/recipe.jpg';
  ActiveTab = 'Direction';
  RecipeIngredients: IRecipeIngredients[] = [
    {
      Name: 'Apple',
      Amount: '2 piece',
    },
    {
      Name: 'Sugar',
      Amount: '2 gm',
    },
    {
      Name: 'Biscuit',
      Amount: '2 kg',
    },
    {
      Name: 'Pineapple',
      Amount: '5 piece',
    },
    {
      Name: 'Apple1',
      Amount: '2 piece',
    },
    {
      Name: 'Sugar1',
      Amount: '2 gm',
    },
    {
      Name: 'Biscuit1',
      Amount: '2 kg',
    },
    {
      Name: 'Pineapple1',
      Amount: '5 piece',
    },
  ];
  RecipeDescription: string[] = [
    'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
    'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
    'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
    'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
    'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
  ];

  setActiveTab(tab: string) {
    this.ActiveTab = tab;
  }
}
