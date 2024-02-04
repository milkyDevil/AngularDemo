import { createAction, props } from "@ngrx/store";
import { IRecipePayload } from "../Model/Recipe.model";

export const BEGIN_UPLOADRECIPE = '[auth] begin upload recipe';

export const beginUploadRecipe = createAction(BEGIN_UPLOADRECIPE, props<{ uploadrecipedata: IRecipePayload }>());

export const UPLOADRECIPE_SUCCESS = '[auth] upload recipe success';
export const uploadrecipeSuccess = createAction(UPLOADRECIPE_SUCCESS, props<{ data: object | null}>());

export const UPLOADRECIPE_FAILURE = '[auth] upload recipe failure';
export const uploadrecipeFailure = createAction(UPLOADRECIPE_FAILURE, props<{ data: object | null}>());

