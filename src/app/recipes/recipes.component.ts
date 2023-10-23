import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],

})
export class RecipesComponent implements OnInit {
  // selectedRecipes: Recipe

  constructor(private recipeser: RecipeService) { }

  ngOnInit(): void {
    // this.recipeser.selectedRecipe.subscribe((recipe: Recipe) => { this.selectedRecipes = recipe })
  }


}
