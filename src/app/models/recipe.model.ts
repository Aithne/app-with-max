import { Ingredient } from './ingredient.model';

export interface Recipe {
  ingredients: Ingredient[];
  detail: string;
}
