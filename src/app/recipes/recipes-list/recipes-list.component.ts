import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],

})
export class RecipesListComponent implements OnInit, OnDestroy {
  // @Output() recipeSelected = new EventEmitter<Recipe>()
  Recipes: Recipe[];
  subscription: Subscription
  // Recipes:Recipe[]=[
  //   new Recipe('A test recipe','this is simply a test','https://static.independent.co.uk/2023/06/19/14/01H2W5ZJRN9CJPW6F98CHE8VZA.jpg'),
  //   new Recipe('A recipe','this is simply a test2','https://static.independent.co.uk/2023/06/19/14/01H2W5ZJRN9CJPW6F98CHE8VZA.jpg')
  // ]
  constructor(private recipeser: RecipeService, private router: Router, private acroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.recipeser.recipesChanged.subscribe((recipes: Recipe[]) => {
      this.Recipes = recipes
    })
    this.Recipes = this.recipeser.getRecipe()
  }
  // onRecipeItemSelected(recipe: Recipe) {
  //   this.recipeSelected.emit(recipe)
  // }
  onclick() {
    this.router.navigate(['new'], { relativeTo: this.acroute })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
