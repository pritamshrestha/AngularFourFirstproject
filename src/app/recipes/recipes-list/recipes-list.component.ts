import { Component, OnInit } from '@angular/core';
import{Recipe} from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipes:Recipe[]=[
new Recipe("A Test recipe","This is simply the test","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/640px-Chicken-kathi-roll-recipe.jpg"),

new Recipe("A Test recipe","This is simply the test","https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken-kathi-roll-recipe.jpg/640px-Chicken-kathi-roll-recipe.jpg")

];


  constructor() { }

  ngOnInit() {
  }

}
