import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";


@Injectable()
export class ShoppingService {



    ingriedientChanged = new Subject<Ingredient[]>()
    startEditing = new Subject<number>()
    private ingredients: Ingredient[] = [
        new Ingredient('hello', 4),
        new Ingredient('world', 6)
    ]
    getIngriedients() {
        return this.ingredients.slice()
    }
    getIngriedient(index: number) {
        return this.ingredients[index]
    }

    addItem(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingriedientChanged.next(this.ingredients.slice())
    }

    addIngredients(ingredients: Ingredient[]) {
        //one option
        // for(let ingredient of ingredients){
        //     this.addItem(ingredient)
        // }

        //another way

        this.ingredients.push(...ingredients)
        this.ingriedientChanged.next(this.ingredients.slice())
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
        this.ingriedientChanged.next(this.ingredients.slice())
    }
    delete(index: number) {
        this.ingredients.splice(index, 1);
        this.ingriedientChanged.next(this.ingredients.slice())
    }


}