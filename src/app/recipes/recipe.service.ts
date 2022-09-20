import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from './../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes : Recipe[]=[
        new Recipe ('Schnitzel' , 'This is simply a test ' , 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2021_32/1759222/ratatouille-mc-main-210809-v2.jpeg'
        ,[
          new Ingredient('Meat' , 1),
          new Ingredient ('French Fries',20)
        ]),
        new Recipe ('Burger' , 'yes ' , 'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg'
        ,[
          new Ingredient ('Buns',2),
          new Ingredient ('Meat',1)
        ])
      ];

      constructor(private slService : ShoppingListService){}
      getRecipes(){
        return this.recipes.slice();
      }
      addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
      }
}