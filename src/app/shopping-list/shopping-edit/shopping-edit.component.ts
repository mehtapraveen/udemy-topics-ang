import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  editMode = false;
  editedItemIndex: number
  subscription: Subscription;
  editedItem: Ingredient
  @ViewChild('myform', { static: false }) slform: NgForm
  // @ViewChild('name') name: ElementRef;
  // @ViewChild('amount') amount: ElementRef;
  // @Output() item = new EventEmitter<Ingredient>()

  constructor(private shoppingser: ShoppingService) { }

  ngOnInit(): void {
    this.subscription = this.shoppingser.startEditing.subscribe((index) => {
      this.editedItemIndex = index;
      this.editMode = true
      this.editedItem = this.shoppingser.getIngriedient(index)
      this.slform.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }
  ///using output
  // onAddItem() {
  //   const ingName = this.name.nativeElement.value;
  //   const ingAmount = this.amount.nativeElement.value;
  //   const ingredient = new Ingredient(ingName, ingAmount)

  //   this.item.emit(ingredient)
  // }

  ///using services
  // onAddItem() {
  //   const ingName = this.name.nativeElement.value;
  //   const ingAmount = this.amount.nativeElement.value;
  //   const ingredient = new Ingredient(ingName, ingAmount)
  //   this.shoppingser.addItem(ingredient)
  // }
  //

  //using tdf-forms
  onSubmit(form: NgForm) {
    const value = form.value
    const ingredient = new Ingredient(value.name, value.amount)
    if (this.editMode) {
      this.shoppingser.updateIngredient(this.editedItemIndex, ingredient)
    }
    else {
      this.shoppingser.addItem(ingredient)

    }
    this.editMode = false;
    form.reset()
  }
  onClear() {
    this.slform.reset()
    this.editMode = false
  }
  onDelete() {
    this.shoppingser.delete(this.editedItemIndex)

    this.onClear()
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
