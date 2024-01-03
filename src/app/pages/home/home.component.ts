import { Component, OnInit } from '@angular/core';
import { RecipeObject } from './home';
import DummyBannerImage from 'src/assets/DummyRecipeImage.svg';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  DummyImagePath = DummyBannerImage;
  AllRecipes: RecipeObject[] = [
    {
      RecipeNumber: '01',
      RecipeTitle: 'Delicious Pancakes',
      RecipeImage: 'https://s15.postimg.cc/temvv7u4r/recipe.jpg',
      RecipeDescription: 'A tasty breakfast treat to start your day.',
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

  constructor() {}
  ngOnInit(): void {}
}
