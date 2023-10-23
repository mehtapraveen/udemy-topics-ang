import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private http: HttpClient, private recipeser: RecipeService) { }

    storeRecipes() {
        const recipe = this.recipeser.getRecipe()
        this.http.put('https://hungry-foodie-default-rtdb.firebaseio.com/recipes.json', recipe).subscribe(res => {
            console.log(res)
        })
    }
    fetchRecipes() {
        return this.http.get<Recipe[]>('https://hungry-foodie-default-rtdb.firebaseio.com/recipes.json')
            .pipe(map(recipes => {
                return recipes.map(recipe => {
                    return {
                        ...recipe,
                        ingredient: recipe.ingredient ? recipe.ingredient : []
                    }
                })
            }), tap(recipes => {
                this.recipeser.setrecipes(recipes)

            }))

    }

}