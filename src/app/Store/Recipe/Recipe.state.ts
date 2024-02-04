import { createEntityAdapter } from "@ngrx/entity";
import { RecipeModel, IRecipeResponse } from "../Model/Recipe.model";

export const UploadRecipeAdapter = createEntityAdapter<IRecipeResponse>();
export const UploadRecipeState:RecipeModel = UploadRecipeAdapter.getInitialState();