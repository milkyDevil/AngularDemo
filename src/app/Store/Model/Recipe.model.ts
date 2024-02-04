import { EntityState } from '@ngrx/entity';

export interface IRecipeIngredients {
  Name: string;
  Amount: string;
}

export interface IRecipeDirectionObj {
  step: string;
}

export interface IRecipeIngredientObj {
  ingredient: string;
  quantity: string;
}

export interface IRecipeResponse {
  status: string;
  message: string;
  data: null;
}

export interface IRecipePayload {
  recipeImageLink: string;
  recipeName: string;
  recipeDescription: string;
  vegNonVeg: string;
  category: string;
  time: string;
  servingCount: string;
  calorieCount: string;
  ingredients: Array<IRecipeIngredientObj>;
  directionSteps: Array<IRecipeDirectionObj>;
  userId: number;
}

export interface RecipeModel extends EntityState<IRecipeResponse> {}
