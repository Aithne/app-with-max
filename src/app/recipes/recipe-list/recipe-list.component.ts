import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    // tslint:disable-next-line:max-line-length
    {name: 'Recipe name', description: 'Description', imagePath: 'https://pixnio.com/free-images/2017/05/18/2017-05-18-11-06-36-900x576.jpg'},
    // tslint:disable-next-line:max-line-length
    {name: 'Recipe name 2', description: 'Description 2', imagePath: 'https://pixnio.com/free-images/2017/05/18/2017-05-18-11-06-36-900x576.jpg'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
