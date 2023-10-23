import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'u-project';
  loadedFeature = 'recipe'
  onNavigate(feature: string) {
    this.loadedFeature = feature
  }



}
