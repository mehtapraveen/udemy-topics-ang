import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number
  editmode = false;
  recipeForm: FormGroup;

  constructor(private acroute: ActivatedRoute, private recipeser: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.acroute.params.subscribe((params: Params) => {
      this.id = params['id']
      this.editmode = params['id'] != null
      this.initForm()
      console.log(this.editmode)
    })
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = ''
    let recipeIngredients = new FormArray([])

    if (this.editmode) {
      const recipe = this.recipeser.getRecipes(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description
      if (recipe['ingredient']) {
        for (let ingredient of recipe.ingredient) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
            })
          )
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients

    })
  }
  get Ingredient() {
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }

  onSubmit() {
    // const newRecipe= new Recipe(this.recipeForm.value['name'],
    // this.recipeForm.value['description'],
    // this.recipeForm.value['imagePath'],
    // this.recipeForm.value['ingredients'])
    if (this.editmode) {
      this.recipeser.updateRecipe(this.id, this.recipeForm.value)
    }
    else {
      this.recipeser.addrecipe(this.recipeForm.value)
    }
    this.oncancel()
  }
  onAddIngridient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
      })
    )
  }
  oncancel() {
    this.router.navigate(['../'], { relativeTo: this.acroute })
  }
  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)
  }

}
