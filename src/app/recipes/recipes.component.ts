import { Component } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {
  selectedRecipe: Recipe = null;

  constructor() { }

  showRecipeDetails(recipe) {
    this.selectedRecipe = recipe;
  }

}
