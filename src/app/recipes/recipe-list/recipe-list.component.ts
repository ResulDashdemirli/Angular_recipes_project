import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from './../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  encapsulation : ViewEncapsulation.None 
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] | undefined;

  constructor(private recipeService: RecipeService) { }
 
  ngOnInit(): void {  
    this.recipes = this.recipeService.getRecipes();
  }

}

