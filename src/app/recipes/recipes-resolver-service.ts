import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageService } from "../shared/data-storage-service";
import { RecipeService } from "./recipe.service";


@Injectable({
    providedIn: "root"
})
export class RecipeServiceResolver implements Resolve<Recipe[]>{
    constructor(private dataser: DataStorageService, private recipeser: RecipeService) { }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const recipes = this.recipeser.getRecipe()
        if (recipes.length === 0) {
            return this.dataser.fetchRecipes()

        }
        else {
            return recipes
        }



    }
}