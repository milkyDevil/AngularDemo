import { createReducer } from "@ngrx/store";
import { UploadRecipeState } from "./Recipe.state";

const _uploadrecipeReducer= createReducer(UploadRecipeState)
export function UploadrecipeReducer(state:any,action:any){}