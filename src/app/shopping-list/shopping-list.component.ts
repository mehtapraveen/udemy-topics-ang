import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';
import { RecipeService } from '../recipes/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],

})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]
  // ingredients:Ingredient [] = [
  //   new Ingredient('hello',4),
  //   new Ingredient('world',6)
  // ]
  private subscribe: Subscription
  constructor(private shoppingser: ShoppingService, private recipeser: RecipeService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingser.getIngriedients()
    this.subscribe = this.shoppingser.ingriedientChanged.subscribe((item: Ingredient[]) => {
      this.ingredients = item
    })



  }

  onedit(index: number) {
    this.shoppingser.startEditing.next(index)
  }
  // using output
  // addedItem(itemList:Ingredient){
  //   this.ingredients.push(itemList)
  // }

  ngOnDestroy() {
    this.subscribe.unsubscribe()
  }

}
