import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Subject } from "rxjs";
@Injectable()
export class RecipeService {

    // selectedRecipe = new EventEmitter<Recipe>();
    recipesChanged = new Subject<Recipe[]>()
    // private Recipes: Recipe[] = [
    //     new Recipe('French Fries',
    //         'From MC Donalds',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSMNV87wDV6CFAAoH_y70QaiY3KbVFbbDhqw&usqp=CAU',
    //         [new Ingredient('frenchFries', 50),
    //         new Ingredient('Burger', 100)]),
    //     new Recipe('Burger',
    //         'from BurgerKing',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQreKsQrrvqgOum5T8szPiSP8gCrjqy9GvOlA&usqp=CAU',
    //         [new Ingredient('Burger', 100),
    //         new Ingredient('frenchFries', 50)])
    // ]
    private Recipes: Recipe[] = []
    constructor(private shoppingser: ShoppingService) { }

    getRecipes(index: number) {
        return this.Recipes[index]
    }
    getRecipe() {
        return this.Recipes.slice()
    }
    setrecipes(recipes: Recipe[]) {
        this.Recipes = recipes
        this.recipesChanged.next(this.Recipes.slice())
    }

    addIngridientToShoppingList(ingredient: Ingredient[]) {
        this.shoppingser.addIngredients(ingredient)
    }
    addrecipe(recipe: Recipe) {
        this.Recipes.push(recipe)
        this.recipesChanged.next(this.Recipes.slice())
    }
    updateRecipe(index: number, newRecipe: Recipe) {
        this.Recipes[index] = newRecipe
        this.recipesChanged.next(this.Recipes.slice())

    }
    deleteRecipe(index: number) {
        this.Recipes.splice(index, 1)
        this.recipesChanged.next(this.Recipes.slice())
    }


}