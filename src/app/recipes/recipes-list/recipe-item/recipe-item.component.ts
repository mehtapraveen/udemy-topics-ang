import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipesNew: Recipe
  // @Output() recipeItem = new EventEmitter<void>()
  constructor(private recipeser: RecipeService) { }
  @Input() index:number
  ngOnInit(): void {
  }

  //using Output
  // onSelectItem(){
  //   this.recipeItem.emit()
  // }

  //using Service
  // onSelectItem() {
  //   this.recipeser.selectedRecipe.emit(this.recipesNew)
  // }

}
