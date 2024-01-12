import { Inject, Injectable } from '@angular/core';
import { RecipeObject } from '../home';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  AllRecipes: RecipeObject[] = [
    {
      RecipeNumber: '01',
      RecipeTitle: 'Delicious Pancakes',
      RecipeImage: 'https://s15.postimg.cc/temvv7u4r/recipe.jpg',
      RecipeDescription:
        'A tasty breakfast treat to start your day A tasty breakfast treat to start your day A tasty breakfast treat to start your day A tasty breakfast treat to start your day A tasty breakfast treat to start your day A tasty breakfast treat to start your day.',
    },
    {
      RecipeNumber: '02',
      RecipeTitle: 'Spaghetti Bolognese',
      RecipeImage:
        'https://zippypaws.com/app/uploads/2018/05/strawberry-waffles-1024x668.jpg',
      RecipeDescription: 'Classic Italian pasta dish with a rich meat sauce.',
    },
    {
      RecipeNumber: '03',
      RecipeTitle: 'Vegetarian Pizza',
      RecipeImage: '',
      RecipeDescription: 'A flavorful pizza loaded with fresh vegetables.',
    },
    {
      RecipeNumber: '04',
      RecipeTitle: 'Chocolate Chip Cookies',
      RecipeImage: 'https://s15.postimg.cc/temvv7u4r/recipe.jpg',
      RecipeDescription: 'Homemade cookies with gooey chocolate chips.',
    },
    {
      RecipeNumber: '05',
      RecipeTitle: 'Grilled Chicken Salad',
      RecipeImage: '',
      RecipeDescription: 'A healthy and delicious salad with grilled chicken.',
    },
  ];
  constructor(@Inject(APP_SERVICE_CONFIG) private config:AppConfig) {
    console.log("env", this.config.apiEndpoint)
  }
  getRecipeList() {
    return this.AllRecipes;
  }
}
