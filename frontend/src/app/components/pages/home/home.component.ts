import { Component } from '@angular/core';
import { Food } from '../../../shared/models/Food';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodService: FoodService, activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAllFoodsBySearchTerm(params['searchTerm']);
      } else {
        this.foods = this.foodService.getAll();
      }
    });
   }
}
