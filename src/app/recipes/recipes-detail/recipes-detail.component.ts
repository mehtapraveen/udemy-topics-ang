import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  /* previous using input  */
  // @Input() recipe: Recipe
  /* now using route*/
  recipe: Recipe
  id: number
  constructor(private recipeser: RecipeService, private acroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // const id = this.acroute.snapshot.params['id']
    this.acroute.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.recipe = this.recipeser.getRecipes(this.id)
    })
  }
  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.acroute })

    /// another way of doing we construct the url and using ../ to go up one level
    // this.router.navigate(['../',this.id,'edit'],{relativeTo:this.acroute})
  }



  onAddToShoppingList() {
    this.recipeser.addIngridientToShoppingList(this.recipe.ingredient)
  }
  deleteRecipe() {
    this.recipeser.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])
  }



}
