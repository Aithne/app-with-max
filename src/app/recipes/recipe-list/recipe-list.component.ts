import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() showDetails = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    {name: 'Recipe name', description: 'Description', imagePath: 'https://c.pxhere.com/photos/72/3e/beauty_bloom_blue_droplets_flora_flower_fresh_macro-917079.jpg!d'},
    // tslint:disable-next-line:max-line-length
    {name: 'Recipe name 2', description: 'Description 2', imagePath: 'https://torange.biz/photofx/2/8/image-profile-picture-desktop-wallpaper-autumn-rain-2795.jpg'}
  ];

  constructor() { }

  showRecipeDetails(recipe: Recipe) {
    this.showDetails.emit(recipe);
  }

}
